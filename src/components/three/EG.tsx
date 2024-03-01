import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh, Vector3 } from "three";
import { OBJLoader, MTLLoader } from "three/examples/jsm/Addons.js";

import {
  Center,
  CycleRaycast,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Modal, Spinner } from "react-bootstrap";
import {
  Linkedin,
  XLg,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { ProjectDetailCard } from "../ProjectDetailCard";
import Project from "../../types/Project";
import { Obj } from "./Obj";
import { Socials } from "./Socials";

export const EG = () => {
  // const [cameraPos, setCameraPos] = useState(new Vector3(-5, 5, 7));
  // console.log("rendering", cameraPos);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState("default");
  const [project, setProject] = useState<Project>(undefined);
  const [projects, setProjects] = useState<Project[]>(null);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const [markdown, setMarkdown] = useState(new Map<string, string>());
  const [markdownLoaded, setMarkdownLoaded] = useState(false);

  const [materials, setMaterials] = useState<MTLLoader.MaterialCreator>();
  const mtlLoader = new MTLLoader();

  mtlLoader.load("./obj/materials.mtl", (mtl) => {
    mtl.preload();
    setMaterials(mtl);
  });

  useEffect(() => {
    getProjects();
  }, []);

  const getMarkdownFiles = async () => {
    if (!(projects?.length > 0)) return;

    const markdownFiles = new Map<string, string>();

    for (const p of projects) {
      const markdownFilePath = `../projects/${p.key}.md`;

      await fetch(markdownFilePath)
        .then((response) => response.text())
        .then((text) => {
          if (text.includes("<!DOCTYPE html>")) return;
          markdownFiles.set(p.key, text);
          // newProjects[i] = newProj;
          // const newProj = { ...p, markdown: text };
        });
    }

    setMarkdown(markdownFiles);
    setMarkdownLoaded(true);
  };

  useEffect(() => {
    if (projectsLoaded && !markdownLoaded) {
      getMarkdownFiles();
      return;
    }

    if (!(markdownLoaded && projectsLoaded)) return;

    const newProjects = projects.map((p: Project) => {
      return { markdown: markdown.get(p.key), ...p };
    });

    setProjects(newProjects);
    // getMarkdownFiles
  }, [projectsLoaded, markdownLoaded]);

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
        const activeProjects = json?.projects
          ?.filter((x) => !x.hide)
          .sort((x: Project, y: Project) => x.id - y.id);
        console.log(activeProjects);
        setProjects(activeProjects);
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
    if (!projects) return;
    const next = projects.findIndex((x) => x.id === project.id) + 1;
    setProject(next < projects.length ? projects[next] : projects[0]);
    // if (next < projects.length) navigate(`/projects/${projects[next].key}`);
  };

  const goToPrevious = () => {
    if (!projects) return;
    const previous = projects.findIndex((x) => x.id === project.id) - 1;
    setProject(
      previous >= 0 ? projects[previous] : projects[projects.length - 1]
    );
    // if (previous >= 0) navigate(`/projects/${projects[previous].key}`);
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
          <PerspectiveCamera position={[-5, 7, 6]} makeDefault />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Center position={[0, 0.75, 0]}>
            <Obj
              objFile="./obj/EGLogo.obj"
              rotation={[-Math.PI / 2, 0, 0]}
              mtl={materials}
            />
            <Obj
              objFile="./obj/ProjectPiping.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {/* <Obj
              // onClick={() => showModal("MITxMERN-BankApp")}
              onHover={onHover}
              objFile="./obj/iPersonal_BudgePro.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            /> */}
            <Obj
              onClick={() => showModal("MITxMERN-BankApp")}
              onHover={onHover}
              objFile="./obj/iPersonal_FiReactBank.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("AssemblyManager")}
              onHover={onHover}
              objFile="./obj/iPersonal_AssemblyMgr.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onHover={onHover}
              onClick={() => showModal("BIMdexter")}
              mtl={materials}
              objFile="./obj/BIMDexter.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("MSuite-DimensionEngine")}
              onHover={onHover}
              mtl={materials}
              objFile="./obj/iMSUITE_Dimensions.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("MSuite-SelectAllLike")}
              onHover={onHover}
              mtl={materials}
              objFile="./obj/iMSUITE_SelectAllLike.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("KitConnect")}
              mtl={materials}
              onHover={onHover}
              objFile="./obj/KitConnect.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("DeWALT-HWP")}
              onHover={onHover}
              objFile="./obj/DeWalt.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("BC-DesignDataManager")}
              onHover={onHover}
              objFile="./obj/iBC_DDM.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Obj
              onClick={() => showModal("BC-ComponentLibrary")}
              onHover={onHover}
              objFile="./obj/iBC_ERC.obj"
              mtl={materials}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {/* <Timeline position={[0, -1, 3]} /> */}
            <OrbitControls onEnd={(e) => console.log(e)} />
          </Center>
        </Canvas>
        <Socials />
      </div>
    </>
  );
};

