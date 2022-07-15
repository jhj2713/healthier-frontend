import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ContentHeader from "../components/header/ContentHeader";
import styled from "styled-components";
import Character from "../components/symptomPage/Character";
import Overlay from "../components/symptomPage/Overlay";
import SymptomHeader from "../components/header/SymptomHeader";

const Container = styled.section`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  background: #0c0d10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CanvasSection = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  z-index: 0;
  position: absolute;
`;

export const regions = [
  "",
  "머리 전체",
  "뒷머리",
  "뒷목",
  "눈 주위",
  "이마의 띠",
  "관자놀이",
  "눈",
  "턱",
  "코 주위",
];

const Symptom = () => {
  const [menu, setMenu] = useState(0);
  const [view, setView] = useState(0);

  return (
    <Container>
      <CanvasSection>
        <Canvas camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 1000 }}>
          <Suspense>
            <ambientLight intensity={0.2} />
            <directionalLight
              color="white"
              position={[0, 200, 0]}
              intensity={0.4}
            />
            <directionalLight
              color="white"
              position={[-100, 100, 50]}
              intensity={0.5}
            />
            <Character view={view} menu={menu} />
          </Suspense>
        </Canvas>
      </CanvasSection>
      <SymptomHeader />
      <Overlay menu={menu} setMenu={setMenu} view={view} setView={setView} />
    </Container>
  );
};

export default Symptom;
