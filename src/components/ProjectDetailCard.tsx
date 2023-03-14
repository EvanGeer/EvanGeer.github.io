import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { CleanLink } from "./CleanLink";

export function ProjectDetailCard({
  project,
  backRef,
}: {
  project: Project;
  backRef: () => void;
}) {
  const [p, setP] = useState(project);

  const Detail = ({
    title,
    children,
  }: {
    title: string;
    children: JSX.Element[] | JSX.Element;
  }) => {
    return (
      <div className="d-flex flex-wrap align-items-center">
        <div className="d-flex align-self-center p-0 m-0">
          <h5 className="opacity-50 m-0 me-2">{title}:</h5>
        </div>
        <div className="d-flex fs-6 text-wrap">{children}</div>
      </div>
    );
  };

  return (
    <Card className="bg-opacity-0 align-content">
      <div className="bg-light text-dark sticky-top align-content-center justify-content-between d-flex p-0 m-0 ps-1 pe-1 rounded-top">
        <div className="align-content-center justify-content-between d-flex">
          <OrgLogo org={p.org} className="align-self-center pl-1" />
        </div>

        <div className="d-flex">
          <div className="align-self-center">{p.title}</div>
          <i
            onClick={backRef}
            className="link-secondary fs-2 p-0 m-0 bi bi-x ml-1"
            style={{cursor: "pointer"}}
          ></i>
        </div>
      </div>
      <Card.Header className="bg-light text-dark pl-2 pr-2 pt-0 pb-2">
        <Image fluid src={p.imgSrc} thumbnail className="mt-0" />
      </Card.Header>
      <Card.Body className="bg-dark">
        <Detail title="Tech">
          <TechStack
            techStack={p.technologies}
            includeText
            className="me-2"
            size={25}
          />
        </Detail>
        <Detail title="Site">
          <CleanLink href={p.deployment} />
        </Detail>
        <Detail title="Repo">
          <CleanLink href={p.repo} />
        </Detail>

        <hr className="border-secondary" />

        <ReactMarkdown>{p.markdown}</ReactMarkdown>
      </Card.Body>
    </Card>
  );
}
