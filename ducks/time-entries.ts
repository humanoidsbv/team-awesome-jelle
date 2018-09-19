import { createSelector } from 'reselect';

import { clientsItemSelector, ClientModel } from './clients';

export const DELETE_TIMESHEET_ENTRY = 'DELETE_TIMESHEET_ENTRY';
export const DELETE_TIMESHEET_ENTRY_SUCCESS = 'DELETE_TIMESHEET_ENTRY_SUCCESS';
export const POST_TIMESHEET_ENTRY = 'POST_TIMESHEET_ENTRY';
export const POST_TIMESHEET_ENTRY_SUCCESS = 'POST_TIMESHEET_ENTRY_SUCCESS';
export const REQUEST_TIMESHEET_ENTRIES = 'REQUEST_TIMESHEET_ENTRIES';
export const REQUEST_TIMESHEET_ENTRIES_SUCCESS = 'REQUEST_TIMESHEET_ENTRIES_SUCCESS';
export const CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER';

export interface TimesheetEntryModel {
  clientId: string;
  clientName?: string;
  activity: string;
  date: string;
  endTime: string;
  startTime: string;
  id: number;
}

interface TimeEntriesState {
  items: TimesheetEntryModel[];
  error: string;
  isLoading: boolean;
  isFormSaving: boolean;
  activeFilter: string;
  sortDirection: string;
}

export const initialState: TimeEntriesState = {
  items: [],
  error: '',
  isLoading: false,
  isFormSaving: false,
  activeFilter: '',
  sortDirection: 'descending'
};

const timesheetEntriesRoot = state => state.timesheetEntries;

const timesheetEntriesItemsSelector = createSelector(
  timesheetEntriesRoot,
  (timeEntries: TimeEntriesState) => timeEntries.items
);

export const timesheetActiveFilterSelector = createSelector(
  timesheetEntriesRoot,
  timeEntries => timeEntries.activeFilter
);

const timesheetSortDirectionSelector = createSelector(
  timesheetEntriesRoot,
  timeEntries => timeEntries.sortDirection
);

export const timesheetEntriesSelector = createSelector(
  [
    timesheetEntriesItemsSelector,
    timesheetActiveFilterSelector,
    timesheetSortDirectionSelector,
    clientsItemSelector
  ],
  (
    items: TimesheetEntryModel[],
    activeFilter,
    sortDirection,
    clients : ClientModel[]
  ) => (
    items
      .filter(item => !activeFilter || item.clientId === activeFilter)
      .map((item) => {
        const matchedClient = clients.find(client => (client.id === item.clientId));
        return ({
          ...item,
          clientName: matchedClient === undefined ? 'undefined' : matchedClient.clientName
        });
      })
      .sort((a, b) => {
        if (a.startTime < b.startTime) {
          return sortDirection === 'descending' ? 1 : -1;
        }
        if (a.startTime > b.startTime) {
          return sortDirection === 'descending' ? -1 : 1;
        }
        return 0;
      })
  )
);

export const isFormSavingSelector = state => state.timesheetEntries.isFormSaving;

export function timeEntriesReducer(state: TimeEntriesState = initialState, action) {
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
    case CHANGE_ACTIVE_FILTER:
      return { ...state, activeFilter: action.newActiveFilter };
    default:
      return state;
  }
}

export const deleteTimesheetEntry = (timesheetEntryId: TimesheetEntryModel["id"]) => ({
  type: DELETE_TIMESHEET_ENTRY,
  timesheetEntryId
});

export const deleteTimesheetEntrySuccess = (timesheetEntryId: TimesheetEntryModel["id"]) => ({
  type: DELETE_TIMESHEET_ENTRY_SUCCESS,
  timesheetEntryId
});

export const postTimesheetEntry = (timesheetEntry: TimesheetEntryModel) => ({
  type: POST_TIMESHEET_ENTRY,
  timesheetEntry
});

export const postTimesheetEntrySuccess = (timesheetEntry: TimesheetEntryModel) => ({
  type: POST_TIMESHEET_ENTRY_SUCCESS,
  timesheetEntry
});

export const requestTimeEntries = () => ({
  type: REQUEST_TIMESHEET_ENTRIES
});

export const requestTimeEntriesSuccess = (timesheetEntries : TimesheetEntryModel[]) => ({
  type: REQUEST_TIMESHEET_ENTRIES_SUCCESS,
  timesheetEntries
});

export const changeActiveFilter = (newActiveFilter : TimeEntriesState["activeFilter"]) => ({
  type: CHANGE_ACTIVE_FILTER,
  newActiveFilter
});
