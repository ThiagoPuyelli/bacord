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
  `
  return (
    <MakiStyled>
      <div className="imageBottom">
        <Image src={makiBottom} />
      </div>
      <div className="content">
        <p className='makiText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae ducimus exercitationem vitae velit tempore debitis dolor maxime magnam praesentium sed voluptatibus, provident sequi beatae at quisquam repellat fugiat. Ab a fugiat ipsum mollitia minus maiores qui quos dolorem consequatur cumque nostrum reiciendis sequi repudiandae, alias provident numquam molestiae repellat totam eligendi neque voluptatem assumenda illum? Velit quam tempora animi.
        </p>
        <button className='makiButton'>GO TO MAKI SITE</button>
      </div>
    </MakiStyled>
  )
}

export default Maki