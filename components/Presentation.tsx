import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import bottomImg from '../public/img/fondo.svg'
import presentationFondo from '../public/img/presentationFondo.png'

const Presentation: NextPage = () => {
  const PresentationStyled = styled.div`
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
        border-radius: 20px;
        border: none;
        font-weight: bold;
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
  `
  return (
    <PresentationStyled className='presentation'>
      {/*<div className="bottomImage">
        <Image src={bottomImg} alt='fondo' />
  </div>*/}
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum modi non quod consequatur autem ducimus sint consectetur placeat odit voluptas illo officiis cumque tempore ad esse, animi voluptate soluta dolores. Quos magnam cum vitae repellat reprehenderit nam quae fuga earum? Dolorem maiores sequi numquam est temporibus tempora animi odio aut ab unde odit, dolore enim veniam. Tenetur, sunt. Saepe.
          </p>
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