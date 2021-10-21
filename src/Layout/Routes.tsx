import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Timeline } from "../Pages/Timeline";

export enum NavRoutes {
  Home = "/",
  Timeline = "/timeline",
}

export const Router = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path={NavRoutes.Home} component={Home} />
      <Route exact path={NavRoutes.Timeline} component={Timeline} />
    </Switch>
  );
};
