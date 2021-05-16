import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useApp } from "fronts-react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: () => {
      const App2 = useApp({
        name: "app2",
        loader: () => import("app2/src/bootstrap"),
      });
      return <App2 />;
    },
    exact: true,
  },
];

const App = () => {
  return (
    <HashRouter>
      <div>
        <h1>App 1</h1>
        <Navigation />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
