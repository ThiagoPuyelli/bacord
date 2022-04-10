import type { NextPage } from 'next'
import styled from '@emotion/styled'
import powLogo from '../../public/img/pow_logo_3.png'
import Image from 'next/image'

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
  return (
    <PowStyled>
      <div className="content">
        <div className="contentPow">
          <p className="textPow">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusamus veniam quas cupiditate incidunt esse obcaecati fuga, quasi nostrum culpa saepe nulla unde possimus. Veniam, ab, blanditiis aspernatur illo voluptatem error quisquam, ducimus distinctio pariatur cupiditate alias? Illo, accusamus? Saepe id delectus sint aliquam rerum magni, esse commodi quod repellat totam labore. Voluptatibus laborum officia ea sapiente a corporis fuga at earum excepturi! Esse sunt deserunt ratione culpa aspernatur delectus.
          </p>
          <button className="buttonPow">OUR GAMES</button>
          <button className="buttonPow">POW GAMING WEBSITE</button>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusamus veniam quas cupiditate incidunt esse obcaecati fuga, quasi nostrum culpa saepe nulla unde possimus. Veniam, ab, blanditiis aspernatur illo voluptatem error quisquam, ducimus distinctio pariatur cupiditate alias? Illo, accusamus? Saepe id delectus sint aliquam rerum magni, esse commodi quod repellat totam labore. Voluptatibus laborum officia ea sapiente a corporis fuga at earum excepturi! Esse sunt deserunt ratione culpa aspernatur delectus.
          </p>
          <button className="buttonPow">OUR GAMES</button>
          <button className="buttonPow">POW GAMING WEBSITE</button>
        </div>
      </div>
    </PowStyled>
  )
}

export default Pow