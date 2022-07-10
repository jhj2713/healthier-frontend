import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Mesh } from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";

const vec = new THREE.Vector3();
let geometry = new THREE.BufferGeometry();

const Character = ({ view }: { view: number }) => {
  const character = useLoader(OBJLoader, "models/character.obj", (loader) => {
    // material.preload();
    // loader.setMaterials(material);
  });
  //@ts-ignore
  geometry = character.children[0].geometry;

  useEffect(() => {
    // geometry = mergeVertices(geometry);
    // geometry.computeVertexNormals();
    geometry.center();
  }, [character]);

  const modelRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (view == 1) {
      if (modelRef.current.rotation.y < Math.PI) {
        modelRef.current.rotation.y +=
          (Math.PI - modelRef.current.rotation.y) * 0.1;
      }
    } else {
      if (modelRef.current.rotation.y > 0) {
        modelRef.current.rotation.y -= modelRef.current.rotation.y * 0.1;
      }
    }

    state.camera.position.lerp(vec.set(0, 0, 19), 0.2);

    // if (modelRef.current.position.z <= 15) {
    //   modelRef.current.position.z += 0.3;
    //   modelRef.current.position.y -= 0.03;
    // }
  });

  return (
    <mesh ref={modelRef} geometry={geometry} scale={0.1} position={[0, -3, 0]}>
      {/* <boxGeometry /> */}
      <meshStandardMaterial />
    </mesh>
  );
};

export default Character;
