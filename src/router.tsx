import { Route, Routes } from "react-router-dom";
import { Bio } from "./pages/Bio";
import { ErrorNotFound } from "./pages/ErrorNotFound";
import { Projects } from "./components/Projects";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetailCard } from "./components/ProjectDetailCard";
import { Contact } from "./components/Contact";
import { Home } from "./pages/Home";
import { EG } from "./components/three/EG";

export function Router() {
  return (
    <Routes>
    {/* Error Element */}
    <Route path="*" element={<ErrorNotFound />} />
    
    {/* Main Routes */}
    <Route path="/" element={<EG/>}/>
    <Route path="/bio" element={<Bio/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<Projects />} />
    <Route path="/:id" element={<Home />} />
  </Routes>
  )
};
