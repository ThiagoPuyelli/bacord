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
      }
      p {
        margin-top: 30px;
        margin-bottom: 30px;
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
      }
    }
  `

  return (
    <WorkStyled>
      <h1 className='titleComix titleWork'>WORK WITH US</h1>
      <div className="content">
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab suscipit tempora fuga natus aliquam nesciunt delectus accusamus impedit reiciendis sit debitis, hic neque quas qui commodi voluptatum corporis magnam consequatur quis eos? Alias, cumque ab. Vero praesentium magnam pariatur consectetur enim, id repellendus aliquam libero amet quas architecto voluptatem explicabo voluptates. Soluta consequatur molestias vel nisi reprehenderit ad animi iure assumenda deleniti doloribus aspernatur, dicta consectetur ratione distinctio explicabo aperiam optio, maxime quo doloremque iusto adipisci. Repudiandae, nesciunt soluta!
        </p>
        <div className="apply">
          <h3>What we offer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vitae ex corrupti. Eaque possimus ea natus eveniet voluptatum quod, modi autem hic eligendi provident officiis similique officia doloribus ducimus aliquid perferendis commodi fugit asperiores vel reiciendis quas? Iste, itaque temporibus.
          </p>
          <button className="applyButton">
            APPLY FOR A JOB
          </button>
        </div>
      </div>
    </WorkStyled>
  )
}

export default Work