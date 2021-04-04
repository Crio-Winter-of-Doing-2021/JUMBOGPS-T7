import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { MapProvider } from "./MapContext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <MapProvider>
      <App />
    </MapProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
