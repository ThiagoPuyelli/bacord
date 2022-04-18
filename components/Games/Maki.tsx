import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import makiBottom from '../../public/img/Maki.png'

const Maki: NextPage = () =>  {
  const MakiStyled = styled.div` 
    height: 750px;
    .imageBottom {
      position: absolute;
      z-index: -1;
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
  return (
    <MakiStyled onScroll={(e) => console.log(e)}>
      <div className="imageBottom">
        <Image src={makiBottom} alt='Maki photo' />
      </div>
      <div className="content">
        <p className='makiText'>
        Maki is a little orange fox from the woods, and in his first adventure he will have to rescue his friend Kami from her kidnapper, Mapu. But is this the whole truth? What had happened in order to make Mapu kidnap Kami? How is Doctor Coso involved in this? 
Maki Paw of Fury is a classic beat’em up, where you will have a blast. But is also a love letter to the pop culture and the arcades. 
This is Bacord’s Seaside first project.
        </p>
        <button className='makiButton'>GO TO MAKI SITE</button>
      </div>
    </MakiStyled>
  )
}

export default Maki