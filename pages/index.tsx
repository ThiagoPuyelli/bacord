import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Games />
      <Work />
    </div>
  )
}

export default Home
