import "./App.css";
import { HashRouter } from "react-router-dom";
import { Router } from "./router";
import { Key } from "react-bootstrap-icons";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { useMemo } from "react";

function App() {
  const map = useMemo<KeyboardControlsEntry[]>(
    () => [
      { name: "next", keys: ["ArrowLeft", "KeyA"] },
      { name: "previous", keys: ["ArrowRight", "KeyD", "Space", "Tab"] },
      { name: "close", keys: ["Escape"] },
    ],
    []
  );

  return (
    // <KeyboardControls map={map}>
      <HashRouter>
        <Router />
      </HashRouter>
    // </KeyboardControls>,D
  );
}

export default App;
