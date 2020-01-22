import { ALERT } from "../consts/types";

const handlers = {
  [ALERT.SHOW]: (state, { payload }) => ({ ...payload, visiable: true }),
  [ALERT.HIDE]: state => ({...state, visiable: false }),
  DEFAULT: state => state
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
