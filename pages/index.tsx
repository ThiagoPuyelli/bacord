import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Max from '../public/img/Team/MaxVanHauvart.jpg'
import Sirce from '../public/img/Team/Sirce.png'
import Sapukai from '../public/img/Team/Sapukai.jpg'
import Alejo from '../public/img/Team/Alejo.png'
import Carlos from '../public/img/Team/Carlos.jpg'
import Mati from '../public/img/Team/Mati.jpg'
import Richar from '../public/img/Team/Richar.png'
import Cristian from '../public/img/Team/Cristian.jpg'
import ShinDiego from '../public/img/Team/ShinDiego.png'
import Nicolas from '../public/img/Team/Nicolas.png'
import FrancoPonce from '../public/img/Team/FrancoPonce.png'
import Edu from '../public/img/Team/Edu.png'
import ThiagoPuyelli from '../public/img/Team/Thiago.jpeg'
import GonzaloCantarelli from '../public/img/Team/GonzaloCantarelli.jpg'
import SwimmableBee912 from '../public/img/Team/SwimmableBee912.png'

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
          image: GonzaloCantarelli,
          name: 'Gonzalo Cantarelli',
          rol: 'Director'
        },
        {
          image: Cristian,
          name: 'Cristian',
          rol: 'Manager'
        },
        {
          image: Mati,
          name: 'Matias',
          rol: 'Programador'
        },
        {
          image: Richar,
          name: 'Richar',
          rol: 'Músico'
        },
        {
          image: Max,
          name: 'Max Van Hauvart',
          rol: 'Narrativa'
        },
        {
          image: Sirce,
          name: 'Sirce',
          rol: 'Artista'
        },
        {
          image: Sapukai,
          name: 'Sapukái',
          rol: 'UI/UX'
        },
        {
          image: Alejo,
          name: 'Alejo Hudson',
          rol: 'Animador'
        },
        {
          image: Carlos,
          name: 'Carlos',
          rol: 'Programador'
        },
        {
          image: ShinDiego,
          name: 'ShinDiego',
          rol: 'Artista'
        },
        {
          image: Nicolas,
          name: 'Nicolas',
          rol: 'GameDesign'
        },
        {
          image: FrancoPonce,
          name: 'Franco Ponce',
          rol: 'Programador'
        },
        {
          image: Edu,
          name: 'Eduardo Varela',
          rol: 'Programador'
        },
        {
          image: ThiagoPuyelli,
          name: 'Thiago Puyelli',
          rol: 'Programador'
        },
        {
          image: SwimmableBee912,
          name: 'SwimmableBee912',
          rol: 'Artista'
        }
      ]}/>
      <Footer />
    </div>
  )
}

export default Home
