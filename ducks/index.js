import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';
import { headerReducer } from './header';

const rootReducer = combineReducers({
  timesheetEntries: timeEntriesReducer,
  header: headerReducer
});

export default rootReducer;
