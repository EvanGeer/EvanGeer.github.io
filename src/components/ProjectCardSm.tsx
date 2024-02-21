import { Card, Container, Row } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import { useState } from "react";
import { Github, Link45deg } from "react-bootstrap-icons";

export function ProjectCardSm({
  project,
  href,
}: {
  project: Project;
  href: string;
}) {
  const navigate = useNavigate();
  const [img, setImg] = useState(project.imgSrc);

  const showAnimation = () =>
    setImg(project?.mouseOverImgSrc ?? project.imgSrc);
  const showStatic = () => setImg(project.imgSrc);

  return (
    <Card
      className="rounded-3 border-0 overflow-hidden col p-0 m-2 fluid bg-dark align-content egCard"
      onMouseOver={showAnimation}
      onMouseOut={showStatic}
    >
      <Card.Header className="bg-light text-dark p-2 d-flex align-content-center justify-content-between">
        {project.title}
        <div className="d-flex align-content-center">
          {project.deployment ? (
            <a href={project.deployment}>
              <Link45deg size={20} />
            </a>
          ) : (
            <></>
          )}

          {project.openSource ? (
            <a href={project.repo}>
              <Github />
              {/* <i className="bi bi-github float-right ml-1"></i> */}
            </a>
          ) : (
            <></>
          )}
          <a href={href} className="align-self-center">
            {/* <small> */}
            {/* <i className="bi bi-arrows-fullscreen float-right ml-1"></i> */}
            <i className="bi bi-aspect-ratio float-right ml-1"></i>
            {/* </small> */}
          </a>
        </div>
      </Card.Header>
      <a href={href}>
        <Card.Img variant="bottom" src={img} />
      </a>
      <Card.Body
        className="pe-auto bg-light text-dark"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(href.replace("/#", ""))}
      >
        {project.summary}
      </Card.Body>
      <Card.Footer className="bg-light p-2 text-muted d-flex justify-content-between">
        <div>
          <OrgLogo org={project.org} />
        </div>
        <div className="align-self-center">
          <TechStack
            techStack={project.technologies}
            className="ml-1"
            size={20}
          />
        </div>
      </Card.Footer>
    </Card>
  );
}
