import styled from "@emotion/styled"
import Image from "next/image"
import { useState, useEffect } from "react"
import baseImage from '../public/img/joystickBase.png'
import { useSelector, useDispatch } from "react-redux"
import { logosAction } from "../redux/logos"

const Joystick = ({component}: {component: string}) => {
  const JoystickStyled = styled.div`
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 400px;
    margin-top: 300px;
    right: 35%;
    .analogic {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 100px;
      height: 100ppx;
    }
    .base,
    .move {
      width: 100px;
      height: 100px;
    }

    .base {
      margin-top: -105px;
    }

    .arrow {
      width: 30px;
      height: 30px;
      margin-top: 20px;
      cursor: pointer;
      transition: 300ms all;
    }

    .arrow:hover {
      transform: scale(1.1, 1.1);
    }
    
    .arrow.left {
      transform: rotateZ(180deg);
    }
    
    .base {
      z-index: 3;
    }

    .box {
      background: white;
      height: 30px;
      width: 100px;
      margin-top: -34px;
      z-index: 2;
    }

    .move {
      z-index: 1;
      transition: 300ms all;
      margin-bottom: -5px;
    }
  `
  const { active, position } = useSelector((state: any) => state.logos)
  const dispatch = useDispatch()

  const clickArrow = (direction: 'right'|'left') => {
    const joystick: HTMLElement|null = document.querySelector('.move')
    //dispatch(logosAction(true) as any)
    if (joystick) {
      if (direction === 'left') {
        setInterval(() => {
          if (active === true) {
            //dispatch(logosAction(position + 1) as any)
            console.log('El tato')
          } else {
            clearInterval()
          }
        }, 1000)
      } else {
        setInterval(() => {
          if (active === true) {
            //dispatch(logosAction(position - 1) as any)
            console.log('El tato')
          } else {
            clearInterval()
          }
        }, 1000)
      }
    }
  }

  const clickUp = async () => {
    const joystick: HTMLElement|null = document.querySelector('.joystick')
    //dispatch(logosAction(false) as any)
  }

  return (
    <JoystickStyled>
      <div className='arrow left' onMouseDown={() => clickArrow('left')} onMouseUp={clickUp}></div>
      <div className="analogic">
        <div className="move">
        </div>
        <div className="base">
          <Image src={baseImage} alt='Base to joystick' />
        </div>
        <div className="box"></div>
      </div>
      <div className='arrow right' onMouseDown={() => clickArrow('right')} onMouseUp={clickUp}></div>
    </JoystickStyled>
  )
}
//<Image src={moveImage} alt='move joystick' />
//<Image src={baseImage} alt='base joystick' />

export default Joystick