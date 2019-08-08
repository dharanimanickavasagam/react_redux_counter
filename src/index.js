import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

/* STORE - a globalized state lib
all the states of the application is here

ACTION - describes what to do
signals the store, and the props of the action says how the state shld change

REDUCER - how the actions tranform one state to another
When action is called, Reducer is going to check what action u did, and modify the states in the Store

DISPATCH - where the actions are executed  */

/* const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment()); */

const globalStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
