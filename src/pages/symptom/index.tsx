import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Character from "./character";
import Overlay from "./overlay";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "src/lib/theme";
import ContentHeader from "src/components/contentHeader";
import { Container, CanvasSection } from "./index.style";
import { BodyPart, ViewPoint } from "src/interfaces/symptomPage";

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

  const [selection, setSelection] = useState<BodyPart[]>([]);
  const [view, setView] = useState<ViewPoint>(ViewPoint.FRONT);

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
            <Character view={view} selection={selection} />
            {view === ViewPoint.FRONT && (
              <>
                <Point x={-0.56} y={0.05} z={1.0} />
                <Point x={0.5} y={-0.35} z={0.95} />
                <Point x={0.0} y={-0.5} z={1.3} />
              </>
            )}
          </Suspense>
        </Canvas>
      </CanvasSection>
      <ContentHeader back={true} backCallback={() => navigate(-1)} exit={true} exitCallback={() => navigate("/")}>
        {""}
      </ContentHeader>
      <Overlay selection={selection} setSelection={setSelection} view={view} setView={setView} />
    </Container>
  );
};

export default Symptom;
