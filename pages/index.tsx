import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Games />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
