import { put, takeEvery } from 'redux-saga/effects';

import {
  DELETE_TIMESHEET_ENTRY,
  POST_TIMESHEET_ENTRY,
  REQUEST_TIMESHEET_ENTRIES,
  deleteTimesheetEntrySucces,
  postTimesheetEntrySucces,
  requestTimeEntriesSucces
} from '../ducks/time-entries';

import {
  deleteTimesheetEntry,
  fetchTimesheetEntries,
  postTimesheetEntry
} from '../services/fetch-timesheet-entries/fetch-timesheet-entries';

function* onDeleteTimesheetEntry(action) {
  yield deleteTimesheetEntry(action.timesheetEntryId);
  yield put(deleteTimesheetEntrySucces(action.timesheetEntryId));
}

function* onGetTimesheetEntries() {
  const timesheetEntries = yield fetchTimesheetEntries();
  yield put(requestTimeEntriesSucces(timesheetEntries));
}

function* onPostTimesheetEntry(action) {
  const timesheetEntry = yield postTimesheetEntry(action.timesheetEntry);
  yield put(postTimesheetEntrySucces(timesheetEntry));
}

export default function* watchTimesheetEntries() {
  yield takeEvery(REQUEST_TIMESHEET_ENTRIES, onGetTimesheetEntries);
  yield takeEvery(POST_TIMESHEET_ENTRY, onPostTimesheetEntry);
  yield takeEvery(DELETE_TIMESHEET_ENTRY, onDeleteTimesheetEntry);
}
