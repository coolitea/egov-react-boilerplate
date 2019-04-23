import React from "react";
import configureStore from "./components/store/index";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import reducer from "./components/reducer/index";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support
import { registerObserver } from "react-perf-devtool";
// const { registerObserver } = require("react-perf-devtool");

// assign the observer to the global scope, as the GC will delete it otherwise
window.observer = registerObserver();

const store = configureStore(reducer, {
  todos: [
    { id: 1, todo: "크롬 브라우저 설치", complete: false },
    { id: 2, todo: "Node.js 설치", complete: false },
    { id: 3, todo: "npm (yarn) 설치", complete: false }
  ]
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
