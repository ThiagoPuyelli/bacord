import { useDispatch, useSelector } from "react-redux"
import { idiomAction } from "../redux/idiom"
import styled from "@emotion/styled"

const IdiomButton = () => {
  const IdiomStyled = styled.div`
    color: white;
    cursor: pointer;
    font-size: 14px;

    .idiom {
      position: absolute;
      backface-visibility: hidden;
      transition: 300ms all;
    }
    .idiom:hover {
      transform: scale(1.1, 1.1);
    }
  `
  const { idiom } = useSelector((state: { idiom: { idiom: string } }) => state.idiom)
  const dispatch = useDispatch()
  const changeIdiom = () => {
    if (idiom === 'ENG') {
      dispatch(idiomAction('ESP') as any)
    } else {
      dispatch(idiomAction('ENG') as any)
    }
  }

  return (
    <IdiomStyled onClick={changeIdiom}>
      {
        idiom === 'ESP' 
        ?
        <div className="idiom ESP">
          <h1>ESP</h1>
        </div>
        :
        <div className="idiom ENG">
          <h1>ENG</h1>
        </div>
      }
      
      
    </IdiomStyled>
  )
}

export default IdiomButton