import { all } from 'redux-saga/effects';

import watchTimesheetEntries from './time-entries';

export default function* rootSaga() {
  yield all([
    watchTimesheetEntries()
  ]);
}
