import { combineReducers } from "redux";

import clsListReducer from "./clsListReducer";
import clsDetailReducer from "./clsDetailReducer";
import authReducer from "./authReducer";
import studentReducer from "./studentReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  clsListReducer: clsListReducer,
  clsDetailReducer: clsDetailReducer,
  studentReducer: studentReducer,
  authReducer: authReducer,
  errorsReducer: errorsReducer
});
