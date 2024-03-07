import { Html, useProgress } from "@react-three/drei";
import { Spinner } from "react-bootstrap";

export function EgLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        className="display-2 d-flex m-auto w-100 h-100 text-secondary align-items-center justify-content-center"
        style={{ position: "absolute" }}
      >
        {/* <div className="flex-row d-flex"> */}
          <div className="display-2">
            <span>Loading</span>
          </div>
          <div className="d-flex text-secondary h5 mt-4">
            <Spinner size="sm" animation="grow" className="ms-4" />
            <Spinner size="sm" animation="grow" className="ms-4" />
            <Spinner size="sm" animation="grow" className="ms-4" />
          </div>
        {/* </div> */}
      </div>
      <div className="border-secondary border text-secondary flex-row d-flex"
        style={{width: 300, marginTop: 120, height: 14}}>
          {/* {progress}% */}
          <div className="bg-secondary m-1"
          style={{width: `${progress}%`, marginBlockEnd: "auto"}}/>
        </div>
    </Html>
  );
}
