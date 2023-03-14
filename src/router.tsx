import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Bio } from "./pages/Bio";
import { ErrorNotFound } from "./pages/ErrorNotFound";
import { Projects } from "./pages/Projects";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetailCard } from "./components/ProjectDetailCard";

export function Router() {
  return (
    <Routes>
    {/* Error Element */}
    <Route path="*" element={<ErrorNotFound />} />
    
    {/* Main Routes */}
    <Route path="/" element={<Home/>}/>
    <Route path="/bio" element={<Bio/>} />
    {/* <Route path="/projects" element={<Projects />} /> */}
    <Route path="/projects/:id" element={<Home />} />
    <Route path="/:id" element={<Home />} />
  </Routes>
  )
};
