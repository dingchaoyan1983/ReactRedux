import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'maps',
  /*  Async getComponent is only invoked when route matches   */
  getComponents (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Container = require('./containers/Container').default
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'maps', reducer })

      /*  Return getComponent   */
      cb(null, Container)

    /* Webpack named bundle   */
  }, 'maps')
  }
})
