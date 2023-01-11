import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import makiBottom from '../../public/img/Maki.png'

const Maki: NextPage = () =>  {
  const MakiStyled = styled.div` 
    height: 750px;
    margin-bottom: 60px;
    .imageBottom {
      position: absolute;
      z-index: -1;
      width: 100%;
      * {
        width: 100% !important;
      }
    }
    .content {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 500px;
      padding-top: 200px;
      padding-left: 120px;
      .makiText {
        color: white;
      }
      .makiButton {
        color: var(--title);
        padding: 10px;
        font-size: 17px;
        font-weight: bold;
        border-radius: 50px;
        width: 200px;
        border: none;
        margin-top: 90px;
        transition: 300ms all;
        cursor: pointer;
      }
      .makiButton:hover {
        box-shadow: 0px 0px 4px var(--title) inset;
      }
    }
    @media (min-width: 1450px) {
      height: 800px;
    }

    @media (min-width: 1550px) {
      height: 850px;
    }

    @media (min-width: 1700px) {
      height: 950px;
    }

    @media (min-width: 1800px) {
      height: 1000px;
    }

    @media (min-width: 1880px) {
      height: 1050px;
    }
    
    @media (max-width: 1300px) {
      display: flex;
      flex-flow: column wrap;
      height: auto;
      .imageBottom {
        position: relative;
      }
      .content {
        padding: 0px;
        width: 100%;
      }
      .makiText {
        color: black !important;
        width: 80%;
        margin-top: 30px;
      }
      .makiButton {
        margin-bottom: 30px;
        margin-top: -10px;
      }
    }
  `
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)
  
  return (
    <MakiStyled onScroll={(e) => console.log(e)}>
      <div className="imageBottom">
        <Image src={makiBottom} alt='Maki photo' />
      </div>
      <div className="content">
        <p className='makiText'>
          {
            idiom === 'ESP'
            ?
            'Maki es un zorrito naranja del bosque. En su primer aventura tendra que rescatar a su amiga KAMI de las manos de Mapu, quien la secuestró. Pero es esta toda la verdad? ¿Qué fue lo que paso para que Mapu secuestre a Kami?? ¿Qué tiene que ver en todo esto el Doctor Coso?. Maki Paw of Fury es un BEAT EM UP clásico. Donde vas a divertirte a más no poder. Pero, también, es una carta de amor a la cultura POP y a la cultura de los arcades. Es nuestro primer proyecto en BACORD SEASIDE'
            :
            'Maki is a little orange fox from the woods, and in his first adventure he will have to rescue his friend Kami from her kidnapper, Mapu. But is this the whole truth? What had happened in order to make Mapu kidnap Kami? How is Doctor Coso involved in this? Maki Paw of Fury is a classic beat’em up, where you will have a blast. But is also a love letter to the pop culture and the arcades. This is Bacord’s Seaside first project.'
          }
        </p>
        <button className='makiButton'>
          {
            idiom === 'ESP'
            ?
            'VÉ AL SITIO DE MAKI'
            :
            'GO TO MAKI SITE'
          }
        </button>
      </div>
    </MakiStyled>
  )
}

export default Maki