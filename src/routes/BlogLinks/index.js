import { injectReducer } from '../../store/reducers'
import BlogLinks from './containers/BlogLinksContainer'
import reducer from './modules/BlogLinks'

export default (store) => ({
  path: 'blog-links',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'blogLinks', reducer })

      /*  Return getComponent   */
      cb(null, BlogLinks)

    /* Webpack named bundle   */
    }, 'BlogLinks')
  }
})
