import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <About />
    </div>
  )
}

export default Home
