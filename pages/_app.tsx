import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const clickBody = (e: any) => {
    if (
      e.target.className !== 'linksMenu' 
      && 
      e.target.className !== 'linkMenu' 
      && 
      e.target.getAttribute('alt') !== 'Button menu') {
      const menu: HTMLElement|null = document.querySelector('.menu')
      const menuButton: HTMLElement|null = document.querySelector('.menuButton')
      if (menu && menuButton && menu.style.height === '300px') {
        menuButton.style.transform = 'rotateZ(0deg)'
        menu.style.height = '44px'
      }
    }
  }
  
  return (
    <div onClick={(e) => clickBody(e)}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
