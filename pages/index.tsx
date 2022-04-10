import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Team from '../components/Team'
import jazzy from '../public/img/Jazzy_Logo.png'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Games />
      <Work />
      <Contact />
      <Team members={[
        {
          image: jazzy,
          name: 'Carlos Alberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        },
        {
          image: jazzy,
          name: 'Roberto',
          rol: 'Programador'
        }
      ]}/>
      <Footer />
    </div>
  )
}

export default Home
