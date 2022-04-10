import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import teamWork from '../public/img/teamwork.png'
import creativity from '../public/img/creativity.png'
import pasion from '../public/img/pasion.png'

const About: NextPage = () => {
  const AboutStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 40px;
    .titleAbout {
      font-family: comix;
      color: var(--title);
      letter-spacing: 4px;
      text-align: center;
    }
    .contentAbout {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      justify-content: center;
      .divAbout {
        width: 200px;
        margin: 60px;
        display: flex;
        flex-flow: wrap column;
        align-items: center;
        .circle {
          width: 200px;
          height: 200px;
          margin-bottom: 30px;
        }
        .textDiv {
          margin-top: 20px;
          text-align: justify;
        }
      }
    }
    @media (max-width: 648px) {
      * {
        padding: 0px !important;
        margin: 0px !important;
      }
      padding-bottom: 40px !important;
      .contentAbout {
        width: 100%;
        flex-flow: column wrap;
        align-items: center;
      }
      .divAbout {
        width: 100% !important;
        flex-flow: row wrap;
        height: 200px;
        margin-top: 120px !important;
        margin-bottom: 80px !important;
        justify-content: space-between;
      }
      .circle {
        height: 100% !important;
      }
      .textAbout {
        width: 200px !important;
        .textDiv {
          margin-top: 20px !important;
        }
      }
      .titleAbout.ourgames {
        margin-top: 120px !important;
      }
    }
    @media (max-width: 502px) {
      .textDiv {
        font-size: 13px;
      }
      .divAbout {
        width: 200px !important;
        margin: 60px !important;
        display: flex !important;
        flex-flow: wrap column !important;
        align-items: center !important;
        height: 500px !important;
        .circle {
          width: 200px !important;
          height: 200px !important;
          border-radius: 100% !important;
          border: 1px solid gray !important;
          margin-bottom: 30px !important;
        }
        .textDiv {
          margin-top: 20px !important;
          text-align: justify !important;
        }
      }
    }
  `

  return (
    <AboutStyled>
      <h3 className='titleAbout'>ABOUT US</h3>
      <div className="contentAbout">
        <div className="divAbout">
          <div className="circle">
            <Image src={teamWork} />
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            TEAMWORK
          </h5>
          <p className='textDiv'>
          Bacord’s team is full of excellent professionals, the top ones in their respective fields of work, always giving their best. Each new game is a challenge, where creativity plays a key role.          </p>
          </div>
        </div>
        <div className="divAbout">
          <div className="circle">
            <Image src={creativity} />
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            CREATIVITY
          </h5>
          <p className='textDiv'>
          Each idea is a whole new universe to explore. We begin every project with an open mind and we finish it with a colorful landscape. Nothing is taken for granted, we’re always thinking outside the box.            </p>
          </div>
        </div>
        <div className="divAbout">
          <div className="circle">
            <Image src={pasion} />
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            PASSION
          </h5>
          <p className='textDiv'>
          If there’s any word to define an argentinian team, that would be “passion”. We passionately take on every new project and we take care of every detail along the way. If you don’t know us, with just knowing where we’re from its enough to describe us.          </p>
          </div>
        </div>
      </div> 
      <h3 className='titleAbout ourgames' style={{margin: '30px'}}>OUR GAMES</h3>
    </AboutStyled>
  )
}

export default About