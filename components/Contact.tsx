import type { NextPage } from 'next'
import styled from '@emotion/styled'

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
    }
  `

  return (
    <ContactStyled>
      <h1 className='titleComix'>CONTACT</h1>
      <form className="contactForm">
        <div className="data">
          <input type="text" placeholder='Name' className='inputContact' name='name' />
          <input type="email" placeholder='Email' className='inputContact' name='email' style={{marginTop: '20px'}} />
        </div>
        <textarea name="message" className='message' placeholder='Message'></textarea>
      </form>
    </ContactStyled>
  )
}

export default Contact