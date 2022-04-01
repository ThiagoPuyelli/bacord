import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Games />
    </div>
  )
}

export default Home
