import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { OrgLogo } from "./OrgLogo";
import { TechStack } from "./TechStack";

type ProjectHighlight = {
  title: string;
  summary: string;
  imgSrc: string;
  interval?: number;
};

type ProjectHighlights = {
  projects?: ProjectHighlight[]; //ToDo: get rid of this as optional aSD
};

function IndividualIntervalsExample(projectData: ProjectHighlights) {
  const [projects, setProjects] = React.useState<any>(null);

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

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <Carousel
      nextLabel=""
      prevLabel=""
      // indicatorLabels={["1", "2", "3"]}
      // indicators={false}
      controls={false}
      className="rounded bg-secondary"
    >
      {projects?.projects
        ?.filter((p) => p.highlight && !p.hide)
        .map((p) => {
          return (
            <Carousel.Item interval={5000}>
              <Container className="d-flex flex-wrap p-3">
                <Container className="d-flex flex-column p-0">
                  <div className="align-self-stretch">
                    <h3 className="text-dark pr-2 pl-0">{p.title}</h3>
                    {/* <hr className="p-0 m-1" /> */}
                    <div className="bg-light bg-opacity-75 text-muted p-1 rounded">
                      <TechStack techStack={p.technologies} size={30} />
                    </div>
                    {/* <hr className="m-1" /> */}
                    <p className="align-self-stretch">{p.summary}</p>
                  </div>
                  <div className="mt-auto bg-light bg-opacity-75 text-muted p-1 rounded">
                    <OrgLogo org={p.org} />
                  </div>
                </Container>
                <img className="col w-75 mb-1 mt-1" src={p.imgSrc} alt={p.imgSrc} 
                  style={{maxHeight:"200px", objectFit: "contain"}}
                  />
              </Container>
            </Carousel.Item>
          );
        }) ?? null}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
