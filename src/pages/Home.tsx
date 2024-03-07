import { useState } from "react";
import eg from "../images/EG.png";
import { MainContainer } from "./MainContainer";

export function Home() {
  const [topic, setTopic] = useState("");

  const Link = ({ color, text }) => {
    const activeColor = text === topic ? color : "muted";
    const setActive = () => setTopic(topic === text ? "" : text);

    return (
      <>
        <a
          href="#"
          onClick={setActive}
          className={`display-4 text-${activeColor} mt-2 link-${color}`}
        >
          {text}
        </a>
        <br />
      </>
    );
  };

  return (
    <>
      <MainContainer>
        <Link text={"Leadership"} color={"primary"} />
        <Link text={"Vision"} color={"warning"} />
        <Link text={"Excellence"} color={"success"} />
        <p className="text-light mt-1 ms-1" style={{ fontSize: 18 }}>
          Leader in architecture, engineering and construction technology with software, and construction with a passion for
            scaling agile teams and driving excellence. Diverse background with
          expertise in software development leadership in the software as a
          service (SaaS) environment, object oriented software design and
          architecture, agile team optimization, water/wastewater engineering,
          data management, building information modeling (BIM), and virtual
          design and construction (VDC).
        </p>
      </MainContainer>

      <div className="d-flex d-md-none justify-items-start m-1 mt-4 rounded-5 overflow-hidden shadow row">
        <h3 className="text-secondary p-3 w-100 bg-black text-center">
          Leadership | Vision | Execution
        </h3>{" "}
        <div className="row m-0 p-0">
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
