import { useState } from "react";
import eg from "../images/EG.png";
import { MainContainer } from "./MainContainer";

export function Home() {
  const [section, setSection] = useState("");

  

  return (
    <>
      <MainContainer>
        <a href="#" className="display-4 text-muted mt-2 link-primary">
          Leadership
        </a>
        <br />
        <a href="#" className="display-4 text-muted mt-2 link-warning">
          Vision
        </a>
        <br />
        <a href="#" className="display-4 text-muted mt-2 link-success">
          Excellence
        </a>
        <p className="text-light mt-1 ms-1" style={{ fontSize: 18 }}>
          Leader in engineering, software, and construction with a passion for
          scaling agile teams and driving excellence. Diverse background with
          expertise in software development leadership in the software as a
          service (SaaS) environment, object oriented software design and
          architecture, agile team optimization, water/wastewater engineering,
          data management, building information modeling (BIM), and virtual
          design and construction (VDC).
        </p>
      </MainContainer>

      <div className="d-flex d-md-none justify-items-start border border-2 m-1 rounded-5 overflow-hidden shadow row">
        <h3 className="text-secondary p-3 border-bottom w-100 border-1 bg-black text-center">
          Leadership | Vision | Execution
        </h3>{" "}
        <div className="row m-0 p-0 border-bottom border-1">
          <img
            src={eg}
            width={"100%"}
            style={{ objectFit: "scale-down" }}
            className=""
          />
        </div>
        <div className="p-2 bg-black">
          <p className="text-light">
            Leader in engineering, software, and construction with a passion for
            scaling agile teams and driving excellence. Diverse background with
            expertise in software development leadership in the software as a
            service (SaaS) environment, object oriented software design and
            architecture, agile team optimization, water/wastewater engineering,
            data management, building information modeling (BIM), and virtual
            design and construction (VDC).
          </p>
        </div>
        {/* <img src={eg} style={{objectFit: "contain"}} className="object-fit-scale"/> */}
      </div>
    </>
  );
}
