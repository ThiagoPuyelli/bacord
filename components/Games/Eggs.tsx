import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { useEffect } from 'react'

const Eggs: NextPage = () => {
  const EggsStyled = styled.div`
    width: 100%;
    margin-top: -10%;
    height: 1100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    .videoEggs {
      width: 40%;
      margin-top: 10%;
    }
    .videoEggs * {
      width: 100%;
      height: 100%;
    }
  `

  const calculateMarginTop = () => {
    const image: HTMLElement|null = document.querySelector('.Eggs')
    if (image) {
      if (window.innerWidth > 0) {
        image.style.height = (window.innerWidth * 1100 / 2015) + 'px'
      }
    }
  }

  setTimeout(() => {
    calculateMarginTop()
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', () => {
        calculateMarginTop()
    })
  }, [])

  return (
    <EggsStyled className='Eggs'>
      <div className="videoEggs">
        <video src={require('../../public/Eggs.mp4')} controls />
      </div>
      
    </EggsStyled>
  )
}

export default Eggs