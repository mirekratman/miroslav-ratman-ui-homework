import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import Admin from "./Admin";
import BaseProviders from "@keboola/shared/Providers/BaseProviders";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //<React.StrictMode>
  <BaseProviders>
    <Admin />
  </BaseProviders>
  //</React.StrictMode>
);
