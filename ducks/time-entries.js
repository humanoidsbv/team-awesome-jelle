const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
const REQUEST_TIME_ENTRIES_SUCCES = 'REQUEST_TIME_ENTRIES_SUCCES';
const POST_TIME_ENTRY = 'POST_TIME_ENTRY';
const POST_TIME_ENTRY_SUCCES = 'POST_TIME_ENTRY_SUCCES';

export const initialState = {
  items: [],
  error: '',
  isLoading: false
};

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES_SUCCES:
      return { ...state, items: action.timesheetEntries, isLoading: false };
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case POST_TIME_ENTRY:
      return { ...state };
    case POST_TIME_ENTRY_SUCCES:
      return { ...state, items: [...state.items, action.timesheetEntry] };
    default:
      return state;
  }
}

export const requestTimeEntries = () => ({
  type: REQUEST_TIME_ENTRIES
});

export const requestTimeEntriesSucces = timesheetEntries => ({
  type: REQUEST_TIME_ENTRIES_SUCCES,
  timesheetEntries
});

export const postTimesheetEntry = () => ({
  type: POST_TIME_ENTRY
});

export const postTimesheetEntrySucces = timesheetEntry => ({
  type: POST_TIME_ENTRY_SUCCES,
  timesheetEntry
});
