import { Promise } from 'es6-promise';
import $ from 'jquery';
import _get from 'lodash/object/get';
// Constants
// export const constants = { }

export const REQUEST = Symbol();
export const REQUEST_STARTED = Symbol();
export const REQUEST_COMPELTED = Symbol();
export const REQUEST_FAILED = Symbol();

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
export const initialState = {}
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, action);
    case REQUEST_STARTED:
      return Object.assign({}, state, action);
    case REQUEST_COMPELTED:
      return Object.assign({}, state, action);
    case REQUEST_FAILED:
      return Object.assign({}, state, action)
    default:
      return state
  }
}
