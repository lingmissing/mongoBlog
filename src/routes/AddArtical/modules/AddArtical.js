import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const clearAll = createAction('清除列表信息')
export const saveCategory = createAction('保存种类信息')
export const saveArtical = createAction('保存文章信息')

export const getCatList = () => {
  return dispatch => {
    Fetch('getCategory').then(response => {
      dispatch(saveCategory(response.data))
    })
  }
}
export const getArticalByCategory = id => {
  return dispatch => {
    Fetch('getArticleByTitle', { page: 1, pagesize: 10 }).then(response => {
      dispatch(saveArtical(response.data))
    })
  }
}

export const actions = {
  getCatList,
  getArticalByCategory,
  clearAll
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveCategory]: (state, action) => ({
    ...state,
    categoryList: action.payload
  }),
  [saveArtical]: (state, action) => ({
    ...state,
    articalInfo: action.payload
  }),
  [clearAll]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  categoryList: [],
  articalInfo: {
    result: [],
    total: 0
  }
}
export default function addArticalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
