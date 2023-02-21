import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import MainNav from "./components/MainNav";
import { Container } from "react-bootstrap";


const getStuff = () => {
  const elem = document.getElementById("root") as HTMLElement;
  console.log(elem);

  return elem;
}

const root = ReactDOM.createRoot(getStuff());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNav />

      <Container className="pb-5 mb-3 h-100">
        <Router />
      </Container>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
