import { createSelector } from 'reselect';

export const POST_TEAM_MEMBER = 'POST_TEAM_MEMBER';
export const POST_TEAM_MEMBER_SUCCESS = 'POST_TEAM_MEMBER_SUCCESS';
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const CHANGE_SORTING_DIRECTION = 'CHANGE_SORTING_DIRECTION';
export const CHANGE_SORT_BY_PROPERTY = 'CHANGE_SORT_BY_PROPERTY';

export const initialState = {
  items: [],
  isLoading: false,
  isFormSaving: false,
  sortBy: 'firstName',
  sortDirection: 'ascending'
};

const teamMembersRoot = state => state.teamMembers;

const teamMembersItemsSelector = createSelector(
  teamMembersRoot,
  teamMembers => teamMembers.items
);

export const teamMembersSortBySelector = createSelector(
  teamMembersRoot,
  teamMembers => teamMembers.sortBy
);

export const teamMembersSortDirectionSelector = createSelector(
  teamMembersRoot,
  teamMembers => teamMembers.sortDirection
);

export const teamMembersSelector = createSelector(
  [teamMembersItemsSelector, teamMembersSortBySelector, teamMembersSortDirectionSelector],
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
    case CHANGE_SORTING_DIRECTION:
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

export const changeSortingDirection = sortingDirection => ({
  type: CHANGE_SORTING_DIRECTION,
  sortingDirection
});

export const changeSortByProperty = sortByProperty => ({
  type: CHANGE_SORT_BY_PROPERTY,
  sortByProperty
});
