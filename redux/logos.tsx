import { Dispatch } from 'redux'

const initialState = {
  position: 0,
  active: false
}

export const logosReducer = (state = initialState, { type }: any) => {
  if (typeof type === 'number') {
    return {...state, position: type}
  } else {
    return {...state, active: type}
  }
}

export const logosAction = (type: number|boolean) => (dispatch: Dispatch) => {
  dispatch({
    type
  })
}