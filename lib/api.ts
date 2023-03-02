import axios from "axios";

export const sendContactForm = (data: any, mail: string) => {
  data.append('send', mail)
  return axios.post("/api/contact", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  .catch((err) => console.log(err))
}