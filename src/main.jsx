import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function RoutesWrapper() {
  const element = useRoutes(routes);
  return element;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  </React.StrictMode>
);