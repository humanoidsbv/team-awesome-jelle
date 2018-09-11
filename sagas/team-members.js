import { call, put, takeEvery } from 'redux-saga/effects';

import {
  REQUEST_TEAM_MEMBERS,
  requestTeamMembersSuccess,
  POST_TEAM_MEMBER,
  postTeamMemberSuccess
} from '../ducks/team-members';

import {
  fetchGetTeamMembers,
  fetchPostTeamMember
} from '../services/fetch-team-members/fetch-team-members';

function* getTeamMembers() {
  const teamMembers = yield call(fetchGetTeamMembers);
  yield put(requestTeamMembersSuccess(teamMembers));
}

function* postTeamMember(action) {
  const teamMember = yield call(fetchPostTeamMember, action.teamMember);
  yield put(postTeamMemberSuccess(teamMember));
}

export default function* watchTeamMembers() {
  yield takeEvery(REQUEST_TEAM_MEMBERS, getTeamMembers);
  yield takeEvery(POST_TEAM_MEMBER, postTeamMember);
}
