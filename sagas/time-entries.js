import { put, takeEvery } from 'redux-saga/effects';

import {
  DELETE_TIMESHEET_ENTRY_SUCCES,
  DELETE_TIMESHEET_ENTRY,
  POST_TIMESHEET_ENTRY_SUCCES,
  POST_TIMESHEET_ENTRY,
  REQUEST_TIMESHEET_ENTRIES_SUCCES,
  REQUEST_TIMESHEET_ENTRIES
} from '../ducks/time-entries';

import {
  deleteTimesheetEntry,
  fetchTimesheetEntries,
  postTimesheetEntry
} from '../services/fetch-timesheet-entries/fetch-timesheet-entries';

function* onDeleteTimesheetEntry(action) {
  yield deleteTimesheetEntry(action.timesheetEntryId);
  yield put({ type: DELETE_TIMESHEET_ENTRY_SUCCES, timesheetEntryId: action.timesheetEntryId });
}

function* onGetTimesheetEntries() {
  const timesheetEntries = yield fetchTimesheetEntries();
  yield put({ type: REQUEST_TIMESHEET_ENTRIES_SUCCES, timesheetEntries });
}

function* onPostTimesheetEntry(action) {
  const timesheetEntry = yield postTimesheetEntry(action.timesheetEntry);
  yield put({ type: POST_TIMESHEET_ENTRY_SUCCES, timesheetEntry });
}

export default function* watchTimesheetEntries() {
  yield takeEvery(REQUEST_TIMESHEET_ENTRIES, onGetTimesheetEntries);
  yield takeEvery(POST_TIMESHEET_ENTRY, onPostTimesheetEntry);
  yield takeEvery(DELETE_TIMESHEET_ENTRY, onDeleteTimesheetEntry);
}
