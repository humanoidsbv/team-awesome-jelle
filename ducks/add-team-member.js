export const initialState = {
  isFormSaving: false
};

export const isFormSavingSelector = state => state.addTeamMember.isFormSaving;

export function addTeamMemberReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
