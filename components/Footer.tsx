import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Footer: NextPage = () => {
  const FooterStyled = styled.footer`
    text-align: center;
    padding: 40px;
    background: #b60f25;
    color: white;
  `
  return (
    <FooterStyled>
      2022 - All rights reserved
    </FooterStyled>
  )
}

export default Footer