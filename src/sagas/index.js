import { effects } from 'redux-saga';
import {REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED} from '../routes/Overview/modules/snap';
import $ from 'jquery';

const { take, call, put } = effects;

export function *watchFetchSnapData() {
  while(true) {
    const { timeframe } = yield take(REQUEST_STARTED);
    try {
      const data = yield call((timeframe) => Promise.resolve($.get(`/api/friendships/reports/overview?time_frame=${timeframe}`)), timeframe);
      yield put({type: REQUEST_COMPELTED, payload: data, meta: {isLoading: false}});
    } catch(err) {
      yield put({type: REQUEST_FAILED, meta: {isLoading: false, error: true, errDesc: err}});
    }
  }
}
