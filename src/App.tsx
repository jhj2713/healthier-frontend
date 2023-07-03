import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import {
  Diagnosis,
  MyDiagnosis,
  Information,
  MainPage,
  ResultPage,
  SymptomPage,
  SymptomTypePage,
  DiagnosisList,
  SignUp,
  Error,
  Test,
} from "./pages";
import { useAppSelector } from "./state";

const handleResize = () => {
  const screenRatio = 0.7;
  const vh = window.innerHeight * 0.01;
  const vw = Math.min(window.innerWidth * 0.01, vh * screenRatio);

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;

  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Container = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: (var(--vh, 1vh) * 100);
`;

function App() {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Main>
      <Container>
        <ErrorBoundary FallbackComponent={Error} onReset={reset}>
          <Routes>
            <Route path="/" element={authenticated ? <MyDiagnosis /> : <MainPage />} />
            <Route path="/info" element={<Information />} />
            <Route path="/diagnosis-list" element={<DiagnosisList />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/symptom" element={<SymptomPage />} />
            <Route path="/symptom-type" element={<SymptomTypePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/test" element={<Test />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </Main>
  );
}

export default App;
