import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import App from "./App"; // should be destroyed
import Homepage from "./features/homepage/Homepage";

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path={"/"}
          exact
          render={props => {
            return <App {...props} />;
          }}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Root;
