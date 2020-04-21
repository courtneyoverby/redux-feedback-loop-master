import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const initialState = {
  feeling: 0,
  understanding: 0,
  supported: 0,
  comments: "",
};

const feedbackReducer = (state = initialState, action) => {
    if (action.type === "SET_FEELING") {
      return { ...state, feeling: action.payload };
    } else if (action.type === "SET_UNDERSTANDING") {
      return { ...state, understanding: action.payload };
    } else if (action.type === "SET_SUPPORT") {
      return { ...state, support: action.payload };
    } else if (action.type === "SET_COMMENT") {
      return { ...state, comments: action.payload };
    }
    return state;
  };
;

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
