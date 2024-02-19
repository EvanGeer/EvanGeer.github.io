import { Card, Image, Row } from "react-bootstrap";
import Project from "../types/Project";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import ReactMarkdown from "react-markdown";
import { CleanLink } from "./CleanLink";
import { useSwipeable } from "react-swipeable";
import { ChevronDoubleLeft, ChevronDoubleRight } from "react-bootstrap-icons";

export function ProjectDetailCard({
  project,
  onClose,
  goToPrevious,
  goToNext,
}: {
  project: Project;
  onClose: () => void;
  goToPrevious: () => void;
  goToNext: () => void;
}) {

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
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  });

  const PreviousNextButtons = ({ children = null }) => {
    const linkClass = "h5 link-secondary";
    return (
      <Row className="fluid align-content-center justify-content-between d-flex m-0 mt-1 p-0 ps-1 pe-1">
        <div
          style={{ cursor: "pointer" }}
          className={linkClass}
          onClick={goToPrevious}
        >
          <ChevronDoubleLeft />
        </div>
        <div>{children}</div>
        <div
          style={{ cursor: "pointer" }}
          className={linkClass}
          onClick={goToNext}
        >
          <ChevronDoubleRight />
        </div>
      </Row>
    );
  };

  return (
    <Card className="bg-opacity-0 align-content" {...handlers}>
      <div className="bg-light text-dark sticky-top p-0 m-0 ps-1 pe-1 rounded-top">
        <Row className="fluid align-content-center justify-content-between d-flex p-0 m-0 ps-1 pe-1">
          <div className="align-content-center justify-content-between d-flex">
            <OrgLogo org={project.org} className="align-self-center pl-1" />
          </div>

          <div className="d-flex">
            <div className="align-self-center ">{project.title}</div>
            <i
              onClick={onClose}
              className="link-secondary fs-2 p-0 m-0 bi bi-x ml-1"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </Row>
      </div>
      <Card.Header className="bg-light text-dark pl-2 pr-2 pt-0 pb-2">
        <Image fluid src={project.mouseOverImgSrc ?? project.imgSrc} thumbnail className="mt-0" />
      </Card.Header>
      <Card.Body className="bg-dark">
        <Detail title="Tech">
          <TechStack
            techStack={project.technologies}
            includeText
            className="me-2"
            size={25}
          />
        </Detail>
        <Detail title="Site">
          <CleanLink href={project.deployment} />
        </Detail>
        <Detail title="Repo">
          <CleanLink href={project.repo} />
        </Detail>

        <hr className="border-secondary" />

        <ReactMarkdown>{project.markdown}</ReactMarkdown>
      </Card.Body>
      <Card.Footer className="m-0 pb-0 p-2 sticky-bottom bg-light">
        <PreviousNextButtons />
      </Card.Footer>
    </Card>
  );
}
