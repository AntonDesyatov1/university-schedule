import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app/app";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/root";
import ReduxThunk  from "redux-thunk";
const middlewares = [ReduxThunk];
const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
