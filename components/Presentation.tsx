import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import bottomImg from '../public/img/fondo.svg'
import presentationFondo from '../public/img/presentationFondo.png'

const Presentation: NextPage = () => {
  const PresentationStyled = styled.section`
    margin-top: 67px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, #ea1c24, #990a24);
    .text {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 300px;
      color: white;
      .readMore {
        margin-top: 20px;
        background: white;
        color: #980a24;
        padding: 15px;
        border-radius: 40px;
        border: none;
        font-weight: bold;
        width: 250px;
        transition: 300ms all;
        cursor: pointer;
      }
      .readMore:hover {
        box-shadow: 0px 0px 3px #980a24 inset;
      }
    }
    .logoPresentation {
      width: 700px;
      margin-right: -100px;
    }
    @media (max-width: 1100px) {
      display: flex;
      flex-flow: column wrap;
      align-items: center; 
      .logoPresentation {
        width: 100%;
        order: 0;
        margin: 0px;
      }
      .readMore {
        order: 2;
        margin-bottom: 60px;
      }
      .text {
        order: 1;
        width: 50%;
        margin-top: -30px;
        text-align: justify;
      }
    }

    @media (max-width: 504px) {
      .text {
        font-size: 13px;
        width: 80%;
      }
    }
  `

  return (
    <PresentationStyled className='presentation'>
      {/*<div className="bottomImage">
        <Image src={bottomImg} alt='fondo' />
  </div>*/}
        <div className="text">
          <p>
          We’re a gaming studio from Argentina, powered by our passion and hardwork. Founded by Gonzalo Cantarelli and Cristian Basoalto, alongside Ricardo Cuello and Matias Toyama. We make gambling-oriented mobile games, and in our side office “Seaside Bacord” we are dedicating ourselves to our biggest project to date “Maki, Paw of Fury”          </p>
          <button className='readMore'>
            READ MORE
          </button>
        </div>
        <div className="logoPresentation">
          <Image src={presentationFondo} alt='fondo de home' />
        </div>
    </PresentationStyled>
  )
}

export default Presentation