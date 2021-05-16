import React from "react";

const Button = React.lazy(() => import("app2/src/Button"));

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => (
  <>
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by App 1</em>
      </p>
    </div>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Button />
    </React.Suspense>
  </>
);

export default HomePage;
