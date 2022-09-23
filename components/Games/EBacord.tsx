import styled from "@emotion/styled"
import LogoEBacord from '../../public/img/LogoEBacord.png'
import Image from "next/image"
import { useSelector } from "react-redux"

const EBacord = () => {
  const EBacordStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background: linear-gradient(to left, #ea1c24, #990a24);
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
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  
  return (
    <EBacordStyled>
      <div className="ebacordImage">
        <Image src={LogoEBacord} alt='Logo e-bacord' />
      </div>
      <h1 className='title'>
        {idiom === 'ENG' ? 'Comming soon' : 'Proximamente'}
      </h1>
    </EBacordStyled>
  )
}

export default EBacord