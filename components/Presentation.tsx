import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import presentationFondo from '../public/img/presentationFondo.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'

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
      margin-bottom: 20px;
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
      transition: 300ms all;
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

  let move = true
  
  const runMaki = () => {
    if (move === true) {
      move = false
      const logo: HTMLElement|null = document.querySelector('.logoPresentation')
      const maki: HTMLElement|null = document.querySelector('.makiAnimation')
      if (maki && logo) {
        let right = -240
        let run = setInterval(() => {
          maki.style.right = right + 'px'
          right += 3
          if (right === 51) {
            moveAction()
            makiJump()
          }
          if (right >= 550) {
            maki.style.right = '-240px'
            move = true
            clearInterval(run)
          }
        }, 1)
  
        const moveAction = () => {
          let rotate = 0
          let state = 'start'
          let logoMove = setInterval(() => {
            logo.style.transform = 'rotateY(' + rotate + 'deg)'
            if (state === 'start') {
              rotate += 3
            } else {
              rotate -= 3
            }
            if (state === 'start' && rotate >= 360) {
              state = 'final'
            } else if (state === 'final' && rotate <= 0) {
              clearInterval(logoMove)
            }
          }, 1)
          return logoMove
        }
  
        const makiJump = () => {
          let marginTop = 40
          let state = 'start'
          let jump = setInterval(() => {
            maki.style.marginTop = marginTop + 'px'
            if (state === 'start') {
              marginTop -= 1
            } else {
              marginTop += 1
            }
            if (state === 'start' && marginTop <= 0) {
              state = 'final'
            } else if (state === 'final' && marginTop >= 42) {
              clearInterval(jump)
            }
          }, 1)
          return jump
        }
      }
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
        </div>
        <div className="contentImage" onMouseEnter={runMaki} onClick={runMaki}>
          <div className="logoPresentation" >
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