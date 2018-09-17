import { createSelector } from 'reselect';

export const CHANGE_CLIENT_SORTING_DIRECTION = 'CHANGE_CLIENTS_SORTING_DIRECTION';
export const CHANGE_SORT_BY_PROPERTY = 'CHANGE_SORT_BY_PROPERTY';
export const REQUEST_CLIENTS = 'GET_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';
export const POST_CLIENT = 'POST_CLIENT';
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';

export const initialState = {
  items: [],
  isLoading: false,
  isSaving: false,
  sortBy: 'clientName',
  sortDirection: 'ascending'
};

const clientsRoot = state => state.clients;

export const clientsItemSelector = createSelector(
  clientsRoot,
  clients => clients.items
);

export const clientsSortBySelector = createSelector(
  clientsRoot,
  clients => clients.sortBy
);

export const clientsSortDirectionSelector = createSelector(
  clientsRoot,
  clients => clients.sortDirection
);

export const clientNameAndIdSelector = createSelector(
  clientsItemSelector, items => (
    items.reduce((acc, item) => ([
      ...acc,
      {
        name: item.clientName,
        id: item.id
      }
    ]
    ), []))
);

export const clientsSelector = createSelector(
  [clientsItemSelector, clientsSortBySelector, clientsSortDirectionSelector],
  (items, sortBy, sortDirection) => (
    [...items].sort((a, b) => {
      const aUpperCase = a[sortBy].toUpperCase();
      const bUpperCase = b[sortBy].toUpperCase();
      if (aUpperCase < bUpperCase) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (aUpperCase > bUpperCase) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    })
  )
);


export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CLIENTS:
      return {
        ...state,
        isLoading: true
      };
    case REQUEST_CLIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.clients
      };
    case POST_CLIENT:
      return { ...state, isFormSaving: true };
    case POST_CLIENT_SUCCESS:
      return {
        ...state,
        isFormSaving: false,
        items: [...state.items, action.client]
      };
    case CHANGE_CLIENT_SORTING_DIRECTION:
      return {
        ...state,
        sortDirection: action.sortingDirection
      };
    case CHANGE_SORT_BY_PROPERTY:
      return {
        ...state,
        sortBy: action.sortByProperty
      };
    default:
      return state;
  }
}

export const requestClients = () => ({
  type: REQUEST_CLIENTS
});

export const requestClientsSuccess = clients => ({
  type: REQUEST_CLIENTS_SUCCESS,
  clients
});

export const postClient = client => ({
  type: POST_CLIENT,
  client
});

export const postClientSuccess = client => ({
  type: POST_CLIENT_SUCCESS,
  client
});

export const changeSortingDirection = sortingDirection => ({
  type: CHANGE_CLIENT_SORTING_DIRECTION,
  sortingDirection
});

export const changeSortByProperty = sortByProperty => ({
  type: CHANGE_SORT_BY_PROPERTY,
  sortByProperty
});
