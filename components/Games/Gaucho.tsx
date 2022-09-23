import GauchoImg from '../../public/img/gaucho.png'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState, useEffect } from "react"

const Gaucho = () => {
  const GauchoStyled = styled.div`
    height: 1100px;
    width: 100%;
    margin: 0px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: left;
    .videoGaucho {
      margin-left: 7%;
      width: 32%;
      height: 27%;
    }
    .videoGaucho iframe {
      width: 100%;
      height: 100%;
    }
  `
  const [width, setWidth] = useState(0)
  
  const calculateHeight = () => {
    const gauchoDiv: HTMLElement|null = document.querySelector('.gaucho')
    if (gauchoDiv) {
      if (window.innerWidth > 0) gauchoDiv.style.height = (window.innerWidth / 2 + window.innerWidth / 10) + 'px'
    }
  }

 /* const calculateVideo = () => {
    const gauchoVideo: HTMLElement|null = document.querySelector('.videoGaucho')
    if (gauchoVideo) {
      if (window.innerWidth > 0) {
        gauchoVideo.style.paddingTop = (284 + window.innerWidth - 1366) + 'px'
        gauchoVideo.style.paddingTop = (114 + window.innerWidth - 1366) + 'px'
      }
    }
  }*/

  useEffect(() => {
    setWidth(window.innerWidth)
    calculateHeight()
    //calculateVideo()
    window.addEventListener('resize', () => {
        calculateHeight()
        //calculateVideo()
    })
    //return () => window.addEventListener('resize', calculateHeight)
  }, [])
  return (
    <GauchoStyled className='gaucho'>
      {/*<div className="gauchoImg">
        <Image src={GauchoImg} alt='Img gaucho' />
  </div>*/}
      <div className="videoGaucho">
        <iframe src="https://www.youtube.com/embed/_xrsI9vJTzY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </GauchoStyled>
  )
}

export default Gaucho