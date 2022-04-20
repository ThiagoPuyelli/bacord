import styled from "@emotion/styled";
import buttonLeft from '../public/img/left-arrow.png'
import buttonRight from '../public/img/right-arrow.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

type Member = {
  image: any,
  name: string,
  rol: string
}

const Team = ({members}: { members: Member[] } ) => {
  
    const LogosStyled = styled.div`
    overflow: hidden;
    height: 270px;
    margin-top: 80px;
    margin-bottom: 60px;
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
      margin-top: -221px;
    }
    .carousel {
      width: 100%;
      overflow: hidden;
      transition: 500ms all;
      .contentMembers {
        display: flex;
        width: 10000px;
        transition: 500ms all;
        .contentGame {
          width: 200px;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          margin-left: 60px;
          height: 300px;
          .imageMember {
            width: 100%;
            overflow: hidden;
            border-radius: 100%;
            transition: 300ms all;
            border: 3px solid transparent;
            height: 200px;
            box-shadow: 0px 0px 4px var(--title);
            .contentImage {
              * {
                transform: scale(1.05, 1.05);
                height: 200px;
              }
            }
            .contentImage.gonzalo * {
              height: 400px !important; 
              margin-top: -35px !important;
            }

            .contentImage.pablo * {
              height: 300px !important;
              margin-top: -35px !important;
            }
          }
          .textMember {
            background: #b60f25;
            margin-top: 10px;
            border-radius: 0px 0px 20px 20px;
            padding: 5px;
            width: 100%;
            .nameMember,
            .rolMember {
              text-transform: uppercase;
              text-align: center;
              color: white;
              font-family: rubik; 
              font-size: 14px;
            }
          }
        }
        .contentGame:hover .pie {
          opacity: 1;
          display: block;
        }
      }
    }
    .pie {
      position: absolute;
      width: 200px;
      opacity: 0;
      transition: 600ms all;
      display: none;
      box-shadow: 0px 0px 8px #ccc;
      border-radius: 999px;
      * {
        color: white !important;
      }
    }
  `

  const [width, setWidth] = useState(0)
  const data = [
    { title: 'Ansiedad', key:'Ansiedad', value: 30, color: 'red', fontColor: 'white' },
    { title: 'Cansancio', key:'Cansancio', value: 20, color: 'cyan' },
    { title: 'Constancia', key:'Constancia', value: 50, color: 'green' },
  ]
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  
  let position = 1

  const moveImages = (direction: 'right'|'left') => {
    const contentMembers: HTMLElement|null = document.querySelector('.contentMembers')
    if (contentMembers) {
      if (direction === 'right') {
        if (position) {
          if (!contentMembers.style.marginLeft && position < numberPages()) {
            contentMembers.style.marginLeft = '-260px'
            position += 1
          } else {
            if (position < numberPages()) {
              contentMembers.style.marginLeft = (parseInt(contentMembers.style.marginLeft) - 260) + 'px'
              position += 1
            }
          }
        }
      } else {
        if (position > 1){
          contentMembers.style.marginLeft = (parseInt(contentMembers.style.marginLeft) + 260) + 'px'
          position -= 1
        } 
      }
    }
  }

  const numberPages = () => {
    if (width >= 1880) {
      return members.length - 6
    } else if (width >= 1600) {
      return members.length - 5
    } else if (width >= 1326) {
      return members.length - 4
    } else if (width >= 1052) {
      return members.length - 3
    } else if (width >= 794) {
      return members.length - 2
    } else if (width >= 542) {
      return members.length - 1
    } else {
      return members.length
    }
  }
  
  return (
    <LogosStyled>
      <div className="carousel">
        <button className="button left" onClick={() => moveImages('left')}>
          <Image src={buttonLeft} alt='Button Left' />
        </button>
        <div className="contentMembers">
          {members.map(((member: Member, i) => {
            const marginTop = () => {
              if (member.name === 'Max Van Hauvart') {
                return '12px'
              } else if (member.name === 'Thiago Puyelli') {
                return '-30px'
              } else {
                return ''
              }
            }

            const className = () => {
              if (member.name === 'Gonzalo Cantarelli') {
                return 'contentImage gonzalo'
              } else if (member.name === 'Pablo'){
                return 'contentImage pablo'
              } else {
                return 'contentImage'
              }
            }
            return (
              <div className={"contentGame " + member.rol} key={member.name + i}>
                <div className="imageMember">
                  <div className={className()} style={{
                    marginTop: marginTop()
                  }}>
                    <Image src={member.image} alt={member.image} />
                  </div>
                </div>
                <div className="textMember">
                <p className="nameMember">{member.name}</p>
                <p className="rolMember">{member.rol === 'GameDesign' ? 'Game Design': member.rol}</p>
                </div>
                <div className="pie">
                <PieChart
                  data={data}
                  lengthAngle={360}
                  paddingAngle={0}
                  label={(data) => data.dataEntry.title}
                  labelPosition={65}
                  labelStyle={{
                    fontSize: 7,
                  }}
                     />
                </div>
              </div>
            )
          }))}
        </div>
        <button className="button right" onClick={() => moveImages('right')}>
          <Image src={buttonRight} alt='Button Right' />
        </button>
      </div>
    </LogosStyled>   
  )
}

export default Team