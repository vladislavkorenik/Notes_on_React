import { LOADER } from "../actions/loaderAction";

const initialState = {
  loading: false,
};
export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER.SHOW_LOADER:
      return {
        loading: true,
      };
    case LOADER.HIDE_LOADER:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
