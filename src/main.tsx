import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeServer } from "./mocks/server";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

if (process.env.NODE_ENV === "development") {
  console.log("Inicializando MirageJS...");
  makeServer();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
