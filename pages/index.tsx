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
import Pablo from '../public/img/Team/Pablo.jpg'

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
          rol: 'Director',
          data: [
            { title: 'Business', key:'Business', value: 60, color: '#FD9A28' },
            { title: 'Follow up', key:'Follow up', value: 30, color: '#FF5126' },
            { title: 'Fun', key:'Fun', value: 10, color: '#d50000' }
          ]
        },
        {
          image: Cristian,
          name: 'Cristian',
          rol: 'Manager',
          data: [
            { title: 'Anxiety', key:'Anxiety', value: 30, color: '#FD9A28' },
            { title: 'Crazy', key:'Crazy', value: 30, color: '#FF5126' },
            { title: 'Pasion', key:'Pasion', value: 40, color: '#d50000' }
          ]
        },
        {
          image: Mati,
          name: 'Matias',
          rol: 'Programmer',
          data: [
            { title: 'Resilience', key:'Resilience', value: 30, color: '#FD9A28' },
            { title: 'Ingenuity', key:'Ingenuity', value: 35, color: '#FF5126' },
            { title: 'Insomnia', key:'Insomnia', value: 35, color: '#d50000' }
          ]
        },
        {
          image: Richar,
          name: 'Richar',
          rol: 'Audio Lead',
          data: [
            { title: 'Optimist', key:'Optimist', value: 33, color: '#FD9A28' },
            { title: 'Autodidact', key:'Autodidact', value: 33, color: '#FF5126' },
            { title: 'Ironic', key:'Ironic', value: 33, color: '#d50000' }
          ]
        },
        {
          image: Max,
          name: 'Max Van Hauvart',
          rol: 'Narrative',
          data: [
            { title: 'Ansiedad', key:'Ansiedad', value: 30, color: '#FD9A28' },
            { title: 'Cansancio', key:'Cansancio', value: 20, color: '#FF5126' },
            { title: 'Constancia', key:'Constancia', value: 50, color: '#d50000' }
          ]
        },
        {
          image: Sirce,
          name: 'Sirce',
          rol: 'Artist',
          data: [
            { title: 'Anxious', key:'Anxious', value: 30, color: '#FD9A28' },
            { title: 'Cooperation', key:'Cooperation', value: 50, color: '#FF5126' },
            { title: 'Existential horror', key:'Existential horror', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Sapukai,
          name: 'Sapukái',
          rol: 'UI/UX',
          data: [
            { title: 'Graphic design', key:'Graphic design', value: 33, color: '#FD9A28' },
            { title: 'Pinterest', key:'Pinterest', value: 33, color: '#FF5126' },
            { title: 'Videogames', key:'Videogames', value: 33, color: '#d50000' }
          ]
        },
        {
          image: Alejo,
          name: 'Alejo Hudson',
          rol: 'Animator',
          data: [
            { title: 'Anxiety', key:'Anxiety', value: 50, color: '#FD9A28' },
            { title: 'Creativity', key:'Creativity', value: 30, color: '#FF5126' },
            { title: 'Sarcasm', key:'Sarcasm', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Carlos,
          name: 'Carlos',
          rol: 'Programmer',
          data: [
            { title: 'Insomnia', key:'Insomnia', value: 25, color: '#FD9A28' },
            { title: 'Logical', key:'Logical', value: 45, color: '#FF5126' },
            { title: 'Cafeine', key:'Cafeine', value: 30, color: '#d50000' }
          ]
        },
        {
          image: ShinDiego,
          name: 'ShinDiego',
          rol: 'Artist',
          data: [
            { title: 'Tuna boat', key:'Tuna boat', value: 100, color: '#FD9A28' },
            { title: 'Mercenary', key:'Mercenary', value: 50, color: '#FF5126' },
            { title: 'Taurus', key:'Taurus', value: 29, color: '#d50000' }
          ]
        },
        {
          image: Nicolas,
          name: 'Nicolas',
          rol: 'GameDesign',
          data: [
            { title: 'Manga', key:'Manga', value: 30, color: '#FD9A28' },
            { title: 'ddd                         Walking simulator', key:'Walking simulator', value: 40, color: '#FF5126' },
            { title: 'Beer', key:'Beer', value: 30, color: '#d50000' }
          ]
        },
        {
          image: FrancoPonce,
          name: 'Franco Ponce',
          rol: 'Programmer',
          data: [
            { title: 'Versatile', key:'Versatile', value: 20, color: '#FD9A28' },
            { title: 'Stubborn', key:'Stubborn', value: 30, color: '#FF5126' },
            { title: 'Patience', key:'Patience', value: 50, color: '#d50000' }
          ]
        },
        {
          image: Pablo,
          name: 'Pablo',
          rol: 'Programmer',
          data: [
            { title: 'Comedian', key:'Comedian', value: 40, color: '#FD9A28' },
            { title: 'Completist', key:'Completist', value: 40, color: '#FF5126' },
            { title: 'Reader', key:'Reader', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Edu,
          name: 'Eduardo Varela',
          rol: 'Programmer',
          data: [
            { title: 'Creative', key:'Creative', value: 35, color: '#FD9A28' },
            { title: 'Decisive', key:'Decisive', value: 35, color: '#FF5126' },
            { title: 'Dreamer', key:'Dreamer', value: 30, color: '#d50000' }
          ]
        },
        {
          image: ThiagoPuyelli,
          name: 'Thiago Puyelli',
          rol: 'Programmer',
          data: [
            { title: 'Tranquillity', key:'Tranquillity', value: 40, color: '#FD9A28' },
            { title: 'Beer', key:'Beer', value: 20, color: '#FF5126' },
            { title: 'Untidy', key:'Untidy', value: 40, color: '#d50000' }
          ]
        },
        {
          image: SwimmableBee912,
          name: 'SwimmableBee912',
          rol: 'Artist',
          data: [
            { title: 'Somebody', key:'Somebody', value: 20, color: '#FD9A28' },
            { title: 'Normal', key:'Normal', value: 30, color: '#FF5126' },
            { title: 'Nobody', key:'Nobody', value: 50, color: '#d50000' }
          ]
        }
      ]}/>
      <Footer />
    </div>
  )
}

export default Home
