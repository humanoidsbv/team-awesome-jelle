import { call, put, takeEvery } from 'redux-saga/effects';

import {
  REQUEST_TEAM_MEMBERS,
  requestTeamMembersSucces
} from '../ducks/team-members';

import {
  getTeamMembers
} from '../services/fetch-team-members/fetch-team-members';

function* onGetTeamMembers() {
  const teamMembers = yield call(getTeamMembers);
  yield put(requestTeamMembersSucces(teamMembers));
}

export default function* watchTeamMembers() {
  yield takeEvery(REQUEST_TEAM_MEMBERS, onGetTeamMembers);
}
