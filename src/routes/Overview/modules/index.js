import { combineReducers } from 'redux';
import snap from './snap';
import riskLevels from './riskLevels';

export default combineReducers({
  snap,
  riskLevels
})
