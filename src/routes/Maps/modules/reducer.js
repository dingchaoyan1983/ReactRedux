import { createAction } from 'redux-actions';
// Constants
// export const constants = { }

export const REQUEST = Symbol();
const REQUEST_STARTED = Symbol();
const REQUEST_COMPELTED = Symbol();
const REQUEST_FAILED = Symbol();

export const fetchStarted = createAction(REQUEST_STARTED, null, () => ({isLoading: true}));
export const fetchCompleted = createAction(REQUEST_COMPELTED, null, () => ({isLoading: false}));
export const fetchFailed = createAction(REQUEST_FAILED, null, () => ({isLoading: false}));

//Action Creators
export function fetchMapData(mapType) {
  return {
    type: REQUEST,
    mapType
  };

  //This is the old manner, use redux-thunk to get the data from api
  // return async (dispatch) => {
  //   let payload = {};
  //
  //   dispatch({type: REQUEST_STARTED, meta: {isLoading: true}});
  //   try {
  //     if (mapType === 'current') {
  //       payload = await Promise.all([
  //         $.get('/api/friendships/maps/branches'),
  //         $.get('/api/friendships/maps/members')
  //       ]);
  //     } else if (mapType === 'renewal') {
  //       payload = await [{}, {}];
  //     } else {
  //       payload = await [{}, {}];
  //     }
  //
  //     payload = {
  //       branches: _get(payload[0], 'data.attributes.map_points'),
  //       members: _get(payload[1], 'data.attributes.map_points')
  //     }
  //
  //     dispatch({type: REQUEST_COMPELTED, payload, meta: {isLoading: false}});
  //   } catch(err) {
  //     dispatch({type: REQUEST_FAILED, meta: {isLoading: false, error: true, errDesc: err}});
  //   }
  // }
}

// export const actions = { }

// Reducer
const initialState = {}
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
    case REQUEST_COMPELTED:
    case REQUEST_FAILED:
      return Object.assign({}, state, action)
    default:
      return state
  }
}
