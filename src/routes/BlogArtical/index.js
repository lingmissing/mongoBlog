import { injectReducer } from '../../store/reducers'
import BlogArtical from './containers/BlogArticalContainer'
import reducer from './modules/BlogArtical'

export default (store) => ({
  path: 'blog-artical',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'blogArtical', reducer })

      /*  Return getComponent   */
      cb(null, BlogArtical)

    /* Webpack named bundle   */
    }, 'BlogArtical')
  }
})
