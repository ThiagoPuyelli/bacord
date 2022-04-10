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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
          </div>
        </div>
      </div> 
      <h3 className='titleAbout ourgames' style={{margin: '30px'}}>OUR GAMES</h3>
    </AboutStyled>
  )
}

export default About