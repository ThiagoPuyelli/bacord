import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import teamWork from '../public/img/teamwork.png'
import creativity from '../public/img/creativity.png'
import pasion from '../public/img/pasion.png'
import { useSelector } from 'react-redux'

const About: NextPage = () => {
  const AboutStyled = styled.section`
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
        width: 300px;
        margin: 40px;
        display: flex;
        flex-flow: wrap column;
        align-items: center;
        transition: 300ms all;
        padding: 20px;
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
      .divAbout:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0px 0px 3px var(--title);
        border: 1px solid var(--title);
        border-radius: 20px;
        background: var(--title);
        .titleAbout {
          color: white;
        }
        .textDiv {
          color: white;
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
          margin-bottom: 30px !important;
        }
        .textDiv {
          margin-top: 20px !important;
          text-align: justify !important;
        }
      }
    }
  `
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)

  return (
    <AboutStyled id='about'>
      <h3 className='titleAbout'>
        {
          idiom === 'ESP'
          ?
          'NOSOTROS'
          :
          'ABOUT US'
        }
        </h3>
      <div className="contentAbout">
        <div className="divAbout">
          <div className="circle work">
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            {
              idiom === 'ESP'
              ?
              'EQUIPO'
              :
              'TEAMWORK'
            }
          </h5>
          <p className='textDiv'>
            {
              idiom === 'ESP'
              ?
              'El equipo de Bacord está plagado de excelentes integrantes. Los mejores en su área. Dejando todo en la cancha el alma y el corazón. Cada juego nuevo es un desafío, donde la creatividad juega un papel importante al momento de lanzar una nueva idea, intentando todos los días lograr la excelencia.'
              :
              'Bacord’s team is full of excellent professionals, the top ones in their respective fields of work, always giving their best. Each new game is a challenge, where creativity plays a key role.'
            }
                    </p>
          </div>
        </div>
        <div className="divAbout">
          <div className="circle creativity">
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            {
              idiom === 'ESP'
              ?
              'CREATIVIDAD'
              :
              'CREATIVITY'
            }
          </h5>
          <p className='textDiv'>
          {
            idiom === 'ESP'
            ?
            'Cada idea es un mundo. Cada mundo es magia. Encaramos cada proyecto con la mente en blanco y lo terminamos con un paisaje de colores. Nada esta por sentado y todo es nuevo. Siempre pensando “Out of the box”'
            :
            'Each idea is a whole new universe to explore. We begin every project with an open mind and we finish it with a colorful landscape. Nothing is taken for granted, we’re always thinking outside the box.'
          }            </p>
          </div>
        </div>
        <div className="divAbout">
          <div className="circle pasion">
          </div>
          <div className="textAbout">
          <h5 className='titleAbout'>
            {
              idiom === 'ESP'
              ?
              'PASIÓN'
              :
              'PASSION'
            }
          </h5>
          <p className='textDiv'>
          {
            idiom === 'ESP'
            ?
            'Si una característica es importante dentro de un equipo Argentino es la pasión con la que hacemos cada trabajo, con la que nos levantamos cada día, con la que emprendemos para lograr nuestros sueños, eso nos caracteriza y si no nos conocer, ya con saber de donde somos se demuestra que nuestra pasión la llevamos a cada rincón del mundo. '
            :
            'If there’s any word to define an argentinian team, that would be “passion”. We passionately take on every new project and we take care of every detail along the way. If you don’t know us, with just knowing where we’re from its enough to describe us.'
          }          </p>
          </div>
        </div>
      </div> 
      <h3 className='titleAbout ourgames' style={{margin: '30px'}}>OUR GAMES</h3>
    </AboutStyled>
  )
}

export default About