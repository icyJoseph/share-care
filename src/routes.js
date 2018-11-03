import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TopMenu from "./components/TopMenu";
import NewCommunity from "./components/NewCommunity";
import Detail from "./components/Detail";

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
          path="/community/:id"
          exact
          render={routerProps => <Detail {...routerProps} {...props} />}
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
