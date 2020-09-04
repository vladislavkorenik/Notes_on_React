import { SWITCH_THEME } from "../actions/switchAction";

const initialState = {
  themeSwitcher: JSON.parse(localStorage.getItem("theme_state")) || false,
};

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      localStorage.setItem("theme_state", JSON.stringify(!state.themeSwitcher));
      return {
        themeSwitcher: !state.themeSwitcher,
      };
    default:
      return state;
  }
};
