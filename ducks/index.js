import { combineReducers } from 'redux';

import { clientReducer } from './clients';
import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';
import { teamMemberReducer } from './team-members';

const rootReducer = combineReducers({
  clients: clientReducer,
  header: headerReducer,
  teamMembers: teamMemberReducer,
  timesheetEntries: timeEntriesReducer
});

export default rootReducer;
