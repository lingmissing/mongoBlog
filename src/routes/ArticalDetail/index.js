import { injectReducer } from '../../store/reducers'
import ArticalDetail from './containers/ArticalDetailContainer'
import reducer from './modules/ArticalDetail'

export default (store) => ({
  path: 'artical-detail',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'articalDetail', reducer })

      /*  Return getComponent   */
      cb(null, ArticalDetail)

    /* Webpack named bundle   */
    }, 'ArticalDetail')
  }
})
