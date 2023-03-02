import { mailOptions, transporter } from "../../config/nodemailer";
import nextConnect from 'next-connect';
import fileUpload from 'express-fileupload'
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  },
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${key}: \n${val} \n \n`),
    ""
  );

  return {
    text: stringData,
    html: `
      <p>Nombre: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `
  };
};

const handler = nextConnect({
  onError(error, req: any, res: any) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(404).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

handler.use(fileUpload())

handler.use(async (req, res, next) => {
  const files = req.files
  if (files) {
    const file = files.file
    await file.mv('pages/api/uploads/' + file.name, (err: any) => {
      if (err) {
        return res.status(500).json({err})
      };
    })
  }
  next()
})

handler.post(async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const {name, email, message, send } = data

      const files = req.files
      let file
      if (files && files.file) {
        file = files.file
      }
      let info: any = {
        ...mailOptions(send),
        ...generateEmailContent({name, email, message}),
        subject: 'Contacto de la web de BACORD'
      }
      if (file) {
        info = {...info, attachments: [{
          filename: file.name,
          path: 'pages/api/uploads/' + file.name
        }]}
      }
      await transporter.sendMail({...info})
      if (file) {
        await fs.unlinkSync('pages/api/uploads/' + file.name)
      }
      return res.status(200).json({ success: true });
    } catch (err) {
      if (await fs.existsSync('pages/api/uploads/' + req.files.file.name)) {
        await fs.unlinkSync('pages/api/uploads/' + req.files.file.name)
      }
      return res.status(400).json({ message: err });
    }
  }
  return res.status(400).json({ message: "Bad request" });
});
export default handler;

