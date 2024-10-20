import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import Admin from "./app/App";
import Providers from "@keboola/shared/Providers/Providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Providers>
      <Admin />
    </Providers>
  </React.StrictMode>
);
