import type { NextPage } from 'next'
import styled from '@emotion/styled'

const About: NextPage = () => {
  const AboutStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 40px;
    .titleAbout {
      font-family: comix;
      color: #980a24;
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
          border-radius: 100%;
          border: 1px solid gray;
          margin-bottom: 30px;
        }
        .textDiv {
          margin-top: 20px;
          text-align: justify;
        }
      }
    }
  `

  return (
    <AboutStyled>
      <h3 className='titleAbout'>ABOUT US</h3>
      <div className="contentAbout">
        <div className="divAbout">
          <div className="circle"></div>
          <h5 className='titleAbout'>
            TEAMWORK
          </h5>
          <p className='textDiv'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
        </div>
        <div className="divAbout">
          <div className="circle"></div>
          <h5 className='titleAbout'>
            CREATIVITY
          </h5>
          <p className='textDiv'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
        </div>
        <div className="divAbout">
          <div className="circle"></div>
          <h5 className='titleAbout'>
            PASSION
          </h5>
          <p className='textDiv'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero nostrum reprehenderit dolores. Natus similique aliquam fugit pariatur doloremque repellendus tempore vitae odio eos placeat hic quam veritatis dolorum cumque laboriosam, quibusdam, vero repudiandae doloribus itaque quas tenetur illo praesentium!
          </p>
        </div>
      </div> 
      <h3 className='titleAbout' style={{margin: '30px'}}>OUR GAMES</h3>
    </AboutStyled>
  )
}

export default About