import type { NextPage } from 'next'
import About from '../components/About'
import Presentation from '../components/Presentation'
import Games from '../components/Games'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Sirce from '../public/img/Team/Sirce.png'
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
import Hessai from '../public/img/Team/Hessai.png'
import Alejandro from '../public/img/Team/Alejandro.png'
import Lucas from '../public/img/Team/Lucas.jpg'
import Mario from '../public/img/Team/Mario.jpg'
import Nadiko from '../public/img/Team/Nadiko.jpeg'
import Francisco from '../public/img/Team/Francisco.jpeg'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const Home: NextPage = () => {
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)
  
  console.log('pepe')
  return (
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
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
            { title: idiom === 'ESP' ? 'Seguimiento' : 'Follow up', key:'Follow up', value: 30, color: '#FF5126' },
            { title: 'Fun', key:'Fun', value: 10, color: '#d50000' }
          ]
        },
        {
          image: Cristian,
          name: 'Cristian',
          rol: 'Manager',
          data: [
            { title: idiom === 'ESP' ? 'Ansiedad' : 'Anxiety', key:'Anxiety', value: 30, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Locura' : 'Crazy', key:'Crazy', value: 30, color: '#FF5126' },
            { title: 'Pasion', key:'Pasion', value: 40, color: '#d50000' }
          ]
        },
        {
          image: Mati,
          name: 'Matias',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Resiliencia' : 'Resilience', key:'Resilience', value: 30, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Ingenio' : 'Ingenuity', key:'Ingenuity', value: 35, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Insomnio' : 'Insomnia', key:'Insomnia', value: 35, color: '#d50000' }
          ]
        },
        {
          image: Richar,
          name: 'Richar',
          rol: idiom === 'ESP' ? 'Músico' : 'Audio Lead',
          data: [
            { title: idiom === 'ESP' ? 'Optimista' : 'Optimist', key:'Optimist', value: 33, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Autodidacta' : 'Autodidact', key:'Autodidact', value: 33, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Irónico' : 'Ironic', key:'Ironic', value: 33, color: '#d50000' }
          ]
        },
        {
          image: Sirce,
          name: 'Sirce',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Manija' : 'Anxious', key:'Anxious', value: 30, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Cooperación' : 'Cooperation', key:'Cooperation', value: 50, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Horror existencial' : 'Existential horror', key:'Existential horror', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Alejo,
          name: 'Alejo Hudson',
          rol: 'Animator',
          data: [
            { title: idiom === 'ESP' ? 'Ansiedad' : 'Anxiety', key:'Anxiety', value: 50, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Creatividad' : 'Creativity', key:'Creativity', value: 30, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Sarcasmo' : 'Sarcasm', key:'Sarcasm', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Carlos,
          name: 'Carlos',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Insomnio' : 'Insomnia', key:'Insomnia', value: 25, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Lógico' : 'Logical', key:'Logical', value: 45, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Cafeína' : 'Cafeine', key:'Cafeine', value: 30, color: '#d50000' }
          ]
        },
        {
          image: ShinDiego,
          name: 'ShinDiego',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Atunero' : 'Tuna boat', key:'Tuna boat', value: 100, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Mercenario' : 'Mercenary', key:'Mercenary', value: 50, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Tauro' : 'Taurus', key:'Taurus', value: 29, color: '#d50000' }
          ]
        },
        {
          image: Nicolas,
          name: 'Nicolas',
          rol: 'GameDesign',
          data: [
            { title: 'Manga', key:'Manga', value: 30, color: '#FD9A28' },
            { title: 'ddd                         Walking simulator', key:'Walking simulator', value: 40, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Cerveza' : 'Beer', key:'Beer', value: 30, color: '#d50000' }
          ]
        },
        {
          image: FrancoPonce,
          name: 'Franco Ponce',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Versátil' : 'Versatile', key:'Versatile', value: 20, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Terco' : 'Stubborn', key:'Stubborn', value: 30, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Paciencia' : 'Patience', key:'Patience', value: 50, color: '#d50000' }
          ]
        },
        {
          image: Pablo,
          name: 'Pablo',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Comediante' : 'Comedian', key:'Comedian', value: 40, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Completista' : 'Completist', key:'Completist', value: 40, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Leedor' : 'Reader', key:'Reader', value: 20, color: '#d50000' }
          ]
        },
        {
          image: Edu,
          name: 'Eduardo Varela',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Creativo' : 'Creative', key:'Creative', value: 35, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Resolutivo' : 'Decisive', key:'Decisive', value: 35, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Soñador' : 'Dreamer', key:'Dreamer', value: 30, color: '#d50000' }
          ]
        },
        {
          image: ThiagoPuyelli,
          name: 'Thiago Puyelli',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Tranquilidad' : 'Tranquillity', key:'Tranquillity', value: 40, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Cerveza' : 'Beer', key:'Beer', value: 20, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Desordenado' : 'Untidy', key:'Untidy', value: 40, color: '#d50000' }
          ]
        },
        {
          image: SwimmableBee912,
          name: 'SwimmableBee912',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Alguien' : 'Somebody', key:'Somebody', value: 20, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Normal' : 'Normal', key:'Normal', value: 30, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Nadie' : 'Nobody', key:'Nobody', value: 50, color: '#d50000' }
          ]
        },
        {
          image: Hessai,
          name: 'Hessai',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Nerd' : 'Nerd', key:'Nerd', value: 50, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Ordenada' : 'Tidy', key:'Tidy', value: 20, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Creatividad' : 'Creative', key:'Creative', value: 30, color: '#d50000' }
          ]
        },
        {
          image: Alejandro,
          name: 'Alejandro Gonza Cordova',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Paciente' : 'Patient', key:'Patient', value: 25, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Gamer' : 'Gamer', key:'Gamer', value: 50, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Estratega' : 'Strategist', key:'Strategist', value: 25, color: '#d50000' }
          ]
        },
        {
          image: Lucas,
          name: 'Lucas Abratti',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Pasion' : 'Pasion', key:'Pasion', value: 40, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Codigo' : 'Code', key:'Code', value: 30, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Aprendiz' : 'Learner', key:'Learner', value: 30, color: '#d50000' }
          ]
        },
        {
          image: Mario,
          name: 'Mario Laverde',
          rol: idiom === 'ESP' ? 'Programador' : 'Programmer',
          data: [
            { title: idiom === 'ESP' ? 'Curiosidad' : 'Curiosity', key:'Curiosity', value: 30, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Inventiva' : 'Inventiveness', key:'Inventiveness', value: 40, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Planeación' : 'Planning', key:'Planning', value: 30, color: '#d50000' }
          ]
        },
        {
          image: Nadiko,
          name: 'Nadina Tavares',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Curiosidad' : 'Curious', key:'Curious', value: 33, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Creatividad' : 'Creative', key:'Creative', value: 33, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Ansiedad' : 'Anxious', key:'Anxious', value: 33, color: '#d50000' }
          ]
        },
        {
          image: Francisco,
          name: 'Francisco Della Puppa',
          rol: idiom === 'ESP' ? 'Artista' : 'Artist',
          data: [
            { title: idiom === 'ESP' ? 'Pelis' : 'Movies', key:'Movies', value: 33, color: '#FD9A28' },
            { title: idiom === 'ESP' ? 'Magic' : 'Magic', key:'Magic', value: 33, color: '#FF5126' },
            { title: idiom === 'ESP' ? 'Boke' : 'Boke', key:'Boke', value: 33, color: '#d50000' }
          ]
        }
      ]}/>
      <Footer />
    </div>
  )
}

export default Home
