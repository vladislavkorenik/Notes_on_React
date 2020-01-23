import { SWITCH_THEME } from "../consts/types";

const handlers = {
  [SWITCH_THEME]: state => ({
    ...state,
    themeSwitcher: !state.themeSwitcher
  }),
  DEFAULT: state => state
};

export const switchReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
