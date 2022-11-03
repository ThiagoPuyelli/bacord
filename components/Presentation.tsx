import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import presentationFondo from '../public/img/presentationFondo.png'
import { useSelector } from 'react-redux'

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
      width: 600px;
      margin-right: -100px;
      /*animation: updown 2s ease-in-out infinite alternate-reverse both;*/
    }
    .logoPresentation * {
      transition: 800ms all;
    }
    .contentImage {
      cursor: pointer;
    }
    @media (max-width: 1100px) {
      display: flex;
      flex-flow: column wrap;
      align-items: center; 
      .logoPresentation {
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
        text-align: justify;
      }
    }

    @media (max-width: 602px) {
      .logoPresentation {
        width: 100%;
      }
      .contentMaki {
        width: 100% !important;
        margin: 0px;
        margin-top: -190px;
      }
      .makiAnimation {
        background-size: 180px;
        width: 180px;
        height: 180px;
      }
    }

    @media (max-width: 504px) {
      .text {
        font-size: 13px;
        width: 80%;
      }
      .makiAnimation {
        background-size: 150px;
        width: 150px;
        height: 150px;
      }
      .contentMaki {
        margin-top: -160px;
      }
    }

  `

  const runMaki = () => {
    const logo: HTMLElement|null = document.querySelector('.logoPresentation')
    const maki: HTMLElement|null = document.querySelector('.makiAnimation')
    if (maki && logo) {
      logo.style.animation = 'rotatePresentation 3.5s'
      maki.style.animation = 'runMaki 3.5s'
      if (window.innerWidth <= 602) {
      maki.style.animation = 'runMakiResponsive 3.5s'
      } else {
        maki.style.animation = 'runMaki 3.5s'
      }
      setTimeout(() => {
        logo.style.animation = 'none'
        maki.style.animation = 'none'
      }, 2000)
    }
  }

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  return (
    <PresentationStyled className='presentation'>
        <div className="text">
          <p>
          {
          idiom === 'ESP'
          ?
          'Somos un estudio argentino. Con la pasión por nuestro trabajo como insignia y con el trabajo duro como combustible . Fundado en 2017 por Gonzalo Cantarelli y Cristian Basoalto. Junto a Ricardo Cuello y Matias Toyama. Nos dedicamos a hacer juegos mobile con orientación al gambling. Y desde nuestra subsidiaria BACORD SEASIDE nos dedicamos a crear sueños jugables, cartas de amor lúdicas, con nuestro primer gran proyecto en Maki, Paw of fury.'
          :
          'We’re a gaming studio from Argentina, powered by our passion and hardwork. Founded by Gonzalo Cantarelli and Cristian Basoalto, alongside Ricardo Cuello and Matias Toyama. We make gambling-oriented mobile games, and in our side office “Seaside Bacord” we are dedicating ourselves to our biggest project to date “Maki, Paw of Fury”'
          } 
                    </p>
          <button className='readMore'>
            {
              idiom === 'ESP'
              ?
              'LEER MÁS'
              :
              'READ MORE'
            }
          </button>
        </div>
        <div className="contentImage" onClick={runMaki}>
          <div className="logoPresentation">
            <Image src={presentationFondo} alt='fondo de home' />
          </div>
          <div className="contentMaki">
            <div className="makiAnimation">
            </div>
          </div>
        </div>
    </PresentationStyled>
  )
}

export default Presentation