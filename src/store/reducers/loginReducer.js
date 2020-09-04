import { LOGIN } from "../actions/loginAction";

const initialState = {
  authorized: JSON.parse(localStorage.getItem("authorized")) || false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SIGN_IN:
      localStorage.setItem("authorized", JSON.stringify(true));
      return { authorized: true };
    case LOGIN.SIGN_OUT:
      localStorage.setItem("authorized", JSON.stringify(false));
      return { authorized: false };
    default:
      return state;
  }
};
