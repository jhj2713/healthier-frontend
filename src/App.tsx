import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { useEffect } from "react";
import styled from "styled-components";
import Diagnosis from "./pages/Diagnosis";

const Container = styled.section``;

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
      </Routes>
    </Container>
  );
}

export default App;
