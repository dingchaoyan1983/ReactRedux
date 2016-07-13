import  { createAction } from 'redux-actions';

// Constants
// export const constants = { }
export const REQUEST = Symbol();
const REQUEST_STARTED = Symbol();
const REQUEST_COMPELTED = Symbol();
const REQUEST_FAILED = Symbol();

export const fetchStarted = createAction(REQUEST_STARTED, null, () => ({isLoading: true}));
export const fetchCompleted = createAction(REQUEST_COMPELTED, null, () => ({isLoading: false}));
export const fetchFailed = createAction(REQUEST_FAILED, null, () => ({isLoading: false}));

// Action Creators
// export const actions = { }
export function fetchRiskLevels(timeframe) {
  return {
    type: REQUEST,
    timeframe
  }

  //This is the old manner, use redux-thunk to get the data from api
  // return {
  //   [CALL_API]: {
  //     types:{
  //       REQUEST_STARTED: REQUEST_STARTED,
  //       REQUEST_COMPELTED: REQUEST_COMPELTED,
  //       REQUEST_FAILED: REQUEST_FAILED
  //     },
  //     url: `/api/friendships/reports/dropout?time_frame=${timeframe}`,
  //     method: 'GET'
  //   }
  // }
}

// Reducer
const initialState = {}
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
