import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Diagnosis,
  DiagnosisList,
  Information,
  MainPage,
  ResultPage,
  SymptomPage,
  SymptomTypePage,
} from "./pages";
import HomeLoading from "./components/loading/HomeLoading";
import { useAppSelector } from "./state";
import styled from "styled-components";
const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

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

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Main>
      <Container>
        <Routes>
          <Route
            path="/"
            element={authenticated ? <DiagnosisList /> : <MainPage />}
          />
          <Route path="/info" element={<Information />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/symptom" element={<SymptomPage />} />
          <Route path="/loading" element={<HomeLoading />} />
          <Route path="/symptom-type" element={<SymptomTypePage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </Main>
  );
}

export default App;
