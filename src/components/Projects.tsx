import { useEffect, useState } from "react";
import { Col, Collapse, Modal } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { ProjectCardSm } from "./ProjectCardSm";
import { ProjectDetailCard } from "./ProjectDetailCard";
import Project from "../types/Project";
import { useNavigate } from "react-router-dom";
import { TechStack } from "./TechStack";
import { TechTypes } from "../types/TechTypes";
import Slicer from "./Slicer";
import TechLogos from "../types/TechLogos";

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
  };

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
      });
  }, []);

  useEffect(() => {
    // get markdown files
    if (!(projects?.length > 0)) return;

    let newProjects = [...projects];

    projects.forEach(async (p, i) => {
      const markdownFilePath = `../projects/${p.key}.md`;

      await fetch(markdownFilePath)
        .then((response) => response.text())
        .then((text) => {
          if (text.includes("<!DOCTYPE html>")) return;
          const newProj = { ...p, markdown: text };
          newProjects[i] = newProj;
        });
    });

    setProjects(newProjects);
  }, [projectsLoaded]);

  useEffect(() => {
    const newProject = getProjectFromId();
    setProject(newProject);
    setShowDetail(newProject !== null);
  }, [projects, id]);

  const [selectedTech, setSelectedTech] = useState(new Map<string, boolean>());
  const [filter, setFilter] = useState(false);

  const getCards = () => {
    if (!projects) return <></>;
    return projects
      .filter((p) => {
        const show =
          !p.hide && (
          // !filter ||
            Array.from(selectedTech.keys()).length === 0 ||
            p.technologies.some((x) => selectedTech.get(x)));
        return show;
      })
      .map((p) => (
        <ProjectCardSm
          project={p}
          href={`/#/projects/${p.key}`}
          key={p.key}
          // href={`/#${location}${p.key}`}
        />
      ));
  };

  function handleSlicer(newSelectedTech: Map<string, boolean>) {
    setSelectedTech(newSelectedTech);
  }

  return (
    <>
      <Modal show={showDetail} onHide={handleClose} size="lg">
        <ProjectDetailCard project={project} backRef={handleClose} />
      </Modal>
      <div className="container">
        <div className="row row-cols-3 bg-secondary p-0 no-gutter border border-dark rounded">
          <div className="jumbotron container m-0 ml-0 pt-2 pb-3 mb-0 ">
            <div className="d-flex flex-wrap justify-items-center justify-content-between m-0 p-0">
              <h3
                className="display-5 text-dark mb-0"
                onClick={() => setProject(null)}
              >
                Project Samples:
              </h3>
              <div className={`m-0 p-0 d-flex flex-wrap float-right border align-items-center ${filter ? "border" : ""} rounded`}>
                {/* <Collapse in={filter}> */}
                  <div id="example-fade-text">
                    <div
                      className="d-flex flex-row flex-wrap p-0 m-0"
                      id="example-fade-text"
                    >
                      <Slicer
                        onSelectionChanged={handleSlicer}
                        slicerItems={TechLogos}
                      />
                      {/* <h3>|</h3> */}
                    </div>
                  </div>
                {/* </Collapse>
                <div
                  className="link-secondary h2 m-0 p-0 ms-1 me-1"
                  onClick={() => {
                    setFilter(!filter);
                  }}
                  aria-controls="example-fade-text"
                  aria-expanded={filter}
                >
                  {filter ? (
                    <i className="bi bi-x-square" />
                  ) : (
                    <i className="bi bi-funnel" />
                    )}
                    </div>{" "}
                  */}
              </div> 
            </div>
            <hr className="my-2" />
            <div className="row row-cols-3 p-0 no-gutter">{getCards()}</div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
