import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import TopMenu from "./containers/TopMenu";
import NewCommunity from "./containers/NewCommunity";

export const Routes = props => (
  <BrowserRouter>
    <Fragment>
      <Route
        path="/"
        render={routerProps => <TopMenu {...routerProps} {...props} />}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => <Dashboard {...routerProps} {...props} />}
        />
        <Route
          path="/newCommunity"
          exact
          render={routerProps => <NewCommunity {...routerProps} {...props} />}
        />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
