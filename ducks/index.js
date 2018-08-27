import { combineReducers } from 'redux';
import { timeEntriesReducer } from './time-entries';

export const rootReducer = combineReducers({
  timesheetEntries: timeEntriesReducer
});

export default rootReducer;
