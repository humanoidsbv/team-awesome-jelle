import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';
import { teamMemberReducer } from './team-members';
import { addTeamMemberReducer } from './add-team-member';

const rootReducer = combineReducers({
  timesheetEntries: timeEntriesReducer,
  teamMembers: teamMemberReducer,
  addTeamMember: addTeamMemberReducer,
  header: headerReducer
});

export default rootReducer;
