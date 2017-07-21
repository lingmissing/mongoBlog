import { injectReducer } from '../../store/reducers'
import HomeView from './containers/HomeViewContainer'
import reducer from './modules/HomeView'

export default store => ({
  path: '/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'homeView', reducer })

        /*  Return getComponent   */
        cb(null, HomeView)

        /* Webpack named bundle   */
      },
      'HomeView'
    )
  }
})
