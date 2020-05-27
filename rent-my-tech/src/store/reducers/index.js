import { combineReducers } from "redux";
import { getRequestItems as request } from "./getRequestItems";
import { getTechItems as tech } from "./getTechItems";

export default combineReducers({
  request,
  tech,
  // reducer3,
  // etc...
});
