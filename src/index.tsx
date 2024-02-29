import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

import { HashRouter } from "react-router-dom";
import { Router } from "./router";
import MainNav from "./components/MainNav";
import { Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.css";
import "./styles/egCard.css";
import { NavLinks } from "./components/NavLinks";
import { EG } from "./components/three/EG";

// import './styles/theme.scss'

const getStuff = () => {
  const elem = document.getElementById("root") as HTMLElement;
  console.log(elem);

  return elem;
};

const root = ReactDOM.createRoot(getStuff());
root.render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
    {/* <HashRouter>
      <div className="overflow-hidden" style={{ height: "100vh" }}>
        <div
          className="d-flex flex-row bg-light bg-opacity-75 justify-content-between align-items-center"
          style={{ height: 65, width: "100%" }}
        >
          <MainNav />
        </div>
        <div className="d-block d-sm-none">
          <NavLinks className={"bg-light bg-opacity-50 justify-content-center"}/>
        </div>
        <div
          className="d-flex flex-row overflow-auto"
          style={{ height: "calc(100% - 65px)" }}
        >
          <Container className="pb-5">
            <Router />
          </Container>
        </div>
      </div>
    </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
