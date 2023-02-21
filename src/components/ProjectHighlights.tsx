import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { json } from "stream/consumers";
import dimensionEngine from "../images/dimensionEngine.jpg";
import selectAllLike from "../images/SelectAllLike.jpg";
// import projectData from "../projects/projectData.json";

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
    const json = `{
      "projects": [
        {
          "title": "Auto Dimensioning Engine Rebuild",
          "source": "MSuite",
          "openSource": false,
          "technologies": ["C#", "WPF", "Revit"],
          "summary": "Refactored 4000+ lines of nest logic into abstract builder/director, allowing for greater extensibility and maintainability",
          "details": "Additional Functionality: ",
          "imgSrc":  "../images/dimensionEngine.jpg"
        },
        {
          "title": "Select All Like UI Overhaul",
          "company": "MSuite",
          "openSource": false,
          "technologies": ["C#", "WPF", "Revit"],
          "summary": "Refactored UI in MVVM pattern with more modular and componentized controls",
          "details": "...",
          "imgSrc":  "../images/SelectAllLike.jpg"
        }
      ]
    }`

    // setProjects(JSON.parse(json));
    fetch("../projects/projectData.json", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
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
  }, [projects] )

  return (
    <Carousel
      nextLabel=""
      prevLabel=""
      indicatorLabels={["1", "2", "3"]}
      indicators={false}
    >
      {projects?.projects?.map((p) => {
        return (
          <Carousel.Item interval={100000}>
            <Container className="bg-secondary rounded p-4">
              <h3 className="text-dark pb-2">{p.title}</h3>
              <p>
                {p.summary}
                {/* Re-architected for easier maintainability and extensibility
                using an Abstract Factory/Builder pattern */}
              </p>
              <img
                className="d-block w-100"
                src={p.imgSrc}
                alt={p.imgSrc}
              />
            </Container>
          </Carousel.Item>
        );
      }) ?? null}

      {/* <Carousel.Item interval={100000}>
        <Container className="bg-secondary rounded p-4">
          <h3 className="text-dark pb-2">MSUITE: Dimension Engine</h3>
          <p>
            Re-architected for easier maintainability and extensibility using an
            Abstract Factory/Builder pattern
          </p>
          <img
            className="d-block w-100"
            src={dimensionEngine}
            alt="First slide"
          />
        </Container>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Container className="bg-secondary rounded p-4">
          <h3  className="text-dark pb-2">MSuite: Revit Select and Filter</h3>
          <p>Completely overhauled wpf UI to implement MVVM, leveraging modular components.</p>
        <img className="d-block w-100" src={selectAllLike} alt="Second slide" />
        </Container>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
