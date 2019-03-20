import { connectRouter, routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export const history = createHashHistory({ hashType: "slash" });

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), logger))
);

export default { store };
