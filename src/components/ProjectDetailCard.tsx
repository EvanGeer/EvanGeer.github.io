import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export function ProjectDetailCard({
  project,
  backRef,
}: {
  project: Project;
  backRef: string;
}) {
  const [p, setP] = useState(project);

  return (
    <Card className="bg-dark align-content">
      <Card.Header className="bg-light text-dark pl-2 pr-2 pt-0 pb-2">
        <div className="align-content-center justify-content-between d-flex p-0 m-0">
          <div className="align-content-center justify-content-between d-flex">
            <OrgLogo org={p.org} className="align-self-center pl-1" />
          </div>

          <div className="d-flex">
            <div className="align-self-center">{p.title}</div>
            <Link to={backRef}>
              <i className="link-secondary fs-2 p-0 m-0 bi bi-x ml-1"></i>
            </Link>
          </div>
        </div>

        <Image fluid src={p.imgSrc} thumbnail className="mt-0" />
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
        {/* <h2>Details:</h2> */}

        <div className="d-flex align-items-center">
            <h5 className="opacity-50 m-0">Tech:</h5>
            <div className="d-flex flex-row ml-2 container-sm">
              <TechStack
                techStack={p.technologies}
                includeText
                className="mr-2"
                size={25}
              />
            </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-self-center p-0 m-0">
            <h5 className="opacity-50 m-0">Site: </h5>
          </div>
          <div className="d-flex fs-6 text-wrap ml-1">
            {p.deployment ? (
              <>
                <a className="text-wrap" href={p.deployment}>
                  {p.deployment
                    ?.replace("http://", "")
                    ?.replace("https://", "")
                    ?.replace("www.", "")}
                </a>
              </>
            ) : (
              <i className="opacity-25">not available</i>
            )}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-self-center p-0 m-0">
            <h5 className="opacity-50 m-0">Repo: </h5>
          </div>
          <div className="d-flex fs-6 text-wrap ml-1">
            {p.repo ? (
              <>
                <a className="text-wrap" href={p.repo}>
                  {p.repo
                    ?.replace("http://", "")
                    ?.replace("https://", "")
                    ?.replace("www.", "")}
                </a>
              </>
            ) : (
              <i className="opacity-25">not available</i>
            )}
          </div>
        </div>

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
