import styled from "@emotion/styled"
import LogoEBacord from '../../public/img/LogoEBacord.png'
import BacordSeaside from '../../public/img/BacordSeaside.png'
import BacordLair from '../../public/img/BacordLair.png'
import Image from "next/image"
import { useSelector } from "react-redux"

const EBacord = () => {
  const ContainerStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    .ebacordImage {
      width: 400px;
    }
    .title {
      font-family: comix;
      color: white;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    @media (max-width: 885px) {
      .ebacordImage {
        width: 200px;
      }
      .title {
        font-size: 15px;
      }
    }
    @media (max-width: 490px) {
      .ebacordImage {
        width: 120px;
      }
      .title {
        font-size: 12px;
      }
    }
  `

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  
  return (
    <div style={{
      marginTop: '80px'
    }}>
      <h1 className='titleComix' style={{
        textAlign: 'center'
      }}>
        {idiom === 'ESP' ? 'PROXIMAMENTE' : 'COMMING SOON'}
      </h1>
      <ContainerStyled style={{
          background: '#1d3258'
        }}>
        <div className="ebacordImage">
          <Image src={LogoEBacord} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
      <ContainerStyled style={{
          background: '#3bbfce'
        }}>
        <div className="ebacordImage" style={{
          transform: 'scale(1.3, 1.3)'
        }}>
          <Image src={BacordSeaside} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
      <ContainerStyled style={{
          background: '#289850'
        }}>
        <div className="ebacordImage" style={{
          transform: 'scale(1.3, 1.3)'
        }}>
          <Image src={BacordLair} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
    </div>
    
  )
}

export default EBacord