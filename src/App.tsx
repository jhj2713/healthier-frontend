import { Routes, Route } from "react-router-dom";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import Diagnosis from "./pages/Diagnosis";
import DiagnosisList from "./pages/DiagnosisList";
import SymptomPage from "./pages/SymptomPage";
import Loading from "./pages/Loading";
import { useEffect } from "react";

function App() {
  const handleResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/diagnosisList" element={<DiagnosisList />} />
        <Route path="/symptom" element={<SymptomPage />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </section>
  );
}

export default App;
