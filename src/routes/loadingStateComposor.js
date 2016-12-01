export default function loadingStateComposor(REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED) {
  return function(defaultState) {
    return function(state = defaultState, action) {
      switch (action.type) {
        case REQUEST_STARTED:
        case REQUEST_COMPELTED:
        case REQUEST_FAILED:
          return Object.assign({}, state, action);
        default:
          return state;
      }
    }
  }
}
