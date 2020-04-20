import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const feedbackReducer = (state = {}, action) => {
  if (action.type === "FEELINGS_REDUX") {
    return { ...state, feeling: action.payload };
  } else if (action.type === "UNDERSTANDING_REDUX") {
    return { ...state, understanding: action.payload };
  } else if (action.type === "SUPPORT_REDUX") {
    return { ...state, support: action.payload };
  } else if (action.type === "COMMENT_REDUX") {
    return { ...state, comments: action.payload };
  } else if (action.type === "CLEAR_REDUX") {
    return action.type;
  }
  return state;
};

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
registerServiceWorker();
