import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import dewaltLogo from "../images/dewalt.jpeg";
import MITxLogo from "../images/mitx-pro-logo.png";
import bc from "../images/sbd_logo_square.png";
import msuite from "../images/msuite.png";
import { OrgLogo } from "../components/OrgLogo";
import { ProjectCardSm } from "../components/ProjectCardSm";

export function Projects() {
  const [projects, setProjects] = useState<any>(null);
  const [Cards, setCards] = useState(null);

  useEffect(() => {
    const json = fetch("../projects/projectData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setProjects(myJson);
      });
  }, []);

  const getCards = () => {
    if (!projects?.projects) return <></>;
    return (
      projects.projects
        // .filter(p => p.company === "MITxMERN")
        .map((p) => <ProjectCardSm p={p} />)
    );
  };

  return (
    <div className="container">
      {/* <h2>
        MITx MERN
        <small className="text-muted">
          | Full Stack with MongoDB, Express, React and Node.js
        </small>
      </h2>

      <div className="row  bg-secondary p-3 no-gutter border border-dark rounded">
        <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
          <h3 className="text-dark">
            From the brochure
            <a
              className="btn btn-primary btn-sm float-right"
              href="https://executive-ed.xpro.mit.edu/professional-certificate-coding"
            >
              more info
            </a>
          </h3>
          <hr className="my-2" />
          <p className="lead text-dark">
            This program is organized into three main modules using the MERN
            stack: Web Development, Front-End Development/React, and Back-End
            Development. Each module builds on the next, and is designed to
            prepare you to enter the job market as an entry-level full-stack
            developer, or to specialize in one of these areas with further skill
            development.
          </p>
          <h3>Key Take-Aways</h3>
          <ul className="lead text-dark">
            <li>
              Build, test, and deploy a web application using the MERN stack
            </li>
            <li>Build, test, and deploy APIs</li>
            <li>
              Build, test, and deploy a front-end web application using React
            </li>
            <li>Setup CI/CD pipelines to deploy a React application</li>
            <li>Build a full stack portfolio in GitHub</li>
          </ul>
        </div>
      </div> */}

      <br />
      <div className="row row-cols-3 bg-secondary p-0 no-gutter border border-dark rounded">
        <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
          <h3 className="display-5 text-dark">Select Projects</h3>
          <hr className="my-2" />
          <div className="row row-cols-3 p-0 no-gutter">{getCards()}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
