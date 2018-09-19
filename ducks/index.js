import { combineReducers } from 'redux';

import { clientReducer } from './clients.ts';
import { timeEntriesReducer } from './time-entries.ts';
import { headerReducer } from './header';
import { teamMemberReducer } from './team-members';

const rootReducer = combineReducers({
  clients: clientReducer,
  header: headerReducer,
  teamMembers: teamMemberReducer,
  timesheetEntries: timeEntriesReducer
});

export default rootReducer;
