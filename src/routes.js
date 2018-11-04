import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";

const LazyDashboard = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ "./containers/Dashboard")
);

const LazyTopMenu = lazy(() =>
  import(/* webpackChunkName: "topbar" */ "./containers/TopMenu")
);

const LazyNewCommunity = lazy(() =>
  import(/* webpackChunkName: "newcommunity" */ "./containers/NewCommunity")
);

function SuspenseDashboard(props) {
  return (
    <Suspense fallback={<Spinner size="medium" />}>
      <LazyDashboard {...props} />
    </Suspense>
  );
}

function SuspenseTopBar(props) {
  return (
    <Suspense fallback={<Spinner size="medium" />}>
      <LazyTopMenu {...props} />
    </Suspense>
  );
}

function SuspenseNewCommunity(props) {
  return (
    <Suspense fallback={<Spinner size="medium" />}>
      <LazyNewCommunity {...props} />
    </Suspense>
  );
}

export const Routes = props => (
  <BrowserRouter>
    <Fragment>
      <Route
        path="/"
        render={routerProps => <SuspenseTopBar {...routerProps} {...props} />}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => (
            <SuspenseDashboard {...routerProps} {...props} />
          )}
        />
        <Route
          path="/newCommunity"
          exact
          render={routerProps => (
            <SuspenseNewCommunity {...routerProps} {...props} />
          )}
        />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
