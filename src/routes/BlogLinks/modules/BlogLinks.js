import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const saveLink = createAction('保存链接')

export const getAllLink = () => {
  return (dispatch, getState) => {
    Fetch('getLink').then(response => {
      dispatch(saveLink(response.data))
    })
  }
}

export const actions = {
  getAllLink
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveLink]: (state, action) => ({
    ...state,
    links: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  links: []
}
export default function blogLinksReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
