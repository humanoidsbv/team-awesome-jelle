export const POST_TEAM_MEMBER = 'POST_TEAM_MEMBER';
export const POST_TEAM_MEMBER_SUCCESS = 'POST_TEAM_MEMBER_SUCCESS';
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION';
export const CHANGE_SORT_BY_PROPERTY = 'CHANGE_SORT_BY_PROPERTY';

export const initialState = {
  items: [],
  isLoading: false,
  isFormSaving: false,
  sortBy: '',
  sortDirection: 'ascending'
};

export const teamMembersSelector = state => state.teamMembers.items;
export const isLoadingSelector = state => state.teamMembers.isLoading;
export const isFormSavingSelector = state => state.teamMembers.isFormSaving;


export function teamMemberReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TEAM_MEMBER:
      return { ...state, isFormSaving: true };
    case POST_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.teamMember],
        isFormSaving: false
      };
    case REQUEST_TEAM_MEMBERS:
      return { ...state, isLoading: true };
    case REQUEST_TEAM_MEMBERS_SUCCESS:
      return { ...state, items: action.teamMembers, isLoading: false };
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

export const requestTeamMembers = () => ({
  type: REQUEST_TEAM_MEMBERS
});

export const requestTeamMembersSuccess = teamMembers => ({
  type: REQUEST_TEAM_MEMBERS_SUCCESS,
  teamMembers
});

export const changeSortDirection = newSortDirection => ({
  type: CHANGE_SORT_DIRECTION,
  newSortDirection
});

export const changeSortByProperty = newSortByProperty => ({
  type: CHANGE_SORT_BY_PROPERTY,
  newSortByProperty
});
