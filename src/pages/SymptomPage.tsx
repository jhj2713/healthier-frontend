import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Character from "../components/symptomPage/Character";
import Overlay from "../components/symptomPage/Overlay";
import SymptomHeader from "../components/header/SymptomHeader";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../lib/theme";

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

export const regions = ["", "관자놀이", "이마의 띠", "눈", "눈 주위", "코 주위", "턱", "뒷머리", "머리 전체", "뒷목"];

const Point = ({ x, y, z }: { x: number; y: number; z: number }) => {
  return (
    <mesh position={[x, y, z]}>
      <sphereBufferGeometry args={[0.03, 40, 40]} attach="geometry" />
      <meshBasicMaterial color={theme.color.blue} attach="material" />
    </mesh>
  );
};

const Symptom = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [menu, setMenu] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <CanvasSection>
        <Canvas camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 1000 }}>
          <Suspense>
            <ambientLight intensity={0.1} color={theme.color.white} />
            <directionalLight color={theme.color.white} position={[0, 200, 50]} intensity={0.4} />
            <directionalLight color={theme.color.white} position={[-100, 100, 0]} intensity={0.8} />
            <directionalLight color={theme.color.white} position={[0, 0, 100]} intensity={0.5} />
            <Character view={view} menu={menu} />

            {view ? (
              <></>
            ) : (
              <>
                <Point x={-0.56} y={0.05} z={1.0} />
                <Point x={0.5} y={-0.35} z={0.95} />
                <Point x={0.0} y={-0.5} z={1.3} />
              </>
            )}
          </Suspense>
        </Canvas>
      </CanvasSection>
      <SymptomHeader />
      <Overlay menu={menu} setMenu={setMenu} view={view} setView={setView} />
    </Container>
  );
};

export default Symptom;
