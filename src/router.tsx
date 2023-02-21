import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { Bio } from "./routes/Bio";
import { ErrorNotFound } from "./routes/ErrorNotFound";
import { Projects } from "./routes/Projects";

export function Router() {
  return (
    <Routes>
    {/* Error Element */}
    <Route path="*" element={<ErrorNotFound />} />
    
    {/* Main Routes */}
    <Route path="/" element={<Home/>}/>
    <Route path="/bio" element={<Bio/>} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  )
};
