import { Card, Container, Row } from "react-bootstrap";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";

export function ProjectCardSm({
  project,
  href,
}: {
  project: Project;
  href: string;
}) {
  return (
    <Card className="col p-0 m-2 fluid bg-dark align-content egCard">
      <Card.Header className="bg-light text-dark p-2 d-flex align-content-center justify-content-between">
        {project.title}
        <div className="d-flex align-content-center">
          {project.deployment ? (
            <a href={project.deployment}>
              <i className="bi bi-link-45deg float-right ml-1"></i>
            </a>
          ) : (
            <></>
          )}

          {project.openSource ? (
            <a href={project.repo}>
              <i className="bi bi-github float-right ml-1"></i>
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
        <Card.Img variant="bottom" src={project.imgSrc} />
      </a>
      <Card.Body>
        {project.summary} <a href={`/#/projects/${project.id}`}>...</a>{" "}
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
