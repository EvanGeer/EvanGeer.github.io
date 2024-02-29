import { useEffect, useMemo, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export function Obj({
  objFile, rotation, onClick, onHover//, mtl
}: {
  objFile: string;
  rotation: [number, number, number];
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
  // mtl: MTL
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
