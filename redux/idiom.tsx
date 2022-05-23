import { Dispatch } from 'redux'

const initialState = {
  idiom: 'ENG'
}

export const idiomReducer = (state = initialState, { type }: any) => {
  if (type === 'ESP') {
    return { idiom: 'ESP' }
  } else {
    return { idiom: 'ENG' }
  }
}

export const idiomAction = (idiom: string) => (dispatch: Dispatch) => {
  if (idiom === 'ESP') {
    dispatch({
      type: 'ESP'
    })
  } else {
    dispatch({
      type: 'ENG'
    })
  }
}