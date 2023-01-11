import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
//import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

// Redux
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from '../redux/store'
import { Provider } from 'react-redux'

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

  let [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  const { store, persist } = storeConfig()
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        {
          loading
          ?
          <div className="loading">
          <ClipLoader
          size={150}
          color={"var(--title)"}
          loading={loading}
          />
          </div>
          :
          <div onClick={(e) => clickBody(e)}>
          <Header />
          <Component {...pageProps} />
        </div>
        }
      </PersistGate>
    </Provider>
  )
}

export default MyApp
