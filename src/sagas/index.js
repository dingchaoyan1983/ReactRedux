import { effects } from 'redux-saga';
import { fetch } from '../callApi';
import _get from 'lodash/object/get';

import * as snap from '../routes/Overview/modules/snap';
import * as riskLevels from '../routes/Overview/modules/riskLevels';
import * as maps from '../routes/Maps/modules/reducer';

const { take, call, put, fork } = effects;

function *watchFetchSnapData() {
  while(true) {
    const { timeframe } = yield take(snap.REQUEST);
    yield fork(loadSnapData, timeframe);
  }
}

function *loadSnapData(timeframe) {
  yield put(snap.fetchStarted());
  try {
    const data = yield call(fetch, '/api/friendships/reports/overview', {time_frame: timeframe});
    yield put(snap.fetchCompleted(data));

  } catch(err) {
    yield put(snap.fetchFailed(err));
  }
}

function *watchFetchRiskLevelData() {
  while(true) {
    const {timeframe} = yield take(riskLevels.REQUEST);
    yield fork(loadRiskLevelData, timeframe);
  }
}

function *loadRiskLevelData(timeframe) {
  yield put(riskLevels.fetchStarted());
  try {
    const data = yield call(fetch, '/api/friendships/reports/dropout', {time_frame: timeframe});
    yield put(riskLevels.fetchCompleted(data));
  } catch(err) {
    yield put(riskLevels.fetchFailed(err));
  }
}

function *watchFetchReneralMapData() {
  while(true) {
    const { mapType } = yield take(maps.REQUEST);
    yield fork(loadRenaralMapData, mapType);
  }
}

function *loadRenaralMapData(mapType) {
  yield put(maps.fetchStarted());
  try {
    const [branches, members] = yield [
      call(fetch, '/api/friendships/maps/branches'),
      call(fetch, '/api/friendships/maps/members')
    ];


    const payload = {
      branches: _get(branches, 'data.attributes.map_points'),
      members: _get(members, 'data.attributes.map_points')
    };

    yield put(maps.fetchCompleted(payload))
  } catch(err) {
    yield put(maps.fetchFailed())
  }
}

export default function *rootSaga() {
  yield fork(watchFetchSnapData);
  yield fork(watchFetchRiskLevelData);
  yield fork(watchFetchReneralMapData);
}
