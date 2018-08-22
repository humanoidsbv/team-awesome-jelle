const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
const REQUEST_TIME_ENTRIES_SUCCES = 'REQUEST_TIME_ENTRIES_SUCCES';
const POST_TIME_ENTRY = 'POST_TIME_ENTRY';
const POST_TIME_ENTRY_SUCCES = 'POST_TIME_ENTRY_SUCCES';

export const initialState = {
  items: [],
  error: '',
  isLoading: false,
  isSaving: false
};

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES_SUCCES:
      return { ...state, items: action.timesheetEntries, isLoading: false };
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case POST_TIME_ENTRY:
      return { ...state, isSaving: true };
    case POST_TIME_ENTRY_SUCCES:
      return { ...state, items: action.timesheetEntry, isSaving: true };
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

export const postTimeEntry = () => ({
  type: POST_TIME_ENTRY
});

export const postTimeEntrySucces = timesheetEntry => ({
  type: POST_TIME_ENTRY_SUCCES,
  timesheetEntry
});
