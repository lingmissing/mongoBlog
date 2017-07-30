import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const clearAll = createAction('清除列表信息')
export const saveDetail = createAction('保存信息')

export const getDetail = id => {
  return dispatch => {
    Fetch('artical/getArticleDetail', { id }).then(res => {
      dispatch(saveDetail(res.data))
    })
  }
}

export const actions = {
  getDetail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveDetail]: (state, action) => ({
    ...state,
    data: action.payload
  }),
  [clearAll]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {}
}
export default function articalDetailReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
