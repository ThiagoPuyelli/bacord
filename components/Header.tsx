import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import twitter from '../public/img/twitter.png'
import facebook from '../public/img/facebook.png'
import instagram from '../public/img/instagram.png'
import linkedin from '../public/img/linkedin.png'
import logo from '../public/img/logo_bacord.png'
import Link from 'next/link'

const Header: NextPage = () => {
  const HeaderStyled = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    background: #b60f25;
    .left {
      display: flex;
      .logo {
        width: 80px;
        position: fixed;
        top: -7px;
      }
      .links {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        align-items: center;
        margin-left: 80px;
        .link {
          color: white;
          margin-left: 40px;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
    
    .right {
      width: 40%;
      display: flex;
      flex-flow: row wrap;
      justify-content: right;
      .socialMedia {
        width: 40px;
        height: 40px;
        padding: 8px;
        background: white;
        margin-right: 10px;
        border-radius: 999px;
        cursor: pointer;
        * {
          width: 100%;
        }
      }
    }
  `
  return (
    <HeaderStyled>
      <div className="left">
        <div className="logo">
          <Image src={logo} alt='Logo of bacord'/>
        </div>
        <ul className='links'>
          <li className='link'>HOME</li>
          <li className='link'>ABOUT US</li>
          <li className='link'>GAMES</li>
          <li className='link'>WORK WITH US</li>
          <li className='link'>BLOG</li>
          <li className='link'>CONTACT</li>
        </ul>
      </div>
      <div className="right">
        <div className="socialMedia">
          <Link href='https://www.facebook.com/bacordgames'>
            <a href="https://www.facebook.com/bacordgames" target='_blank'><Image src={facebook}/></a>
          </Link>
        </div>  
        <div className="socialMedia">
          <Link href='https://www.instagram.com/bacordgames/'  passHref>
            <a href="https://www.instagram.com/bacordgames/" target='_blank'><Image src={instagram}/></a>
          </Link>
        </div>
        <div className="socialMedia">
          <Link href='https://twitter.com/BacordGames' passHref>
            <a href="https://twitter.com/BacordGames" target='_blank'><Image src={twitter}/></a>
          </Link>
        </div>
        <div className="socialMedia">
          <Link href='https://www.linkedin.com/company/bacordgames/' passHref>
            <a href="https://www.linkedin.com/company/bacordgames/" target='_blank'><Image src={linkedin}/></a>
          </Link>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header