import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const clearAll = createAction('清除列表信息')
export const saveResultInfo = createAction('保存搜索数据')

export const getArtical = (page, pagesize, search) => {
  return dispatch => {
    Fetch('artical/getArticleByTitle', { page, pagesize, search }).then(response => {
      dispatch(saveResultInfo(response.data))
    })
  }
}

export const actions = {
  getArtical,
  clearAll
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveResultInfo]: (state, action) => ({
    ...state,
    resultInfo: action.payload
  }),
  [clearAll]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  resultInfo: {
    result: [],
    total: 0
  }
}
export default function blogArticalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
