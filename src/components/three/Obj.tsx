import { useEffect, useMemo, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial, Object3DEventMap } from "three";
import { OBJLoader, MTLLoader } from "three/examples/jsm/Addons.js";

export function Obj({
  objFile,
  rotation,
  onClick,
  onHover,
  mtl,
}: {
  objFile: string;
  rotation: [number, number, number];
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
  mtl?: MTLLoader.MaterialCreator;
}) {
  const [scale, setScale] = useState(1);
  const [hovered, setHover] = useState(false);
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    setRotated(false);
  }, [rotation]);

  const obj = useMemo(() => getEgLogo(), []);
  obj.scale.set(scale * 0.1, scale * 0.1, scale * 0.1);


  function setMaterial(obj:Group<Object3DEventMap>) {
    obj?.traverse(function (child: Mesh) {
      if (mtl) {
        if ((child?.material as any)?.name?.includes("Glass")) return;
        console.log(child.material);
      }

      const texture = new MeshStandardMaterial();
      texture.metalness = onClick ? 0.2 : 0.7;
      texture.roughness = 0.25;
      texture.color.set(
        onClick ? (hovered ? "#40a7ff" : "#81bffc") : undefined
      );

      if (child.isMesh) {
        child.material = texture;
      }
    });
  }

  function getEgLogo() {
    const obj = useLoader(OBJLoader, objFile, (loader) => {
      if (mtl) loader.setMaterials(mtl);
    });
    obj.rotation.set(rotation[0], rotation[1], rotation[2]);
    setMaterial(obj);

    return obj;
  }  
  
  useEffect(() => {
    if (onClick === undefined) return;
    if (onHover) onHover(hovered);

    setMaterial(obj);

  }, [hovered]);

  return (
    <mesh
      onClick={onClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={obj} style={{ cursor: "pointer" }} />
      
    </mesh>
  );


}
