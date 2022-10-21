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

  const ContentStyled = styled.div`
    background: linear-gradient(#1d3258, #3bbfce, #289850);
  `
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  
  return (
    <ContentStyled>
      <ContainerStyled>
        <div className="ebacordImage">
          <Image src={LogoEBacord} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
      <ContainerStyled>
        <div className="ebacordImage">
          <Image src={BacordSeaside} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
      <ContainerStyled>
        <div className="ebacordImage">
          <Image src={BacordLair} alt='Logo e-bacord' />
        </div>
      </ContainerStyled>
    </ContentStyled>
    
  )
}

export default EBacord