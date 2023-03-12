import { Card, Container, Row } from "react-bootstrap";
import Project from "../types/Project";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";

export function ProjectCardSm({ p }: { p: Project }) {
  return (
    <Card
      className="col p-0 m-2 fluid bg-dark align-content"
      style={{ minWidth: "300px", boxShadow: "#00000055 4px 4px 12px" }}
    >
      <Card.Header className="bg-light p-2">
        <a href={p.deployment} className="text-info">
          {p.title}
        </a>
        {p.openSource ? (
          <a href={p.repo}>
            <img
              src="../images/Github_black.png"
              className="float-right opacity-50"
              style={{ width: "20px" }}
            />
          </a>
        ) : (
          <></>
        )}
      </Card.Header>
      {/* <Container>
        <Row className="bg-light pl-1">
          <TechStack techStack={p.technologies} />
        </Row>
      </Container> */}

      <a href={p.deployment}>
        <img className="card-img-top" src={p.imgSrc} alt="Card image cap" />
      </a>
      <div className="card-body">
        <p className="card-text">
          {p.summary} <a href={p.deployment}>...</a>{" "}
        </p>
      </div>
      <Card.Footer className="bg-light p-2 text-muted">
        <OrgLogo org={p.org} />
        <TechStack techStack={p.technologies} className="float-right"/>
      </Card.Footer>
    </Card>
  );
}
