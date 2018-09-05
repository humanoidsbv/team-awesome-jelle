export const DELETE_TIMESHEET_ENTRY = 'DELETE_TIMESHEET_ENTRY';
export const DELETE_TIMESHEET_ENTRY_SUCCESS = 'DELETE_TIMESHEET_ENTRY_SUCCESS';
export const POST_TIMESHEET_ENTRY = 'POST_TIMESHEET_ENTRY';
export const POST_TIMESHEET_ENTRY_SUCCESS = 'POST_TIMESHEET_ENTRY_SUCCESS';
export const REQUEST_TIMESHEET_ENTRIES = 'REQUEST_TIMESHEET_ENTRIES';
export const REQUEST_TIMESHEET_ENTRIES_SUCCESS = 'REQUEST_TIMESHEET_ENTRIES_SUCCESS';

export const initialState = {
  items: [],
  error: '',
  isLoading: false,
  isFormSaving: false
};

export const timesheetEntriesSelector = state => state.timesheetEntries.items;
export const isFormSavingSelector = state => state.timesheetEntries.isFormSaving;

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TIMESHEET_ENTRY:
      return { ...state };
    case DELETE_TIMESHEET_ENTRY_SUCCESS:
      return {
        ...state,
        items: state.items.filter(timesheetEntry => (
          timesheetEntry.id !== action.timesheetEntryId
        ))
      };
    case POST_TIMESHEET_ENTRY:
      return { ...state, isFormSaving: true };
    case POST_TIMESHEET_ENTRY_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.timesheetEntry],
        isFormSaving: false
      };
    case REQUEST_TIMESHEET_ENTRIES_SUCCESS:
      return { ...state, items: action.timesheetEntries, isLoading: false };
    case REQUEST_TIMESHEET_ENTRIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export const deleteTimesheetEntry = timesheetEntryId => ({
  type: DELETE_TIMESHEET_ENTRY,
  timesheetEntryId
});

export const deleteTimesheetEntrySuccess = timesheetEntryId => ({
  type: DELETE_TIMESHEET_ENTRY_SUCCESS,
  timesheetEntryId
});

export const postTimesheetEntry = timesheetEntry => ({
  type: POST_TIMESHEET_ENTRY,
  timesheetEntry
});

export const postTimesheetEntrySuccess = timesheetEntry => ({
  type: POST_TIMESHEET_ENTRY_SUCCESS,
  timesheetEntry
});

export const requestTimeEntries = () => ({
  type: REQUEST_TIMESHEET_ENTRIES
});

export const requestTimeEntriesSuccess = timesheetEntries => ({
  type: REQUEST_TIMESHEET_ENTRIES_SUCCESS,
  timesheetEntries
});
