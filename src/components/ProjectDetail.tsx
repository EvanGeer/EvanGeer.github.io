import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";

export function ProjectDetail() {
  const {id} = useParams();

  const p =     {
    "id":8,
    "title": "ATM UI",
    "org": "MITxMERN",
    "openSource": true,
    "technologies": ["React", "TypeScript", "Bootstrap"],
    "summary": "Sample ATM UI to illustrate React Components",
    "details": "...",
    "imgSrc": "../images/BankApp.png",
    "highlight": false,
    "hide": false,
    "repo": "https://github.com/EvanGeer/MITxMERN-BadBank",
    "deployment": "https://evangeer.github.io/MITxMERN-BadBank/"
  }

  return (
    <Card className="col p-0 m-2 fluid bg-dark align-content egCard">
      <Card.Header className="bg-light text-dark p-2">
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
      </Card.Header>
      <ConditionalAnchor
        href={p.deployment}
        predicate={() =>
          typeof p.deployment === "string" && p.deployment !== ""
        }
      >
        <Card.Img variant="bottom" src={p.imgSrc} />
      </ConditionalAnchor>
      <Card.Body>
        {p.summary} <a href={p.deployment}>...</a>{" "}
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
