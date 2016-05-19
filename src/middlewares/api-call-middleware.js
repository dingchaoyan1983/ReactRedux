import $ from 'jquery';

export const CALL_API = Symbol('api call');

export default () => next => {
  async function callApi(action) {
    if (action[CALL_API]) {
      let {data={}, method='get', url, types:{REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED}} = action[CALL_API];

      if (!url) {
        throw new Error('if you want to use CALL_API middleware, make sure you pass `url`');
      }

      if(!REQUEST_STARTED || !REQUEST_COMPELTED || !REQUEST_FAILED) {
        throw new Error('if you want to use CALL_API middleware, make sure specify `REQUEST_STARTED`, `REQUEST_COMPELTED` and `REQUEST_FAILED` types');
      }

      next({type: REQUEST_STARTED, meta: {isLoading: true}});
      try {
        let resp = await $[method.toLocaleLowerCase()](url, data);
        next({type: REQUEST_COMPELTED, payload: resp, meta: {isLoading: false}});
      } catch(err){
        next({type: REQUEST_FAILED, meta: {isLoading: false, error: true, errDesc: err}});
      }
    } else {
      next(action);
    }
  }
  return action => {
    callApi(action);
  }
}
