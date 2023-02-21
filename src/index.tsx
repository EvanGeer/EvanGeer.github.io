import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./router";
import MainNav from "./components/MainNav";
import { Footer } from "./components/Footer";
import { Bio } from "./routes/Bio";
import { ErrorNotFound } from "./routes/ErrorNotFound";
import { Container } from "react-bootstrap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNav />

      <Container className="pb-5 mb-3 h-100">
        <Routes>
          {/* Error Element */}
          <Route path="*" element={<ErrorNotFound />} />
          
          {/* Main Routes */}
          <Route path="/" element={<Home/>}/>
          <Route path="/bio" element={<Bio/>} />
          <Route path="/projects" element={null} />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
