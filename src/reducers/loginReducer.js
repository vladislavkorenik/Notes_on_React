import { LOGIN } from "../consts/types";

const handlers = {
    [LOGIN.SIGN_IN]: () => ({ authorized: true }),
    [LOGIN.SIGN_OUT]: () => ({ authorized: false }),
    DEFAULT: state => state
};

export const loginReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
