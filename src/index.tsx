import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

import App from "./App";

import reportWebVitals from "./core/utils/reportWebVitals";

import "./styles/index.css";
import "./core/utils/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
