import { all } from 'redux-saga/effects';

import watchTimesheetEntries from './time-entries';
import watchTeamMembers from './team-members';

export default function* rootSaga() {
  yield all([
    watchTimesheetEntries(),
    watchTeamMembers()
  ]);
}
