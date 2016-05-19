import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'overview',
  /*  Async getComponent is only invoked when route matches   */
  getComponents (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Container = require('./containers/Container').default
      const reducer = require('./modules').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'overview', reducer })

      /*  Return getComponent   */
      cb(null, Container)

    /* Webpack named bundle   */
    }, 'overview')
  }
})
