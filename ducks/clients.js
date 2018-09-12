import { createSelector } from 'reselect';

export const REQUEST_CLIENTS = 'GET_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';
export const POST_CLIENT = 'POST_CLIENT';
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';

export const initialState = {
  items: [],
  isLoading: false,
  isSaving: false
};

const clientsRoot = state => state.clients;

export const clientsItemSelector = createSelector(
  clientsRoot,
  clients => clients.items
);


export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CLIENTS:
      return { ...state };
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
