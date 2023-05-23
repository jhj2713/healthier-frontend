import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { LayerMaterial } from "lamina";
import { IPointShader, ViewPoint } from "src/interfaces/symptomPage";
import { ICharacterProps } from "src/interfaces/symptomPage";

import theme from "src/lib/theme";
import { FrontLines, BackLines } from "../characterLine";
import PointLayerComponent from "./pointShader";

const hCord = [
  // x, y, z 좌표 + inner radius, outer radius
  [1.6, 2.8, 1.0, 0.8, 1.1], // 관자놀이
  [0, 4.8, 0, 1.9, 2.2], // 이마의 띄
  [0.5, 2.7, 1.0, 0.1, 0.4], // 눈
  [0.4, 2.8, 0.51, 0.4, 0.7], // 눈 주위
  [0, 2.5, 0.89, 0.0, 0.3], // 코 주위
  [0.2, 1.7, 0.89, 0.3, 0.7], // 턱
  [0.0, 2.9, 1.0, 0.5, 1.0], // 뒷머리
  [0.0, 2.9, 1.01, 1.0, 1.7], // 머리 전체
  [0.0, 1.7, 0.5, 0.1, 0.4], // 목 뒤
];

const vec = new THREE.Vector3();

const Character = ({ view, menu }: ICharacterProps) => {
  const [character] = useLoader(OBJLoader, "models/character.obj", (loader) => {
    // material.preload();
    // loader.setMaterials(material);
  }).children;
  // https://stackoverflow.com/questions/66818245/three-js-property-material-does-not-exist-on-type-object3d-error-when-get

  const geometry = (character as THREE.Mesh).geometry;
  const modelRef = useRef<THREE.Mesh>(null!);
  const layerRef = useRef<IPointShader>(null!);

  useEffect(() => {
    geometry.center();
  }, [character]);

  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.layers[0].near = 0;
      layerRef.current.layers[0].far = 0;
      layerRef.current.layers[1].near = 0;
      layerRef.current.layers[1].far = 0;
    }
  }, [view]);

  useFrame((state) => {
    if (view === ViewPoint.REAR) {
      if (modelRef.current.rotation.y < Math.PI) {
        modelRef.current.rotation.y += (Math.PI - modelRef.current.rotation.y) * 0.1;
      }
    } else {
      if (modelRef.current.rotation.y > 0) {
        modelRef.current.rotation.y -= modelRef.current.rotation.y * 0.1;
      }
    }
    if (menu && layerRef.current) {
      // 좌측 영역의 하이라이트
      layerRef.current.layers[0].origin.set(hCord[menu - 1][0], hCord[menu - 1][1], hCord[menu - 1][2]);
      layerRef.current.layers[0].near = hCord[menu - 1][3];
      layerRef.current.layers[0].far = hCord[menu - 1][4];
      layerRef.current.layers[0].colorA = theme.color.blue_3d;
      layerRef.current.layers[0].colorB = theme.color.blue_3d;
      // 우측 영역의 하이라이트

      // [이슈] 알 수 없는 이유로 양쪽 균형이 맞지 않음
      if (view === ViewPoint.REAR) {
        layerRef.current.layers[1].origin.set(-hCord[menu - 1][0] + 0.1, hCord[menu - 1][1], hCord[menu - 1][2]);
      } else {
        layerRef.current.layers[1].origin.set(-hCord[menu - 1][0] - 0.1, hCord[menu - 1][1], hCord[menu - 1][2]);
      }

      layerRef.current.layers[1].near = hCord[menu - 1][3];
      layerRef.current.layers[1].far = hCord[menu - 1][4];
      layerRef.current.layers[1].colorA = theme.color.blue_3d;
      layerRef.current.layers[1].colorB = theme.color.blue_3d;
    }
    if (menu === 2) {
      layerRef.current.layers[1].near = 1.4;
      layerRef.current.layers[1].far = 1.8;
      layerRef.current.layers[1].colorA = theme.color.blue_600;
      layerRef.current.layers[1].colorB = theme.color.blue_600;
    }

    state.camera.position.lerp(vec.set(0, 0, 19), 0.2);
  });

  return (
    <>
      <mesh ref={modelRef} geometry={geometry} scale={0.1} position={[0, -3, 0]}>
        <LayerMaterial ref={layerRef} toneMapped={false} alpha={1.0} lighting="physical" color={theme.color.blue_100}>
          <PointLayerComponent
            colorA={theme.color.blue_3d}
            colorB={theme.color.blue_3d}
            colorAalpha={1.0}
            colorBalpha={0}
            mode="add"
            near={0}
            far={0}
            origin={[0, 5, 0]}
          />
          <PointLayerComponent
            colorA={theme.color.blue_3d}
            colorB={theme.color.blue_3d}
            colorAalpha={1.0}
            colorBalpha={0}
            mode="add"
            near={0}
            far={0}
            origin={[0, 5, 0]}
          />
        </LayerMaterial>
      </mesh>
      {view === ViewPoint.REAR ? <BackLines /> : <FrontLines />}
    </>
  );
};

export default Character;
