import { combineReducers } from "redux";
import main from "./main";
import configuration from "./configuration";
import schedule from "./schedule";
import user from "./user";

export default combineReducers({
  main,
  configuration,
  schedule,
  user,
});
