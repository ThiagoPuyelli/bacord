import styled from "@emotion/styled"
import advaImage from '../../public/img/adva.png'
import Image from 'next/image'
import Link from "next/link"
import { useSelector } from "react-redux"

const Adva = () => {
  const AdvaStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 30px 0px 30px 0px;
    align-items: center;
    margin-top: 60px;
    .partner {
      font-family: comix;
      font-size: 15px;
      color: var(--title);
      letter-spacing: 2px;
    }
    .linkAdva a {
      background: -webkit-linear-gradient(138deg, #ff8800 0%, #fe024d 48%, #8531c4 100%);
      padding: 10px;
      border-radius: 20px;
      box-shadow: 0px 0px 3px #ccc;
      color: white;
      font-weight: bold;
    }
    .linkAdva a:hover {
      background: -webkit-linear-gradient(135deg, #23aadd 30%, #37ce9d 100%);
    }

    @media (max-width: 1700px) {
      margin-top: 100px;
    }

    @media (min-width: 1983px) {
      margin-top: 100px;
    }

    @media (max-width: 564px) {
      .partner {
        position: absolute;
        margin-top: -161px;
      }
    }
  `

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)
  
  return (
    <AdvaStyled>
      <div className="imageAdva">
        <Image src={advaImage} alt='Logo adva'/>
      </div>
      <p className='partner'>
        PARTNERSHIP
      </p>
      <div className="linkAdva">
        <Link href='https://www.adva.vg/' passHref>
            <a href="" target='_blank'>
                {
                    idiom === 'ESP'
                    ?
                    'Entra a la web'
                    :
                    'Go to web site'
                }
            </a>
        </Link>
      </div>
    </AdvaStyled>
  )
}

export default Adva