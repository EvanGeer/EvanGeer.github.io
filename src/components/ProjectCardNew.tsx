import { Card, Container, Row } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";
import Project from "../types/Project";
import ConditionalAnchor from "./ConditionalAnchor";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";
import { useState } from "react";
import { Github, Link45deg } from "react-bootstrap-icons";
import Org from "../types/Org";

export function ProjectCardNew({
  index,
  project,
  href,
}: {
  index: number;
  project: Project;
  href: string;
}) {
  const navigate = useNavigate();
  const [img, setImg] = useState(project.imgSrc);

  const showAnimation = () =>
    setImg(project?.mouseOverImgSrc ?? project.imgSrc);
  const showStatic = () => setImg(project.imgSrc);

  const ImageColumn = () => {
    return (
      <div className="m-0 p-0 d-flex align-items-top">
        <img
          src={project.imgSrc}
          height={"50%"}
          width={"50%"}
          style={{
            objectFit: "scale-down",
          }}
        />
        {/* className={`mb-auto rounded-4 ${index % 2 === 0 && "ms-auto"} p-0 align-self-top`} */}
      </div>
    );
  };

  const TextColumn = () => {
    return (
      <div
        className={`${
          index % 2 && "text-right"
        } bg-black bg-opacity-50 align-items-stretch`}
      >
        <span className="h3 text-muted">{project.title}</span>

        <br />
        <TechStack techStack={project.technologies} />
        <br />
        {project.summary}
      </div>
    );
  };

  return (
    // <div style={{height: 200}}
    //   className="egCard d-none d-md-flex justify-items-start border border-dark border-0 mt-4 overflow-hidden row">
    //   {index % 2 === 0 ? (
    //     <>
    //       <ImageColumn />
    //       <TextColumn />
    //     </>
    //   ) : (
    //     <>
    //       <TextColumn />
    //       <ImageColumn />
    //     </>
    //   )}
    // </div>
    <div className="d-flex align-items-stretch rounded-4 mt-2 mb-4 overflow-hidden">
      <div className="bg-warning">
        <img src={project.imgSrc} width={"400"} />
      </div>
      <div className="p-2 d-flex flex-column bg-white text-dark">
        <div>
          <OrgLogo
            org={project.org}
            className={project.org === Org.MIT_MERN && "bg-white pe-1 ps-1"}
          />
        </div>
        <div className=" h2 text-muted smaller">{project.title}</div>
        <div className="">{project.summary}</div>
        <div className=" mt-auto">
          <TechStack techStack={project.technologies} />
        </div>
      </div>
    </div>
  );
}
