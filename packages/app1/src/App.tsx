import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useApp, globalTransport } from "fronts-react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/app2",
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
  const [count, setCount] = useState(0);
  useEffect(
    () =>
      globalTransport.listen("increase", () => {
        setCount(count + 1);
      }),
    [count]
  );
  return (
    <HashRouter>
      <div>
        <h1>App 1</h1>
        <p>{count}</p>
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
