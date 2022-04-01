import type { NextPage } from 'next'
import Maki from './Games/Maki'
import Pow from './Games/Pow'
import Logos from './Games/Logos'

const Games: NextPage = () => {
  
  return (
    <div>
      <Maki />
      <Pow />
      <Logos />
    </div>
  )
}

export default Games