import { useEffect, useState } from "react";
import { Dropdown, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { ProjectCardSm } from "../components/ProjectCardSm";


export function Projects() {
  const [projects, setProjects] = useState(null);

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
        .filter(p => !(p.hide))
        .map((p) => <ProjectCardSm p={p} />)
    );
  };

  return (
    <div className="container">
      <br />
      <div className="row row-cols-3 bg-secondary p-0 no-gutter border border-dark rounded">
        <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
          <h3 className="display-5 text-dark">Select Projects</h3>
          {/* <TechStackSlicer  onSelectionChanged={() => ""}></TechStackSlicer> */}
          <hr className="my-2" />
          <div className="row row-cols-3 p-0 no-gutter">{getCards()}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
