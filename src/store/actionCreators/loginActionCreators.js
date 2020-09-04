import { LOGIN } from "../actions/loginAction";

export const signIn = () => {
  return {
    type: LOGIN.SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: LOGIN.SIGN_OUT,
  };
};
