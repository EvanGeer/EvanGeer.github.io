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
  const imgLeft = index % 2 === 0;
  const navigate = useNavigate();
  const [img, setImg] = useState(project.imgSrc);

  const showAnimation = () =>
    setImg(project?.mouseOverImgSrc ?? project.imgSrc);
  const showStatic = () => setImg(project.imgSrc);

  const ImageColumn = () => {
    return (
      <div className="bg-white d-flex">
        <img src={project.imgSrc} width={"400"} className="d-flex mt-auto mb-auto" />
      </div>
    );
  };

  const TextColumn = () => {
    return (
      <div className={`p-2 d-flex flex-column bg-black text-light`}>
        <div className={`d-flex ${!imgLeft && "justify-content-end"}`}>
          <OrgLogo
            org={project.org}
            className={project.org === Org.MIT_MERN && " pe-1 ps-1"}
          />
        </div>
        <div className={`d-flex ${!imgLeft && "justify-content-end"} h2 text-muted smaller`}>{project.title}</div>
        <div className={`d-flex ${!imgLeft && "text-end"} `}>{project.summary}</div>
        <div className={`d-flex ${!imgLeft && "justify-content-end"} mt-auto`}>
          <TechStack techStack={project.technologies} />
        </div>
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
    <div className="d-flex align-items-stretch rounded-4 mt-5 mb-5 overflow-hidden">
      {imgLeft ? (
        <>
          <ImageColumn />
          <TextColumn />
        </>
      ) : (
        <>
          <TextColumn />
          <ImageColumn />
        </>
      )}{" "}
    </div>
  );
}
