import { effects } from 'redux-saga';
import { fetch } from '../callApi';
import _get from 'lodash/object/get';

import {
  REQUEST as SNAP_REQUEST,
  REQUEST_STARTED as SNAP_REQUEST_STARTED,
  REQUEST_COMPELTED as SNAP_REQUEST_COMPELTED,
  REQUEST_FAILED as SNAP_REQUEST_FAILED
} from '../routes/Overview/modules/snap';

import {
  REQUEST as RISKLEVEL_REQUEST,
  REQUEST_STARTED as RISKLEVEL_REQUEST_STARTED,
  REQUEST_COMPELTED as RISKLEVEL_REQUEST_COMPELTED,
  REQUEST_FAILED as RISKLEVEL_REQUEST_FAILED
} from '../routes/Overview/modules/riskLevels';

import {
  REQUEST as MAP_REQUEST,
  REQUEST_STARTED as MAP_REQUEST_STARTED,
  REQUEST_COMPELTED as MAP_REQUEST_COMPELTED,
  REQUEST_FAILED as MAP_REQUEST_FAILED
} from '../routes/Maps/modules/reducer';

const { take, call, put, fork } = effects;

function *watchFetchSnapData() {
  while(true) {
    const { timeframe } = yield take(SNAP_REQUEST);
    yield fork(loadSnapData, timeframe);
  }
}

function *loadSnapData(timeframe) {
  yield put(startRequest(SNAP_REQUEST_STARTED))
  try {
    const data = yield call(fetch, '/api/friendships/reports/overview', {time_frame: timeframe});
    yield put(outputCorrect(SNAP_REQUEST_COMPELTED, data));
  } catch(err) {
    yield put(outputError(SNAP_REQUEST_FAILED, err));
  }
}

function *watchFetchRiskLevelData() {
  while(true) {
    const {timeframe} = yield take(RISKLEVEL_REQUEST);
    yield fork(loadRiskLevelData, timeframe);
  }
}

function *loadRiskLevelData(timeframe) {
  yield put(startRequest(RISKLEVEL_REQUEST_STARTED));
  try {
    const data = yield call(fetch, '/api/friendships/reports/dropout', {time_frame: timeframe});
    yield put(outputCorrect(RISKLEVEL_REQUEST_FAILED, data));
  } catch(err) {
    yield put(outputError(RISKLEVEL_REQUEST_FAILED, err));
  }
}

function *watchFetchReneralMapData() {
  while(true) {
    const { mapType } = yield take(MAP_REQUEST);
    yield fork(loadRenaralMapData, mapType);
  }
}

function *loadRenaralMapData(mapType) {
  yield put(startRequest(MAP_REQUEST_STARTED));
  try {
    const [branches, members] = yield [
      call(fetch, '/api/friendships/maps/branches'),
      call(fetch, '/api/friendships/maps/members')
    ];


    const payload = {
      branches: _get(branches, 'data.attributes.map_points'),
      members: _get(members, 'data.attributes.map_points')
    };

    yield put(outputCorrect(MAP_REQUEST_FAILED, payload));
  } catch(err) {
    yield put(outputError(MAP_REQUEST_FAILED, err));
  }
}

export default function *rootSaga() {
  yield fork(watchFetchSnapData);
  yield fork(watchFetchRiskLevelData);
  yield fork(watchFetchReneralMapData);
}


function startRequest(type) {
  return {
    type,
    meta: {
      isLoading: true
    }
  }
}

function outputError(type, error) {
  return {
    type,
    meta: {
      isLoading: false,
      error: true,
      errDesc: error
    }
  }
}

function outputCorrect(type, data) {
  return {
    type,
    payload: data,
    meta: {
      isLoading: false
    }
  }
}
