import React from "react";
import ReactDOM from "react-dom/client";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { Context } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Context />
    </PrimeReactProvider>
  </React.StrictMode>
);
