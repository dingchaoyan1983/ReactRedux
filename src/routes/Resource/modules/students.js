import {compose} from 'redux';
import loadingStateComposor from 'routes/loadingStateComposor';

export const REQUEST_STARTED = Symbol('students request started');
export const REQUEST_COMPELTED = Symbol('students request completed');
export const REQUEST_FAILED = Symbol('students request failed');

// Reducer
export const initialState = [];

let loadingStateReducer = loadingStateComposor({REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED});

export default (state=initialState, action) => {
  state = loadingStateReducer(state, action);
  switch (action.type) {

  }

  return state;
}
