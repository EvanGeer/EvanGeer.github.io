import { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh, MeshStandardMaterial, Vector3 } from "three";
import {
  Center,
  CycleRaycast,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { Button, Modal, Spinner } from "react-bootstrap";
import {
  Github,
  Linkedin,
  Medium,
  StackOverflow,
  XLg,
} from "react-bootstrap-icons";

function Scene({
  objFile,
  rotation,
  onClick,
  onHover,
}: {
  objFile: string;
  rotation: [number, number, number];
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
}) {
  const [scale, setScale] = useState(1);
  const [hovered, setHover] = useState(false);
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    setRotated(false);
  }, [rotation]);

  const obj = useMemo(() => getEgLogo(), []);
  obj.scale.set(scale * 0.1, scale * 0.1, scale * 0.1);

  function getEgLogo() {
    const obj = useLoader(OBJLoader, objFile);
    obj.rotation.set(rotation[0], rotation[1], rotation[2]);
    // if (!rotated) obj.rotateX(rotation);
    // setRotated(true);

    return obj;
  }

  useEffect(() => {
    // if (onClick === undefined) return;
    obj.traverse(function (child: Mesh) {
      const texture = new MeshStandardMaterial();
      texture.metalness = 0.7;
      texture.roughness = 0.25;
      // texture.color.set("#00FF00");
      texture.opacity = 0;
      // texture.wireframe = true;
      texture.color.set(
        onClick ? (hovered ? "#81bffc" : "#97cafc") : undefined
      );
      // texture.met
      if (child.isMesh) {
        child.material = texture;
      }
    });
    if (onHover) onHover(hovered);
  }, [hovered]);

  return (
    <mesh
      onClick={onClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={obj} style={{ cursor: "pointer" }} />
      {/* <meshStandardMaterial color={"red"} /> */}
    </mesh>
  );
}

function Box(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) =>
      meshRef.current?.rotation?.x && (meshRef.current.rotation.x += delta)
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <cylinderGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
function Timeline(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) =>
      meshRef.current?.rotation?.x && (meshRef.current.rotation.x += delta)
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={[0.01, 10, 0.01]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      rotation={[0, 0, Math.PI / 2]}
    >
      <cylinderGeometry />
      <meshStandardMaterial color={hovered ? "orange" : "gray"} />
    </mesh>
  );
}

export const EG = () => {
  // const [cameraPos, setCameraPos] = useState(new Vector3(-5, 5, 7));
  // console.log("rendering", cameraPos);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState("default");

  const onHover = (hovered: boolean) => {
    setCursor(hovered ? "pointer" : "default");
  };

  return (
    <>
      <Modal show={show} onExit={() => setShow(false)}>
        <Modal.Title onClick={() => setShow(false)}>
          <div>
            TEST

          </div>
        </Modal.Title>
      </Modal>
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
            <Scene objFile="./EGLogo.obj" rotation={[-Math.PI / 2, 0, 0]} />
            <Scene
              objFile="./ProjectPiping.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./Personal.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./BIMDexter.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./BrownAndCaldwell.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./MSUITE.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
              onClick={() => setShow(true)}
              onHover={onHover}
              objFile="./KitConnect.obj"
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <Scene
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
