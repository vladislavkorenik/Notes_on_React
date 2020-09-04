import { combineReducers } from "redux";

import { alertReducer } from "./reducers/alertReducer";
import { loginReducer } from "./reducers/loginReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { switchReducer } from "./reducers/switchReducer";
import { firebaseReducer } from "./reducers/firebaseReducer";

export default combineReducers({
  switchReducer,
  alertReducer,
  loginReducer,
  loaderReducer,
  firebaseReducer,
});
