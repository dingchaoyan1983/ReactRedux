import $ from 'jquery';
import {CALL_API} from 'middlewares/api-call-middleware';

// Constants
// export const constants = { }
export const REQUEST_STARTED = Symbol(); //'SNAP_REQUEST_STARTED';
export const REQUEST_COMPELTED = Symbol(); //'SNAP_REQUEST_COMPELTED';
export const REQUEST_FAILED = Symbol(); //'SNAP_REQUEST_FAILED';

// export actions
export function fetchOverviewPerformance(timeframe) {
  return {
    type: REQUEST_STARTED,
    timeframe,
    meta: {
      isLoading: true
    }

    // [CALL_API]: {
    //   types:{
    //     REQUEST_STARTED: REQUEST_STARTED,
    //     REQUEST_COMPELTED: REQUEST_COMPELTED,
    //     REQUEST_FAILED: REQUEST_FAILED
    //   },
    //   url: `/api/friendships/reports/overview?time_frame=${timeframe}`,
    //   method: 'GET'
    // }
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
