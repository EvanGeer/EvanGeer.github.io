import "./App.css";
import { HashRouter } from "react-router-dom";
import { Router } from "./router";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const TRACKING_ID = "G-42MCF57H32";
function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
