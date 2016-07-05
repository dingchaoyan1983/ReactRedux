import {CALL_API} from 'middlewares/api-call-middleware';

// Constants
// export const constants = { }
const REQUEST_STARTED = Symbol();
const REQUEST_COMPELTED = Symbol();
const REQUEST_FAILED = Symbol();


// Action Creators
// export const actions = { }
export function fetchRiskLevels(timeframe) {
  return {
    [CALL_API]: {
      types:{
        REQUEST_STARTED: REQUEST_STARTED,
        REQUEST_COMPELTED: REQUEST_COMPELTED,
        REQUEST_FAILED: REQUEST_FAILED
      },
      url: `/api/friendships/reports/dropout?time_frame=${timeframe}`,
      method: 'GET'
    }
  }
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return Object.assign({}, state, action);
    case REQUEST_COMPELTED:
      return Object.assign({}, state, action);
    case REQUEST_FAILED:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}