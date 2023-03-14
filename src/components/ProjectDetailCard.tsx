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
  backRef: () => void;
}) {
  const [p, setP] = useState(project);

  const DetailBullet = ({
    title,
    children,
  }: {
    title: string;
    children: JSX.Element[] | JSX.Element;
  }) => {
    <div className="d-flex flex-wrap align-items-center">
      <div className="d-flex align-self-center p-0 m-0">
        <h5 className="opacity-50 m-0 me-2">{title}:</h5>
      </div>
      <div className="d-flex fs-6 text-wrap">
        {children}
      </div>
    </div>;
  };

  return (
    <Card className="bg-opacity-0 align-content">
      <div className="bg-light text-dark sticky-top align-content-center justify-content-between d-flex p-0 m-0 ps-1 pe-1 rounded-top">
        <div className="align-content-center justify-content-between d-flex">
          <OrgLogo org={p.org} className="align-self-center pl-1" />
        </div>

        <div className="d-flex">
          <div className="align-self-center">{p.title}</div>
          {/* <Link to={backRef}> */}
          <i
            onClick={backRef}
            className="link-secondary fs-2 p-0 m-0 bi bi-x ml-1"
          ></i>
          {/* </Link> */}
        </div>
      </div>
      <Card.Header className="bg-light text-dark pl-2 pr-2 pt-0 pb-2">
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
      <Card.Body className="bg-dark">
        {/* <h2>Details:</h2> */}

        <div className="d-flex flex-wrap align-items-center">
          <h5 className="opacity-50 m-0 me-2">Tech:</h5>
          {/* <div className="d-flex flex-wrap ml-2 container-sm"> */}
          <TechStack
            techStack={p.technologies}
            includeText
            className="me-2"
            size={25}
          />
          {/* </div> */}
        </div>
        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex align-self-center p-0 m-0">
            <h5 className="opacity-50 m-0 mr-1">Site: </h5>
          </div>
          <div className="d-flex fs-6 text-wrap">
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
        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex align-self-center p-0 m-0">
            <h5 className="opacity-50 m-0 me-2">Repo: </h5>
          </div>
          <div className="d-flex fs-6 text-wrap">
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
        <hr className="border-secondary" />
        <ReactMarkdown>{p.markdown}</ReactMarkdown>
      </Card.Body>
    </Card>
  );
}
