import { injectReducer } from '../../store/reducers'
import Theme from './containers/ThemeContainer'
import reducer from './modules/Theme'

export default (store) => ({
  path: 'theme',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'theme', reducer })

      /*  Return getComponent   */
      cb(null, Theme)

    /* Webpack named bundle   */
    }, 'Theme')
  }
})
