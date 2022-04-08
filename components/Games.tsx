import type { NextPage } from 'next'
import Maki from './Games/Maki'
import Pow from './Games/Pow'
import Logos from './Games/Logos'
import bomberman from '../public/img/bomberman 1.png'
import fists from '../public/img/Fists_logo.jpg'
import jazzy from '../public/img/Jazzy_Logo.png'
import quick from '../public/img/Quick_Logo.png'
import spin from '../public/img/Spin_Logo.png'
import windy from '../public/img/Windy_ico.png'

const Games: NextPage = () => {
  
  return (
    <div>
      <Maki />
      <Pow />
      <Logos logos={[
        {
          image: fists,
          name: 'Fists'
        },
        {
          image: jazzy,
          name: 'Jazzy'
        },
        {
          image: quick,
          name: 'Quick'
        },
        {
          image: spin,
          name: 'Spin'
        },
        {
          image: windy,
          name: 'Windy'
        },
        {
          image: bomberman,
          name: 'Bomberman'
        },
        {
          image: fists,
          name: 'Fists'
        },
        {
          image: jazzy,
          name: 'Jazzy'
        },
        {
          image: quick,
          name: 'Quick'
        },
        {
          image: spin,
          name: 'Spin'
        },
        {
          image: windy,
          name: 'Windy'
        },
        {
          image: bomberman,
          name: 'Bomberman'
        }
      ]}/>
    </div>
  )
}

export default Games