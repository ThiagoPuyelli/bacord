import type { NextPage } from 'next'
import styled from '@emotion/styled'
import bomberman from '../../public/img/bomberman 1.png'
import fists from '../../public/img/Fists_logo.jpg'
import jazzy from '../../public/img/Jazzy_Logo.png'
import quick from '../../public/img/Quick_Logo.png'
import spin from '../../public/img/Spin_Logo.png'
import windy from '../../public/img/Windy_ico.png'
import Image from 'next/image'

const Logos: NextPage = () => {
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
}

export default Logos