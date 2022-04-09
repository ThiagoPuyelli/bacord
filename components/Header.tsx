import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import twitter from '../public/img/twitter.png'
import facebook from '../public/img/facebook.png'
import instagram from '../public/img/instagram.png'
import linkedin from '../public/img/linkedin.png'
import logo from '../public/img/logo_bacord.png'
import Link from 'next/link'
import * as Scroll from 'react-scroll'

const Header: NextPage = () => {
  const HeaderStyled = styled.div`
    position: fixed;
    display: flex;
    top: 0px;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    background: #b60f25;
    box-shadow: 0px 0px 4px #b60f25;
    z-index: 1;
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
          transition: 300ms all;
        }
        .link:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
    
    .right {
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
        transition: 300ms all;
        * {
          width: 100%;
        }
      }
      .socialMedia:hover {
        box-shadow: 0px 0px 4px #b60f25 inset;
      }
    }
  `

  const scroll = Scroll.animateScroll
  
  const scrollTo = (position: number) => scroll.scrollTo(position)
  const changeColorScroll = (e: any) => {
    console.log(e)
  }
  
  return (
    <HeaderStyled onScroll={(e) => changeColorScroll(e)}>
      <div className="left">
        <div className="logo">
          <Image src={logo} alt='Logo of bacord'/>
        </div>
        <ul className='links'>
          <li className='link' onClick={() => scrollTo(0)}>HOME</li>
          <li className='link' onClick={() => scrollTo(400)}>ABOUT US</li>
          <li className='link' onClick={() => scrollTo(1120)}>GAMES</li>
          <li className='link' onClick={() => scrollTo(3500)}>WORK WITH US</li>
          <li className='link'>BLOG</li>
          <li className='link' onClick={() => scrollTo(6000)}>CONTACT</li>
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