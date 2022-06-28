import type { NextPage } from 'next'
import styled from '@emotion/styled'
import powLogo from '../../public/img/pow_logo_3.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Pow: NextPage = () => {
  const PowStyled = styled.div`
    .content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding: 100px;
      background: #f70298;
      width: 100%;
      .imagePow {
        width: 600px;
      }
    }
    .contentPow {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 400px;
      .textPow {
        text-align: justify;
        color: white;
      }
      .buttonPow {
        background: white;
        border: none;
        border-radius: 50px;
        width: 200px;
        padding: 10px;
        margin-top: 30px;
        font-weight: bold;
        cursor: pointer;
        transition: 300ms all;
        color: var(--title);
      }
      .buttonPow:hover {
        box-shadow: 0px 0px 4px #f70298 inset;
      }
    }
    .contentRes {
      display: none;
      .contentPow {
        width: 100%;
        padding: 30px;
        .textPow {
          color: black;
        }
        .buttonPow {
          box-shadow: 0px 0px 8px #ccc;
        }
      }
    }
    
    @media (max-width: 1200px) {
      .imagePow {
        width: 400px !important;
      }
    }

    @media (max-width: 1000px) {
      .content {
        display: none;
      }
      .contentRes {
        display: block;
        width: 100%;
        .imagePow {
          background: #f70298;
          width: 100% !important;
          text-align: center;
          /*display: flex;
          flex-flow: row wrap;
          justify-content: cetne;*/
        }
      }
    }
  `

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)
  
  return (
    <PowStyled>
      <div className="content">
        <div className="contentPow">
          <p className="textPow">
            {
              idiom === 'ESP'
              ?
              'Pow Gaming es una solucion B2B que desarrolla una plataforma de e-sports para la gestión de partidas multiusuario de juegos casuales. Esta solucion está pensada para satisfacer la necesidad de diversas industrias.Gambling, Torneos y eventos en linea, casinos, apuestas, contenido para grandes audiencias, Programas de fidelidad. '
              :
              'Pow Gaming is a B2B solution that is developing an e-sports platform for the management of multiplayer casual gaming. This solution aims to satisfy the need for various industries, including Gambling, Tournaments, online events, casinos, content for large audiences and partnership programs.          '
            }
          </p>
          <button className="buttonPow">
            {
              idiom === 'ESP'
              ?
              'OTROS JUEGOS'
              :
              'OUR GAMES'
            }
          </button>
          <button className="buttonPow">
            <a href="https://www.pow-gaming.com/" target='_blank' rel='noreferrer'>
              {
                idiom === 'ESP'
                ?
                'SITIO DE POWGAMING'
                :
                'POWGAMING WEB SITE'
              }
            </a>
          </button>
        </div>
        <div className="imagePow">
          <Image src={powLogo} alt='logo pow' />
        </div>
      </div>
      <div className="contentRes">
        <div className="imagePow">
          <Image src={powLogo} alt='logo pow' />
        </div>
        <div className="contentPow">
          <p className="textPow">
            {
              idiom === 'ESP'
              ?
              'Pow Gaming es una solucion B2B que desarrolla una plataforma de e-sports para la gestión de partidas multiusuario de juegos casuales. Esta solucion está pensada para satisfacer la necesidad de diversas industrias.Gambling, Torneos y eventos en linea, casinos, apuestas, contenido para grandes audiencias, Programas de fidelidad. '
              :
              'Pow Gaming is a B2B solution that is developing an e-sports platform for the management of multiplayer casual gaming. This solution aims to satisfy the need for various industries, including Gambling, Tournaments, online events, casinos, content for large audiences and partnership programs.          '
            }
          </p>
          <button className="buttonPow">
            {
              idiom === 'ESP'
              ?
              'OTROS JUEGOS'
              :
              'OUR GAMES'
            }
          </button>
          <button className="buttonPow">
            <a href="https://www.pow-gaming.com/" target='_blank' rel='noreferrer'>
              {
                idiom === 'ESP'
                ?
                'SITIO DE POWGAMING'
                :
                'POWGAMING WEB SITE'
              }
            </a>
          </button>
        </div>
      </div>
    </PowStyled>
  )
}

export default Pow