import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fabric-dark.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "./styles/egCard.css";
// import "./styles/theme.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
