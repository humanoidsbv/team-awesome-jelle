import { call, put, takeEvery } from 'redux-saga/effects';

import {
  REQUEST_TEAM_MEMBERS,
  requestTeamMembersSuccess
} from '../ducks/team-members';

import {
  fetchTeamMembers
} from '../services/fetch-team-members/fetch-team-members';

function* getTeamMembers() {
  const teamMembers = yield call(fetchTeamMembers);
  yield put(requestTeamMembersSuccess(teamMembers));
}

export default function* watchTeamMembers() {
  yield takeEvery(REQUEST_TEAM_MEMBERS, getTeamMembers);
}
