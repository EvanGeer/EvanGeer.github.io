import { Card, Container, Row } from "react-bootstrap";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";

export function ProjectCardSm({ p }: { p: Project }) {
  return (
    <Card className="col p-0 m-2 fluid bg-dark align-content egCard">
      <Card.Header className="bg-light text-dark p-2">
          {p.title}
        {p.openSource ? (
          <a href={p.repo}>
            <i className="bi bi-github float-right ml-1"></i>
          </a>
        ) : (
          <></>
        )}
        {p.deployment ? (
          <a href={p.deployment}>
            <i className="bi bi-link-45deg float-right ml-1"></i>
          </a>
        ) : (
          <></>
        )}
      </Card.Header>
      <a href={`/#/projects/${p.id}`}>
        <Card.Img variant="bottom" src={p.imgSrc} />
      </a>
      <Card.Body>
        {p.summary} <a href={`/#/projects/${p.id}`}>...</a>{" "}
      </Card.Body>
      <Card.Footer className="bg-light p-2 text-muted d-flex justify-content-between">
        <div>
          <OrgLogo org={p.org} />
        </div>
        <div className="align-self-center">
          <TechStack
            techStack={p.technologies}
            className="ml-1"
            size={20}
          />
        </div>
      </Card.Footer>
    </Card>
  );
}
