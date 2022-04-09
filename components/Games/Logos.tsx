import styled from '@emotion/styled'
import Image from 'next/image'
import buttonLeft from '../../public/img/left-arrow.png'
import buttonRight from '../../public/img/right-arrow.png'

type Logo = {
  image: any,
  name: string
}

const Logos = ({logos}: { logos: Logo[]}) => {
  const LogosStyled = styled.div`
    overflow: hidden;
    height: 270px;
    margin-top: 80px;
    .button {
      position: absolute;
      margin-top: 80px;
      background: transparent;
      font-size: 20px;
      border: none;
      width: 70px;
      cursor: pointer;
      transition: 300ms all;
      z-index: 2;
    }
    .button:hover {
      transform: scale(1.1, 1.1);
    }
    .button.left {
      left: 1%;
    }
    .button.right {
      right: 1%;
      margin-top: -150px;
    }
    .carousel {
      width: 100%;
      overflow: hidden;
      transition: 500ms all;
      .contentLogos {
        display: flex;
        width: 10000px;
        transition: 500ms all;
        .contentGame {
          width: 200px;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          margin-left: 60px;
          cursor: pointer;
          .imageLogo {
            box-shadow: 0px 0px 4px var(--title);
            width: 100%;
            overflow: hidden;
            border-radius: 100%;
            transition: 300ms all;
            border: 3px solid transparent;
            * {
              transform: scale(1.05, 1.05);
            }
          }
          .nameLogo {
            color: var(--title);
            text-transform: uppercase;
            font-family: comix;
            font-size: 14px;
            margin-top: 10px;
          }
        }
        .contentGame:hover .imageLogo {
          border: 3px solid var(--title);
        }
      }
    }
  `

  let position = 1

  const moveImages = (direction: 'right'|'left') => {
    const contentLogos: HTMLElement|null = document.querySelector('.contentLogos')
    if (contentLogos) {
      if (direction === 'right') {
        if (position < logos.length - 4) {
          if (!contentLogos.style.marginLeft) {
            contentLogos.style.marginLeft = '-260px'
          } else {
            contentLogos.style.marginLeft = (parseInt(contentLogos.style.marginLeft) - 260) + 'px'
          }
          position += 1
        }
      } else {
        if (position > 1){
          contentLogos.style.marginLeft = (parseInt(contentLogos.style.marginLeft) + 260) + 'px'
          position -= 1
        } 
      }
    }
  }
  return (
    <LogosStyled>
      <div className="carousel">
        <button className="button left" onClick={() => moveImages('left')}>
          <Image src={buttonLeft} alt='Button Left' />
        </button>
        <div className="contentLogos">
          {logos.map(((logo: Logo, i) => {
            return (
              <div className="contentGame" key={logo.name + i}>
                <div className="imageLogo">
                  <Image src={logo.image} />
                </div>
                <p className="nameLogo">{logo.name}</p>
              </div>
            )
          }))}
        </div>
        <button className="button right" onClick={() => moveImages('right')}>
          <Image src={buttonRight} alt='Button Right' />
        </button>
        <div className="pages">
          {logos.map((logo: Logo, i) => {
            if (i < logos.length - 4) {
              return <div className={"page page" + i} key={'page' + i}></div>
            }
          })}
        </div>
      </div>
    </LogosStyled>   
  )
}

export default Logos