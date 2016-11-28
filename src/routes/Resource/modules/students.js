export const REQUEST_STARTED = Symbol('students request started');
export const REQUEST_COMPELTED = Symbol('students request completed');
export const REQUEST_FAILED = Symbol('students request failed');

// Reducer
export const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
    case REQUEST_COMPELTED:
    case REQUEST_FAILED:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
