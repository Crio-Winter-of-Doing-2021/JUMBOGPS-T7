import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { MapProvider } from "./MapContext";
ReactDOM.render(
  <MapProvider>
    <App />
  </MapProvider>,
  document.getElementById("root")
);
