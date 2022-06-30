import {call, put, takeEvery} from 'redux-saga/effects';
import {getCounterSuccess} from './slices';

function* workGetCounterFetch() {
  const Counter = yield call(() =>
    fetch('https://picsum.photos/v2/list?page=2&limit=50'),
  );
  const formattedCounter = yield Counter.json();
  const formattedCounterShortened = formattedCounter.slice(0, 10);
  yield put(getCounterSuccess(formattedCounterShortened));
}

function* sagas() {
  yield takeEvery('Counter/getCounterFetch', workGetCounterFetch);
}

export default sagas;
