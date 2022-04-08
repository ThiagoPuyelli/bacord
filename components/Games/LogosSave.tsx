import type { NextPage } from 'next'
import styled from '@emotion/styled'
import bomberman from '../../public/img/bomberman 1.png'
import fists from '../../public/img/Fists_logo.jpg'
import jazzy from '../../public/img/Jazzy_Logo.png'
import quick from '../../public/img/Quick_Logo.png'
import spin from '../../public/img/Spin_Logo.png'
import windy from '../../public/img/Windy_ico.png'
import buttonLeft from '../../public/img/left-arrow.png'
import buttonRight from '../../public/img/right-arrow.png'
import { useState } from 'react'
import Image from 'next/image'

const Logos: NextPage = () => {
  const LogosStyled = styled.div`
    margin-top: 100px;
    overflow: hidden;
    .carousel {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      .contentImages {
        transition: 600ms all;
        width: 10000px;
        display: flex;
        margin-left: 155%;
        .contentGame {
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          transition: 300ms all;
        }
        .contentGame.hide {
          opacity: 0.8;
        }
        .imageLogo {
          width: 300px !important;
          transition: 300ms all;
          border-radius: 100%;
          overflow: hidden;
        }
        .imageLogo.other {
          margin-left: 120px;
          transition: 300ms all;
          border-radius: 100%;
          overflow: hidden;
        }
        .imageLogo.first.hide,
        .imageLogo.other.hide {
          opacity: 0.8;
        }
        .nameLogo {
          text-align: center;
          width: 100%;
          color: var(--title);
          font-size: 17px;
          letter-spacing: 1px;
        }
        .nameLogo.other {
          padding-left: 120px;
        }
      }
      .button {
        position: absolute;
        margin-top: 120px;
        background: transparent;
        font-size: 20px;
        border: none;
        width: 70px;
        cursor: pointer;
        transition: 300ms all;
        z-index: 1;
      }
      .button:hover {
        transform: scale(1.2, 1.2);
      }
      .button.left {
        left: 30%;
      }
      .button.right {
        right: 30%;
      }
    }
  `
  let position = 0
  const moveImages = (direction: 'left'|'right', e: any) => {
    const carousel: HTMLElement|null = document.querySelector('.contentImages')
    if (carousel) {
      const allImages: NodeListOf<Element> = document.querySelectorAll('.contentImages .contentGame')
      const image1: Element|null = allImages[position]
      const image2: Element|null = allImages[position + 1]
      const image3: Element|null = allImages[position - 1]
      const buttonLeft: HTMLElement|null = document.querySelector('.button.left')
      const buttonRight: HTMLElement|null = document.querySelector('.button.right')
      if (direction === 'right') {
        if (!carousel.style.marginRight) {
          carousel.style.marginRight = '840px'
        } else {
          carousel.style.marginRight = (parseInt(carousel.style.marginRight) + 840) + 'px'
        }
        position += 1
        if (image1 && image2)  {
          image1.className = image1.className + ' hide'
          const imageSplit = image2.className.split(' ')
          image2.className = imageSplit[0]
        }
        if (position === 1 && buttonLeft) {
          buttonLeft.removeAttribute('disabled')
        }
        if (position === allImages.length && buttonRight) {
          buttonRight.setAttribute('disabled', "")
        }
      } else {
        if (image1 && image3) {
          image1.className = image1.className + ' hide'
          const imageSplit = image3.className.split(' ')
          image3.className = imageSplit[0]
        }
        position -= 1
        if (position === 0 && buttonLeft) {
          buttonLeft.setAttribute('disabled', '')
        }
        if (position === allImages.length - 1 && buttonRight) {
          buttonRight.removeAttribute('disabled')
        }
        carousel.style.marginRight = (parseInt(carousel.style.marginRight) + - 840) + "px"
      }
    }
  }
  
  return (
    <LogosStyled>
      <div className='carousel'>
        <button className='button left' disabled onClick={(e) => moveImages('left', e)}>
          <Image src={buttonLeft} alt='Button left' />
        </button>
        <div className="contentImages">
          <div className="contentGame">
            <div className="imageLogo first">
              <Image src={quick} alt='juego' />
            </div>
            <p className='nameLogo'>Quick</p>
          </div>
          <div className="contentGame hide">
            <div className="imageLogo other">
              <Image src={fists} alt='juego' />
            </div>
            <p className='nameLogo other'>Fists</p>
          </div>
          <div className="contentGame hide">
            <div className="imageLogo other">
              <Image src={jazzy} alt='juego' />
            </div>
            <p className='nameLogo other'>Jazzy</p>
          </div>
          <div className="contentGame hide">
            <div className="imageLogo other">
              <Image src={bomberman} alt='juego' />
            </div>
            <p className='nameLogo other'>Bomberman</p>
          </div>
          <div className="contentGame hide">
            <div className="imageLogo other">
              <Image src={spin} alt='juego' />
            </div>
            <p className='nameLogo other'>Spin</p>
          </div>
          <div className="contentGame hide">
            <div className="imageLogo other">
              <Image src={windy} alt='juego' />
            </div>
            <p className='nameLogo other'>Windy</p>
          </div>
        </div>
        <button className="button right" onClick={(e) => moveImages('right', e)} >
          <Image src={buttonRight}  alt='Button right'/>
        </button>
      </div>
    </LogosStyled>
  )
}

/*const Logos: NextPage = () => {
  const LogosStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    .imageLogos {
      width: ${100 / 3}%;
      margin: 0px;
    }
  `
  return (
    <LogosStyled>
      <div className="imageLogos">
        <Image src={spin} alt='spin image' />
      </div>
      <div className="imageLogos">
        <Image src={windy} alt='windy image' />
      </div>
      <div className="imageLogos">
        <Image src={jazzy} alt='jazzy image' />
      </div>
      <div className="imageLogos">
        <Image src={quick} alt='quick image' />
      </div>
      <div className="imageLogos">
        <Image src={fists} alt='fists image' />
      </div>
      <div className="imageLogos">
        <Image src={bomberman} alt='Bomberman image' />
      </div>
    </LogosStyled>
  )
}*/

export default Logos