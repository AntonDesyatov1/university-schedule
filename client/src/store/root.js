import { combineReducers } from "redux";
import main from "./main";
import configuration from "./configuration";
import schedule from "./schedule";

export default combineReducers({
  main,
  configuration,
  schedule
});
