import { LOADER } from "../actions/loaderAction";

export const showLoader = () => {
  return {
    type: LOADER.SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: LOADER.HIDE_LOADER,
  };
};
