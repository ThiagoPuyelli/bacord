import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { sendContactForm } from '../lib/api'
import { ClipLoader } from 'react-spinners'

const Contact: NextPage = () => {
  const ContactStyled = styled.section`
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

      .divFile {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin-top: 30px;
        width: 100%;
        .labelFile {
          text-transform: uppercase;
          font-size: 13px;
        }
      }

      .buttonDiv {
        width:100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 60px;
        .loadingSend {
          position: absolute;
          display: none;
        }
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

    .alerts {
      display: flex;
      flex-flow: column wrap;
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 7;
      @media (max-width: 489px) {
        right: 0px !important;
        bottom: 10px !important;
      }
      .alert {
        padding: 15px;
        font-size: 16px;
        background: green !important;
        z-index: 7;
        border-radius: 10px;
        box-shadow: 0px 0px 3px green !important;
        transition: 300ms all;
        display: none;
        margin-top: 20px;
        color: white;
        font-weight: bold;
      }
      
      .alert.error {
        background: var(--title) !important;
        box-shadow: 0px 0px 4px var(--title) !important;
      }
      
      @media (max-width: 489px) {
        .alert {
          width: 200px !important;
          transform: scale(0.7, 0.7);
          margin-top: 5px;
        }
      }
    }
    
    .msgSuccess {
      text-align: center;
      width: 100%;
      color: green;
      font-weight: bold;
      font-size: 20px;
    }

    @media (max-width: 636px) {
      .message,
      .data {
        width: 100% !important;
      }
    }
  `
  
  let file: any

  const submitForm = async (data: any) => {
    data.preventDefault()
    const name: HTMLInputElement|null = document.querySelector('.inputContact.name')
    const email: HTMLInputElement|null = document.querySelector('.inputContact.email')
    const message: HTMLInputElement|null = document.querySelector('.message')
    const button: HTMLElement|null = document.querySelector('.submitContact')
    const effect: HTMLElement|null = document.querySelector('.loadingSend')
    if (name && email && message && (name.value !== '' || email.value !== '' || message.value !== '')) {
      if (button && effect) {
        button.style.opacity = '0.5'
        button.style.cursor = 'auto'
        button.setAttribute('disabled', '')
        effect.style.display = 'block'
      }
      let formData
      formData = new FormData()
      for (let i in data) {
      }
      formData.append('name', name.value)
      formData.append('email', email.value)
      formData.append('message', message.value)
      if (file) {
        formData.append('file', file, file.name)
      }
      const sendFirst = await sendContactForm(formData, 'bacordgames@gmail.com')
      const sendSecond = await sendContactForm(formData, 'bacordgames@bacord.ar')
      if (sendFirst && sendSecond) {
        const success: HTMLElement|null = document.querySelector('.alerts .alert.success')
        if (success) {
          if (button && effect) {
            button.style.opacity = '1'
            button.style.cursor = 'pointer'
            button.removeAttribute('disabled')
            effect.style.display = 'none'
          }
          success.style.display = 'block'
          setTimeout(() => {
            success.style.display = 'none'
          }, 3000)
        }
      } else {
        showError()
      }
    } else {
      showError()
    }
    if (button && effect) {
      button.style.opacity = '1'
      button.style.cursor = 'pointer'
      button.removeAttribute('disabled')
      effect.style.display = 'none'
    }

    const inputFile: HTMLInputElement|null = document.querySelector('.inputFile')
    if (name && email && message && inputFile) {
      name.value = ''
      email.value = ''
      message.value = ''
      inputFile.value = ''
      file = undefined
    }
  }

  const showError = () => {
    const error: HTMLElement|null = document.querySelector('.alerts .alert.error')
    if (error) {
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 3000)
    }
  }

  const emptyInputs = () => {
    
  }

  const changeFile = (e: any) => {
    file = e.target.files[0]
  }

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  return (
    <ContactStyled id='contact'>
      <h1 className='titleComix'>
        {
          idiom === 'ESP'
          ?
          'CONTACTO'
          :
          'CONTACT'
        }
      </h1>
      <form className="contactForm" onSubmit={(e) => submitForm(e)}>
        <div className="data">
          <input type="text" placeholder={
            idiom === 'ESP' ? 'Nombre' : 'Name'
          } className='inputContact name' />
          <input type="email" placeholder={
            idiom === 'ESP' ? 'Correo' : 'Email'
          } className='inputContact email' style={{marginTop: '20px'}} />
        </div>
        <textarea className='message' placeholder={idiom === 'ESP' ? 'Mensaje' : 'Message'}></textarea>
        <div className="divFile">
          <label className='titleComix labelFile'>Deja un archivo (opcional)</label>
          <input type="file" className='inputFile' onChange={(e) => changeFile(e)} />
        </div>
        <div className="alerts">
          <div className="alert error">
            Error al enviar mail
          </div>
          <div className="alert success">
            Correo enviado
          </div>
        </div>
        
        <div className="buttonDiv">
          <div className="loadingSend">
            <ClipLoader />
          </div>
          <button className='submitContact' type='submit'>
            {
              idiom === 'ESP'
              ?
              'ENVIAR'
              :
              'SUBMIT'
            }
          </button>
        </div>
      </form>
    </ContactStyled>
  )
}

export default Contact