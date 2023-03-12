import { useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import Project from "../types/Project";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [float, setFloat] = useState(
    index % 2 === 0 ? "float-left pr-2" : "float-right pl-2"
  );

  return (
    <>
      <Container className="row p-0 pt-2 d-flex justify-content-left">
        {/* <Col className="w-auto bg-primary m-0 p-0 mr-2"> */}
          {/* <div className="img-gradient p-0 m-0"> */}
            {/* <img
              src={project.imgSrc}
            //   className="w-100 h-100"
              //   className={`${float} h-auto w-50`}

              style={{ maxHeight: "200px", maxWidth: "300px", objectFit: "cover" }}
            /> */}
          {/* </div> */}
        {/* </Col> */}
        <Col className="p-0 m-0">
          <Card className="m-0 b-0">
            <Card.Header>
              <a href={project.deployment} className="text-info">
                {project.title}
              </a>
              <a href={project.repo}>
                <img
                  src="../images/Github_black.png"
                  className="float-right"
                  style={{ width: "20px" }}
                />
              </a>
              <a href={project.deployment}></a>
            </Card.Header>
            <Card.Body className="text-light bg-dark opacity-50 p-2">
              {/* <Col>
            <img
              src={project.imgSrc}
              className="w-100"
            //   className={`${float} h-auto w-50`}

                // style={{ minWidth: "500px" }}
            />
          </Col>
          <Col>
            <div className="">
            </div>
        </Col> */}
        <Col>
            <img
              src={project.imgSrc}
              //   className="w-100 h-100"
                className={`${float}`}
              
              style={{ maxHeight: "200px", maxWidth: "400px", objectFit: "cover" }}
              />
              </Col>
              <Col>
              {project.summary} <a href={project.deployment}>...</a>{" "}
              </Col>
            </Card.Body>
            <Card.Footer className="bg-light">
              <img
                src="../images/mitx-pro-logo.png"
                style={{ height: "20px" }}
              />
            </Card.Footer>
          </Card>
        </Col>
        {/* <Col ></Col> */}
      </Container>{" "}
    </>
  );
}
