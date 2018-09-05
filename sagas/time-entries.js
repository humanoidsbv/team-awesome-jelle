import { call, put, takeEvery } from 'redux-saga/effects';

import {
  DELETE_TIMESHEET_ENTRY,
  POST_TIMESHEET_ENTRY,
  REQUEST_TIMESHEET_ENTRIES,
  deleteTimesheetEntrySuccess,
  postTimesheetEntrySuccess,
  requestTimeEntriesSuccess
} from '../ducks/time-entries';

import {
  fetchDeleteTimesheetEntry,
  fetchGetTimesheetEntries,
  fetchPostTimesheetEntry
} from '../services/fetch-timesheet-entries/fetch-timesheet-entries';

function* deleteTimesheetEntry(action) {
  yield call(fetchDeleteTimesheetEntry, action.timesheetEntryId);
  yield put(deleteTimesheetEntrySuccess(action.timesheetEntryId));
}

function* getTimesheetEntries() {
  const timesheetEntries = yield call(fetchGetTimesheetEntries);
  yield put(requestTimeEntriesSuccess(timesheetEntries));
}

function* postTimesheetEntry(action) {
  const timesheetEntry = yield call(fetchPostTimesheetEntry, action.timesheetEntry);
  yield put(postTimesheetEntrySuccess(timesheetEntry));
}

export default function* watchTimesheetEntries() {
  yield takeEvery(REQUEST_TIMESHEET_ENTRIES, getTimesheetEntries);
  yield takeEvery(POST_TIMESHEET_ENTRY, postTimesheetEntry);
  yield takeEvery(DELETE_TIMESHEET_ENTRY, deleteTimesheetEntry);
}
