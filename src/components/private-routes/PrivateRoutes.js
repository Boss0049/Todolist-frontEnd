import React from "react";
import configRoutes from "../../config/routes";
import { Switch, Redirect, Route } from "react-router-dom";

function PrivateRoutes(props) {
  const role = props.role || "guest";

  const { allowedRoutes, redirectRoute } = configRoutes[role];

  return (
    <Switch>
      {allowedRoutes.map((route) => (
        <Route exact path={route.url} key={route.url}>
          <route.component setRole={props.setRole} />
        </Route>
      ))}
      <Redirect to={redirectRoute} />
    </Switch>
  );
}

export default PrivateRoutes;
