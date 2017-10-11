import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const clearAll = createAction('清除列表信息')
export const saveArtical = createAction('保存文章信息')
export const saveArticalDetail = createAction('保存文章详情')
export const saveArticalChange = createAction('保存文章改变', (e, name) => ({
  value: e.target.value,
  name
}))

export const getArtical = (page = 1) => {
  return dispatch => {
    Fetch('artical/searchArtical', { page }).then(response => {
      dispatch(saveArtical(response.data))
    })
  }
}

export const getDetail = id => {
  return dispatch => {
    Fetch('artical/getArticleDetail', { id }).then(response => {
      dispatch(saveArticalDetail(response.data))
    })
  }
}

export const submitArtical = () => {
  return (dispatch, getState) => {
    const data = getState().addArtical.artical
    Fetch('artical/saveArticle', data).then(response => {
      alert(response.message)
    })
  }
}

export const actions = {
  getArtical,
  saveArticalChange,
  getDetail,
  submitArtical,
  clearAll
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveArticalDetail]: (state, action) => ({
    ...state,
    artical: action.payload
  }),
  [saveArticalChange]: (state, action) => {
    const { name, value } = action.payload
    return {
      ...state,
      artical: {
        ...state.artical,
        [name]: value
      }
    }
  },
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
  articalInfo: {
    result: [],
    total: 0
  },
  artical: {}
}
export default function addArticalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
