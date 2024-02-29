import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh, Vector3 } from "three";
import {
  Center,
  CycleRaycast,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Button, Modal, Spinner } from "react-bootstrap";
import {
  Github,
  Linkedin,
  Medium,
  StackOverflow,
  XLg,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { ProjectDetailCard } from "../ProjectDetailCard";
import Project from "../../types/Project";
import { Obj } from "./Obj";


export const EG = () => {
  // const [cameraPos, setCameraPos] = useState(new Vector3(-5, 5, 7));
  // console.log("rendering", cameraPos);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState("default");
  const [project, setProject] = useState<Project>(undefined);
  const [projects, setProjects] = useState<Project[]>(null);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const navigate = useNavigate();

  // move to functional module
  const getProjectFromId = (id: string | number) => {
    if (!id || !(projects?.length ?? 0 > 0)) return null;
    const newProject = projects.find((x) => x.key === id);
    return newProject;
  };

  const getProjects = () => {
    fetch("./projects/projectData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setProjects(json?.projects?.filter((x) => !x.hide));
        setProjectsLoaded(true);
      });
  };
  useEffect(() => {
    getProjects();
  }, []);

  const showModal = (projectKey: string) => {
    const project = getProjectFromId(projectKey);
    console.log(project);
    setProject(project);
    setShow(true);
  };

  const onHover = (hovered: boolean) => {
    setCursor(hovered ? "pointer" : "default");
  };

  const goToNext = () => {
    const next = projects.findIndex((x) => x.id === project.id) + 1;
    if (next < projects.length) navigate(`/projects/${projects[next].key}`);
  };

  const goToPrevious = () => {
    const previous = projects.findIndex((x) => x.id === project.id) - 1;
    if (previous >= 0) navigate(`/projects/${projects[previous].key}`);
  };
  return (
    <>
      {/* {project && ( */}
      <Modal
        show={show && project !== undefined}
        onHide={() => setShow(false)}
        size="lg"
      >
        <ProjectDetailCard
          project={project}
          onClose={() => setShow(false)}
          key={project?.id}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
        />
      </Modal>
      {/* )} */}
      <div
        style={{
          overflow: "none",
          width: "100vw",
          height: "100vh",
          margin: "auto",
        }}
        className="bg-dark d-flex justify-content-top"
      >
        {!loaded && (
          <>
            <div
              className="display-2 d-flex m-auto w-100 h-100 text-secondary align-items-center justify-content-center"
              style={{ position: "absolute" }}
            >
              <div className="display-2">Loading</div>
              <div className="d-flex text-secondary h5 mt-4">
                <Spinner size="sm" animation="grow" className="ms-4" />
                <Spinner size="sm" animation="grow" className="ms-4" />
                <Spinner size="sm" animation="grow" className="ms-4" />
              </div>
            </div>
          </>
        )}
        <Canvas
          style={{ cursor }}
          onCreated={() => setLoaded(true)}
          // onCreated={(state) => {
          //   state.camera.position.set(-7, 11, 10);
          //   // state.camera.lookAt(0,-10,-100);
          // }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <PerspectiveCamera position={[-5, 5, 7]} makeDefault />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Center>
            <Obj objFile="./EGLogo.obj" rotation={[-Math.PI / 2, 0, 0]} />
            <Obj
              objFile="./ProjectPiping.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("MITxMERN-BankApp")}
              onHover={onHover}
              objFile="./Personal.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onHover={onHover}
              objFile="./BIMDexter.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("BC-DesignDataManager")}
              onHover={onHover}
              objFile="./BrownAndCaldwell.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./MSUITE.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./KitConnect.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./DeWalt.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </Center>
          {/* <Timeline position={[0, -1, 3]} /> */}
          <OrbitControls onEnd={(e) => console.log(e)} />
        </Canvas>
        <div
          className="h3 d-flex p-3 overflow-none  w-100 align-self-top mb-auto align-items-center"
          style={{ position: "absolute" }}
        >
          <div className="bg-light d-flex rounded-5 text-dark w-100 align-self-top mb-auto align-items-center bg-opacity-25">
            <div className="d-flex text-dark w-100 align-items-center">
              <img
                src="https://avatars.githubusercontent.com/u/49009980?v=4"
                height={40}
                className="rounded-circle m-1"
              />
              <span className="text-light display-6 ps-5 ms-1 pb-1 position-absolute">
                Evan Geer
              </span>
            </div>
            <div className="d-flex m-0 p-0 h4 pe-3 text-light align-items-center">
              {/* <Button className="p-0 rounded-circle m-0"> */}
              <span className="opacity-25 me-2 d-none d-sm-flex">contact:</span>
              <Linkedin className="m-2" />
              {/* </Button> */}
              <Github className="m-2" />
              <StackOverflow className="m-2" />
              <Medium className="m-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
