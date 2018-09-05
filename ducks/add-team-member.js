export const POST_TEAM_MEMBER = 'POST_TEAM_MEMBER';
export const POST_TEAM_MEMBER_SUCCESS = 'POST_TEAM_MEMBER_SUCCESS';

export const initialState = {
  isFormSaving: false
};

export const isFormSavingSelector = state => state.addTeamMember.isFormSaving;

export function addTeamMemberReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TEAM_MEMBER:
      return { ...state, isFormSaving: true };
    case POST_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.teamMember],
        isFormSaving: false
      };
    default:
      return state;
  }
}

export const postTeamMember = teamMember => ({
  type: POST_TEAM_MEMBER,
  teamMember
});

export const postTeamMemberSuccess = teamMember => ({
  type: POST_TEAM_MEMBER_SUCCESS,
  teamMember
});
