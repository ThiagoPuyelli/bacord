import type { NextPage } from 'next'
import styled from '@emotion/styled'
import powLogo from '../../public/img/pow_logo.png'
import Image from 'next/image'

const Pow: NextPage = () => {
  const PowStyled = styled.div`
    background: #f70298;
  `
  return (
    <PowStyled>
      <div className="contentPow">

      </div>
      <div className="imagePow">
        <Image src={powLogo} alt='logo pow' />
      </div>
    </PowStyled>
  )
}

export default Pow