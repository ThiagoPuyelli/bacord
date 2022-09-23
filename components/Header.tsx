import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import twitter from '../public/img/twitter.png'
import facebook from '../public/img/facebook.png'
import instagram from '../public/img/instagram.png'
import linkedin from '../public/img/linkedin.png'
import logo from '../public/img/logo_bacord.png'
import LinkNext from 'next/link'
import { Link, animateScroll as scroll } from 'react-scroll'
import * as Scroll from 'react-scroll'
import buttonMenu from '../public/img/menu.png'
import { useSelector, useDispatch } from 'react-redux'
import { idiomAction } from '../redux/idiom'
import IdiomButton from './IdiomButton'

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
    z-index: 3;
    height: 70px;
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
      margin-right: 60px;
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
    .menu {
      position: fixed;
      display: none;
      left: 5px;
      top: 15px;
      overflow: hidden;
      height: 44px;
      transition: 300ms all;
    }
    .linksMenu {
      display: flex;
      flex-flow: column wrap;
      align-items: left;
      list-style: none;
      background: #b60f25;
      padding: 20px;
      border-radius: 0px 0px 20px 20px;
      .linkMenu {
        color: white;
        cursor: pointer;
        margin-top: 20px;
      }
    }
    .menuButton {
      width: 40px;
      margin-left: 15px;
      transition: 300ms all;
    }
    @media (max-width: 902px) {
      .menu {
        display: block;
      }
      .logo {
        display: none;
      }
      .links { 
        display: none;
        * {
          display: none;
        }
      }
      .right .socialMedia {
        display: none;
      }
      .right .idiomButton {
        margin-top: -20px;
      }
    }
  `

  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  const openMenu = () => {
    const menu: HTMLElement|null = document.querySelector('.menu')
    const buttonMenu: HTMLElement|null = document.querySelector('.menuButton')
    if (menu && buttonMenu) {
      if (!menu.style.height || menu.style.height === '44px') {
        menu.style.height = '300px'
        buttonMenu.style.transform = 'rotateZ(90deg)'
      } else {
        menu.style.height = '44px'
        buttonMenu.style.transform = 'rotateZ(0deg)'
      }
    }
  }
  
  
  return (
    <HeaderStyled>
      <div className="left">
        <div className="logo">
          <Image src={logo} alt='Logo of bacord'/>
        </div>
        <ul className='links'>
          <li className='link'><Link to='presentation' smooth={true} offset={-70}>
            {idiom === 'ESP' ? 'INICIO' : 'HOME' }
            </Link></li>
          <li className='link'><Link to='about' smooth={true} offset={-100}>
            {idiom === 'ESP' ? 'NOSOTROS' : 'ABOUT US' }
            </Link></li>
          <li className='link'><Link to='games' smooth={true} offset={-150}>
            {idiom === 'ESP' ? 'JUEGOS' : 'GAMES' }
            </Link></li>
          <li className='link'><Link to='work' smooth={true} offset={-70}>
            {idiom === 'ESP' ? 'ÚNETE' : 'WORK WITH US' }</Link></li>
          <li className='link'><Link to='contact' smooth={true} offset={-70}>
            {idiom === 'ESP' ? 'CONTACTO' : 'CONTACT' }
            </Link></li>
        </ul>
        <div className="menu">
          <div className="menuButton" onClick={openMenu}>
            <Image src={buttonMenu} alt='Button menu' />
          </div>
          <ul className="linksMenu">
          <li className='linkMenu'><Link to='presentation' smooth={true} offset={-70}>HOME</Link></li>
          <li className='linkMenu'><Link to='about' smooth={true} offset={-100}>ABOUT US</Link></li>
          <li className='linkMenu'><Link to='games' smooth={true} offset={-150}>GAMES</Link></li>
          <li className='linkMenu'><Link to='work' smooth={true} offset={-70}>WORK WITH US</Link></li>
          <li className='linkMenu'><Link to='contact' smooth={true} offset={-70}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="socialMedia">
          <LinkNext href='https://www.facebook.com/bacordgames'>
            <a href="https://www.facebook.com/bacordgames" target='_blank' rel='noreferrer'><Image src={facebook} alt='facebook'/></a>
          </LinkNext>
        </div>  
        <div className="socialMedia">
          <LinkNext href='https://www.instagram.com/bacordgames/'  passHref>
            <a href="https://www.instagram.com/bacordgames/" target='_blank' rel='noreferrer'><Image src={instagram} alt='instagram'/></a>
          </LinkNext>
        </div>
        <div className="socialMedia">
          <LinkNext href='https://twitter.com/BacordGames' passHref>
            <a href="https://twitter.com/BacordGames" target='_blank' rel='noreferrer'><Image src={twitter} alt='twitter'/></a>
          </LinkNext>
        </div>
        <div className="socialMedia">
          <LinkNext href='https://www.linkedin.com/company/bacordgames/' passHref>
            <a href="https://www.linkedin.com/company/bacordgames/" target='_blank' rel='noreferrer'><Image src={linkedin} alt='linkedin'/></a>
          </LinkNext>
        </div>
        <div className="idiomButton">
          <IdiomButton />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header