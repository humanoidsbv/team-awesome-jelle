const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
const REQUEST_TIME_ENTRIES_SUCCES = 'REQUEST_TIME_ENTRIES_SUCCES';
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
