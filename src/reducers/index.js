import counterReducer from "./counter.js";
import loggedInReducer from "./isLogged.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedInReducer
});

export default rootReducer;
