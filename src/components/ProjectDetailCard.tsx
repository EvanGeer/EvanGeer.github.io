import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export function ProjectDetailCard({ project }: { project: Project }) {
  const [p, setP] = useState(project);

  return (
    <Card className="bg-dark align-content">
      <Card.Header className="bg-light text-dark p-2">
        {/* <Container> */}
          <div>
            {/* <a href={p.deployment}> */}
            {p.title}
            {/* </a> */}
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
          </div>
          {/* <div className="d-flex justify-content-left fluid">
            <Col className="align-self-left">
              <OrgLogo org={p.org} />
            </Col>
            <Col className="ml-auto"> */}
              <Image fluid src={p.imgSrc} thumbnail />
            {/* </Col>
          </div> */}
          <div className="d-flex justify-content-between pt-2">
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
          </div>
        {/* </Container> */}
      </Card.Header>
      <ConditionalAnchor
        href={p.deployment}
        predicate={() =>
          typeof p.deployment === "string" && p.deployment !== ""
        }
      >
        {/* <Card.Img variant="" src={p.imgSrc} /> */}
      </ConditionalAnchor>
      <Card.Body>
        <ReactMarkdown>{p.markdown}</ReactMarkdown>
      </Card.Body>
      <Card.Footer className="bg-light p-2 text-muted d-flex justify-content-between">
        <div>
          <OrgLogo org={p.org} />
        </div>
        <div className="align-self-center">
          <TechStack techStack={p.technologies} className="ml-1" size={20} />
        </div>
      </Card.Footer>
    </Card>
  );
}
