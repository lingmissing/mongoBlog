import { injectReducer } from '../../store/reducers'
import AddArtical from './containers/AddArticalContainer'
import reducer from './modules/AddArtical'

export default (store) => ({
  path: 'add-artical',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'addArtical', reducer })

      /*  Return getComponent   */
      cb(null, AddArtical)

    /* Webpack named bundle   */
    }, 'AddArtical')
  }
})
