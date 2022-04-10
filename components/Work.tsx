import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Work: NextPage = () => {
  const WorkStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .titleWork {
      margin-top: 90px;
    }
    .content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding: 50px;
      padding-left: 120px;
      padding-right: 120px;
      width: 100%;
    }
    .info,
    .apply {
      width: 400px;
      text-align: justify;
    }

    .apply {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      h3 {
        letter-spacing: 2px;
        width: 100%;
        text-align: left;
        text-align: center;
      }
      .listWork {
        margin-top: 30px;
        margin-bottom: 30px;
        li {
          list-style: quare;
          list-style: var(--title);
        }
      }
      .applyButton {
        background: var(--title);
        padding: 10px;
        border-radius: 50px;
        width: 200px;
        color: white;
        font-weight: bold;
        border: none;
        box-shadow: 0px 0px 4px var(--title);
        cursor: pointer;
        transition: 300ms all;
      }
      .applyButton:hover {
        background: #570312;
      }
    }

    @media (max-width: 1062px) {
      .content {
        flex-flow: column wrap;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
      }

      .info,
      .apply {
        width: 80%;
      }

      .apply {
        margin-top: 30px;
      }
    }

    @media (max-width: 350px) {
      .titleComix.titleWork {
        font-size: 16px;
      }
    }
  `

  return (
    <WorkStyled>
      <h1 className='titleComix titleWork'>WORK WITH US</h1>
      <div className="content">
        <p className="info">
        In Bacord we continue to grow day by day. If you would like to join us, you’re most welcome. We offer the best work atmosphere, a place where your voice and opinion matters, where we cherish passion and creativity.        </p>
        <div className="apply">
          <h3>What we offer</h3>
          <ul className='listWork'>
          <li>Opportunity to grow professionally</li>
          <li>Variety of opinions</li>
          <li>Excellent work atmosphere</li>
          <li>Respect</li>
          <li>Training</li>
          <li>100% online work</li>
          <li>Flexible hours</li>
          </ul>
          <button className="applyButton">
            APPLY FOR A JOB
          </button>
        </div>
      </div>
    </WorkStyled>
  )
}

export default Work