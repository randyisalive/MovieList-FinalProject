import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
