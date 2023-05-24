import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { LayerMaterial } from "lamina";
import { BodyPart, IPointShader, ViewPoint } from "src/interfaces/symptomPage";
import { ICharacterProps } from "src/interfaces/symptomPage";

import theme from "src/lib/theme";
import { FrontLines, BackLines } from "../characterLine";
import PointLayerComponent from "./pointShader";

const layerProps = {
  // [origin x, origin y, origin z, near, far, color one, color two]
  [BodyPart.TEMPLE]: { x: 1.6, y: 2.8, z: 1.0, near: 0.8, far: 1.1, group: [ViewPoint.FRONT] },
  [BodyPart.FOREHEAD]: { x: 0, y: 4.8, z: 0, near: 1.9, far: 2.2, group: [ViewPoint.FRONT] },
  [BodyPart.EYE]: { x: 0.5, y: 2.7, z: 1.0, near: 0.1, far: 0.4, group: [ViewPoint.FRONT] },
  [BodyPart.NEAREYE]: { x: 0.4, y: 2.8, z: 0.51, near: 0.4, far: 0.7, group: [ViewPoint.FRONT] },
  [BodyPart.NEARNOSE]: { x: 0, y: 2.5, z: 0.89, near: 0.0, far: 0.3, group: [ViewPoint.FRONT] },
  [BodyPart.CHIN]: { x: 0.2, y: 1.7, z: 0.89, near: 0.3, far: 0.7, group: [ViewPoint.FRONT] },
  [BodyPart.REARHEAD]: { x: 0.0, y: 2.9, z: 1.0, near: 0.5, far: 1.0, group: [ViewPoint.REAR] },
  [BodyPart.BACKNECK]: { x: 0.0, y: 1.7, z: 0.5, near: 0.1, far: 0.4, group: [ViewPoint.REAR] },
  [BodyPart.HEAD]: { x: 0.0, y: 2.9, z: 1.01, near: 1.0, far: 1.7, group: [ViewPoint.FRONT, ViewPoint.REAR] },
  [BodyPart.NONE]: { x: 0, y: 0, z: 0, near: 0, far: 0, group: [ViewPoint.FRONT, ViewPoint.REAR] },
};

const vec = new THREE.Vector3();

const Character = ({ view, selection }: ICharacterProps) => {
  const [character] = useLoader(OBJLoader, "models/character.obj", (loader) => {
    // material.preload();
    // loader.setMaterials(material);
  }).children;

  const geometry = (character as THREE.Mesh).geometry;
  const modelRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    geometry.center();
  }, [character]);

  useFrame((state) => {
    if (!modelRef.current) return;
    if (view === ViewPoint.REAR) {
      if (modelRef.current.rotation.y < Math.PI) {
        modelRef.current.rotation.y += (Math.PI - modelRef.current.rotation.y) * 0.1;
      }
    } else {
      if (modelRef.current.rotation.y > 0) {
        modelRef.current.rotation.y -= modelRef.current.rotation.y * 0.1;
      }
    }
    state.camera.position.lerp(vec.set(0, 0, 19), 0.2);
  });

  return (
    <>
      <mesh ref={modelRef} geometry={geometry} scale={0.1} position={[0, -3, 0]}>
        <LayerMaterial toneMapped={false} alpha={1.0} lighting="physical" color={theme.color.blue_100}>
          {selection.map((part, i) => {
            const { x, y, z, near, far, group } = layerProps[part];
            const mirrorWeight = view === ViewPoint.REAR ? 0.1 : -0.1;
            const foreHeadMask = part === BodyPart.FOREHEAD ? theme.color.blue_300 : theme.color.blue_600;

            if (!group.includes(view)) {
              return <React.Fragment key={i}></React.Fragment>;
            } else {
              return (
                <React.Fragment key={i}>
                  <PointLayerComponent
                    colorA={theme.color.blue_600}
                    colorB={theme.color.blue_600}
                    colorAalpha={1.0}
                    colorBalpha={0}
                    mode="add"
                    near={near}
                    far={far}
                    origin={[x, y, z]}
                  />
                  <PointLayerComponent
                    colorA={foreHeadMask}
                    colorB={theme.color.blue_600}
                    colorAalpha={1.0}
                    colorBalpha={0}
                    mode="add"
                    near={near}
                    far={far}
                    origin={[-x + mirrorWeight, y, z]}
                  />
                </React.Fragment>
              );
            }
          })}
        </LayerMaterial>
      </mesh>
      {view === ViewPoint.REAR ? <BackLines /> : <FrontLines />}
    </>
  );
};

export default Character;
