import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';
import { teamMemberReducer } from './team-members';

const rootReducer = combineReducers({
  timesheetEntries: timeEntriesReducer,
  teamMembers: teamMemberReducer,
  header: headerReducer
});

export default rootReducer;
