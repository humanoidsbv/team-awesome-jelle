import { call, put, takeEvery } from 'redux-saga/effects';

import {
  REQUEST_CLIENTS,
  requestClientsSuccess,
  POST_CLIENT,
  postClientSuccess
} from '../ducks/clients';

import {
  fetchGetClients,
  fetchPostClient
} from '../services/fetch-clients/fetch-clients';

function* getClients() {
  const clients = yield call(fetchGetClients);
  yield put(requestClientsSuccess(clients));
}

function* postClient(action) {
  const client = yield call(fetchPostClient, action.Client);
  yield put(postClientSuccess(client));
}

export default function* watchClients() {
  yield takeEvery(REQUEST_CLIENTS, getClients);
  yield takeEvery(POST_CLIENT, postClient);
}
