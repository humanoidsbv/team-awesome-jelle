import { all } from 'redux-saga/effects';

import watchClients from './clients';
import watchTimesheetEntries from './time-entries';
import watchTeamMembers from './team-members';

export default function* rootSaga() {
  yield all([
    watchClients(),
    watchTeamMembers(),
    watchTimesheetEntries()
  ]);
}
