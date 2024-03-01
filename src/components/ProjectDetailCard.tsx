import { Button, Card, Image, Row } from "react-bootstrap";
import Project from "../types/Project";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import ReactMarkdown from "react-markdown";
import { CleanLink } from "./CleanLink";
import { useSwipeable } from "react-swipeable";
import {
  ChevronDoubleLeft,
  ChevronDoubleRight,
  X,
  XLg,
} from "react-bootstrap-icons";

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
      <div className="align-content-center justify-content-between d-flex m-0 mt-1 p-0 ps-1 pe-1">
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
      </div>
    );
  };

  return (
    <Card className="bg-opacity-0 align-content border-0 bg-dark" {...handlers}>
      <div className="bg-dark text-light sticky-top p-0 m-0 ps-1 pe-1 rounded-top overflow-none">
        <div className="fluid align-content-center justify-content-between d-flex p-0 m-0 ps-1">
          <div className="align-content-center justify-content-between d-flex">
            <OrgLogo org={project.org} className="align-self-center p-1" />
          </div>

          <div className="d-flex h3">
            <div className="align-self-center d-flex m-auto">
              {project.title}
            </div>
            <Button
              onClick={onClose}
              variant="light"
              className="link-secondary d-flex p-1 m-2"
            >
              <XLg size={24} />
            </Button>
          </div>
        </div>
      </div>
      <Card.Header className="d-flex bg-dark text-dark p-0">
        <img
          src={project.mouseOverImgSrc ?? project.imgSrc}
          style={{ maxHeight: 480, width: "100%" }}
          className="mt-0 p-0 m-0 border-secondary border-opacity-50 border-top border-bottom"
        />
      </Card.Header>
      <Card.Body className="bg-dark text-light">
        <Detail title="Tech">
          <TechStack
            techStack={project.technologies}
            includeText
            className="me-2"
            size={25}
          />
        </Detail>
        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex align-self-center p-0 m-0">
            <h5 className="opacity-50 m-0 me-2">{project.title}:</h5>
          </div>
          <div className="d-flex fs-6 text-wrap">
            <CleanLink href={project.deployment} />
          </div>
        </div>{" "}
        {/* <Detail title="Site">
          <CleanLink href={project.deployment} />
        </Detail> */}
        <Detail title="Repo">
          <CleanLink href={project.repo} />
        </Detail>
        <hr className="border-secondary" />
        <ReactMarkdown>{project.markdown}</ReactMarkdown>
      </Card.Body>
      <Card.Footer className="m-0 pb-0 p-2 sticky-bottom bg-dark">
        <PreviousNextButtons />
      </Card.Footer>
    </Card>
  );
}
