export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';

export const initialState = {
  isMenuVisible: false
};

export const isMenuVisibleSelector = state => state.header.isMenuVisible;

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HEADER_MENU:
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible
      };
    default:
      return state;
  }
}

export const toggleMenu = () => ({
  type: TOGGLE_HEADER_MENU
});
