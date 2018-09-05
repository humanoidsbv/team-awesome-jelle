export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const TOGGLE_FORM = 'TOGGLE_FORM';

export const initialState = {
  items: [],
  isLoading: false,
  isAdding: false
};

export const teamMembersSelector = state => state.teamMembers.items;
export const isLoadingSelector = state => state.teamMembers.isLoading;
export const isAddingSelector = state => state.teamMembers.isAdding;

export function teamMemberReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TEAM_MEMBERS:
      return { ...state, isLoading: true };
    case REQUEST_TEAM_MEMBERS_SUCCESS:
      return { ...state, items: action.teamMembers, isLoading: false };
    case TOGGLE_FORM:
      return { ...state, isAdding: !state.isAdding };
    default:
      return state;
  }
}

export const requestTeamMembers = () => ({
  type: REQUEST_TEAM_MEMBERS
});

export const requestTeamMembersSuccess = teamMembers => ({
  type: REQUEST_TEAM_MEMBERS_SUCCESS,
  teamMembers
});

export const toggleForm = () => ({
  type: TOGGLE_FORM
});
