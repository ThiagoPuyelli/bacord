import type { NextPage } from 'next'
import Maki from './Games/Maki'
import Pow from './Games/Pow'
import Logos from './Games/Logos'
import Eggsplosion from '../public/img/LogosJuegos/eggsplosion.png'
import Fists from '../public/img/LogosJuegos/Fists_logo.jpg'
import Jazzy from '../public/img/LogosJuegos/Jazzy_Logo.png'
import Quick from '../public/img/LogosJuegos/Quick_Logo.png'
import Spin from '../public/img/LogosJuegos/Spin_Logo.png'
import Windy from '../public/img/LogosJuegos/Windy_ico.png'
import Mines from '../public/img/LogosJuegos/9_123Mines_logo.png'
import Basket from '../public/img/LogosJuegos/10_BasketChill_logo.png'
import Battleship from '../public/img/LogosJuegos/3_BattleshipReal_logo.png'
import BomberWar from '../public/img/LogosJuegos/1_BomberWar_logo.png'
import BubbleSlimesShoot from '../public/img/LogosJuegos/2_BubbleSlimesShoot_logo.png'
import SoccerHeading from '../public/img/LogosJuegos/4_SoccerHeading_logo.png'
import CrashBattle from '../public/img/LogosJuegos/5_CrashBattle_logo.png'
import RealChess from '../public/img/LogosJuegos/6_RealChess_logo.png'
import RealPoll from '../public/img/LogosJuegos/13_RealPool_logo.png'

const Games: NextPage = () => {
  
  return (
    <section id='games'>
      <Maki />
      <Pow />
      <Logos logos={[
        {
          image: Eggsplosion,
          name: 'Eggsplosion'
        },
        {
          image: Fists,
          name: 'Fists'
        },
        {
          image: Jazzy,
          name: 'Jazzy'
        },
        {
          image: Quick,
          name: 'Quick'
        },
        {
          image: Spin,
          name: 'Spin'
        },
        {
          image: Windy,
          name: 'Windy'
        },
        {
          image: Mines,
          name: '1, 2, 3 Mines'
        },
        {
          image: Basket,
          name: 'Basket Chill'
        },
        {
          image: Battleship,
          name: 'Battleship Real'
        },
        {
          image: BomberWar,
          name: 'Bomber War'
        },
        {
          image: BubbleSlimesShoot,
          name: 'Bomber Slimes Shoot'
        },
        {
          image: SoccerHeading,
          name: 'Soccer Heading'
        },
        {
          image: CrashBattle,
          name: 'Crash Battle'
        },
        {
          image: RealChess,
          name: 'Real Chess'
        },
        {
          image: RealPoll,
          name: 'Real Poll'
        }
      ]}/>
    </section>
  )
}

export default Games