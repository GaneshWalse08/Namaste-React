import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title">Hello! I am Ganesh.</h1>
);

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h2>Welcome Sir.</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);