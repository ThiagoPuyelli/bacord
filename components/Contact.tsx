import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import emailjs from '@emailjs/browser'

const Contact: NextPage = () => {
  const ContactStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .contactForm {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding: 50px;
      padding-left: 120px;
      padding-right: 120px;
      width: 100%;
      .data,
      .message {
        width: 400px;
      }

      .data .inputContact {
        width: 100%;
      }
      .inputContact,
      .message {
        border: 1px solid gray;
        padding: 20px;
        border-radius: 20px;
      }

      .buttonDiv {
        width:100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 60px;
        .submitContact {
          padding: 10px;
          background: var(--title);
          box-shadow: 0px 0px 4px #ccc;
          border: 1px solid #ccc;
          color: white;
          text-transform: uppercase;
          border-radius: 20px;
          width: 300px;
          font-weight: bold;
          cursor: pointer;
          transition: 300ms all;
        }
        .submitContact:hover {
          background: #570312;
        }
      }
    }

    @media (max-width: 1050px) {
      .contactForm {
        flex-flow: column wrap;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        .message {
          margin-top: 20px;
          height: 150px;
        }
      }
    }

    .errors {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 100%;
      margin-top: 60px;
      font-size: 18px;
      .msgError {
        color: red;
        text-shadow: 0px 0px 1px var(--title);
      }
    }
    
    .msgSuccess {
      text-align: center;
      width: 100%;
      color: green;
      font-weight: bold;
      font-size: 20px;
      display: none;
    }

    @media (max-width: 636px) {
      .message,
      .data {
        width: 100% !important;
      }
    }
  `
  const consultSchema = yup.object({
    name: yup.string().required().max(70),
    message: yup.string().required().max(400),
    email: yup.string().required().max(30).email()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(consultSchema),
    reValidateMode: 'onSubmit'
  })

  const submitForm = async (data: any) => {
    const contactForm: HTMLFormElement|null = document.querySelector('.contactForm')
    if (contactForm) {
      console.log(contactForm)
    }
    const msgSuccess: HTMLElement|null = document.querySelector('.msgSuccess')
    if (msgSuccess) msgSuccess.style.display = 'block'
    /*const buttonDiv = document.querySelector('.')
    if (contactForm) {
      const sendMail = await emailjs.sendForm('service_owdnfby', 'template_y55xkuq', contactForm, 'CqWIk1GaVBVy2E-h6')
      if (sendMail.text === 'OK') {
        reset()
        if (msgSuccess) msgSuccess.style.display = 'block !important'
      }
    }*/
  }

  return (
    <ContactStyled>
      <h1 className='titleComix'>CONTACT</h1>
      <form className="contactForm" onSubmit={handleSubmit(submitForm)}>
        <div className="data">
          <input type="text" placeholder='Name' className='inputContact' {...register('name')} />
          <input type="email" placeholder='Email' className='inputContact' {...register('email')} style={{marginTop: '20px'}} />
        </div>
        <textarea className='message' {...register('message')} placeholder='Message'></textarea>
        <div className="errors">
        {errors.email?.type === 'required' && 
        <span className='msgError'>El nombre es requerido</span>}
        {errors.email?.type === 'required' && 
        <span className='msgError'>El email no es válido</span>}
        {errors.email?.type === 'required' && 
        <span className='msgError'>El mensaje es requerido</span>}
        </div>
        <span className="msgSuccess">
          Message sent, we will contact you
        </span>
        <div className="buttonDiv">
          <button className='submitContact' type='submit'>Submit</button>
        </div>
      </form>
    </ContactStyled>
  )
}

export default Contact