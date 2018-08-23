const DELETE_TIMESHEET_ENTRY = 'DELETE_TIMESHEET_ENTRY';
const DELETE_TIMESHEET_ENTRY_SUCCES = 'DELETE_TIMESHEET_ENTRY_SUCCES';
const POST_TIMESHEET_ENTRY = 'POST_TIMESHEET_ENTRY';
const POST_TIMESHEET_ENTRY_SUCCES = 'POST_TIMESHEET_ENTRY_SUCCES';
const REQUEST_TIMESHEET_ENTRIES = 'REQUEST_TIMESHEET_ENTRIES';
const REQUEST_TIMESHEET_ENTRIES_SUCCES = 'REQUEST_TIMESHEET_ENTRIES_SUCCES';

export const initialState = {
  items: [],
  error: '',
  isLoading: false
};

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TIMESHEET_ENTRY:
      return { ...state };
    case DELETE_TIMESHEET_ENTRY_SUCCES:
      return {
        ...state,
        items: state.items.filter(timesheetEntry => (
          timesheetEntry.id !== action.timesheetEntryId
        ))
      };
    case POST_TIMESHEET_ENTRY:
      return { ...state };
    case POST_TIMESHEET_ENTRY_SUCCES:
      return { ...state, items: [...state.items, action.timesheetEntry] };
    case REQUEST_TIMESHEET_ENTRIES_SUCCES:
      return { ...state, items: action.timesheetEntries, isLoading: false };
    case REQUEST_TIMESHEET_ENTRIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export const deleteTimesheetEntry = () => ({
  type: DELETE_TIMESHEET_ENTRY
});

export const deleteTimesheetEntrySucces = timesheetEntryId => ({
  type: DELETE_TIMESHEET_ENTRY_SUCCES,
  timesheetEntryId
});

export const postTimesheetEntry = () => ({
  type: POST_TIMESHEET_ENTRY
});

export const postTimesheetEntrySucces = timesheetEntry => ({
  type: POST_TIMESHEET_ENTRY_SUCCES,
  timesheetEntry
});

export const requestTimeEntries = () => ({
  type: REQUEST_TIMESHEET_ENTRIES
});

export const requestTimeEntriesSucces = timesheetEntries => ({
  type: REQUEST_TIMESHEET_ENTRIES_SUCCES,
  timesheetEntries
});
