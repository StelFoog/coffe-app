import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import store, { history } from "./store";
import "typeface-slabo-27px";

ReactDOM.render(
  <Root store={store.store} history={history} persistor={store.persistor} />,
  document.getElementById("root")
);
registerServiceWorker();
