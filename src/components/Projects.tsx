import fs from "fs";
import { useEffect, useState } from "react";
import {
  Dropdown,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useLocation, useParams } from "react-router-dom";
import { ProjectCardSm } from "./ProjectCardSm";
import { ProjectDetailCard } from "./ProjectDetailCard";
import Project from "../types/Project";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const { id } = useParams();
  const [projects, setProjects] = useState<Project[]>(null);
  const [projectsLoaded, setProjectsLoaded] = useState(new Date());
  const getProjectFromId = () => {
    if (!id || !(projects?.length ?? 0 > 0)) return null;
    const newProject = projects.find((x) => x.key === id);
    return newProject;
  };  
  
  const [project, setProject] = useState<Project | null>(getProjectFromId());
  const [showDetail, setShowDetail] = useState(id !== null && project !== null);
  const handleClose = () => {
    navigate(-1);
  }

  useEffect(() => {
    const json = fetch("../projects/projectData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setProjects(json?.projects);
        setProjectsLoaded(new Date());
      })
  }, []);
  
  useEffect(() => {
    // get markdown files
    if(!(projects?.length > 0)) return;

    let newProjects = [...projects];

    projects.forEach(async (p,i) => {
      const markdownFilePath = `../projects/${p.key}.md`;

      await fetch(markdownFilePath)
      .then((response) => response.text())
      .then((text) => {
        if(text.includes("<!DOCTYPE html>")) return;
        const newProj = {...p, markdown: text};
        newProjects[i] = newProj;
      })
    })
    
    setProjects(newProjects);
  }, [projectsLoaded])

  useEffect(() => {
    const newProject = getProjectFromId();
    setProject(newProject);
    setShowDetail(newProject !== null);
  }, [projects, id]);

  const getCards = () => {
    if (!projects) return <></>;
    return (
      projects
        .filter((p) => !p.hide)
        .map((p) => (
          <ProjectCardSm
            project={p}
            href={`/#/projects/${p.key}`}
            key={p.key}
            // href={`/#${location}${p.key}`}
          />
        ))
    );
  };

  return (
    <div className="container">
      <div className="row row-cols-3 bg-secondary p-0 no-gutter border border-dark rounded">
        <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
          <Modal show={showDetail} onHide={handleClose} size="lg">
            <ProjectDetailCard project={project} backRef={handleClose}/>
          </Modal>

          <h3 className="display-5 text-dark" onClick={() => setProject(null)}>
            Project Samples:
          </h3>
          {/* <TechStackSlicer  onSelectionChanged={() => ""}></TechStackSlicer> */}
          <hr className="my-2" />
          <div className="row row-cols-3 p-0 no-gutter">{getCards()}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
