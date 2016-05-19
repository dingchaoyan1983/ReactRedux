import { combineReducers } from 'redux';
import snap from './snap';
import renewals from './renewals';

export default combineReducers({
  snap,
  renewals
})
