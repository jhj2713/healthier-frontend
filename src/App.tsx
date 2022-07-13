import { Routes, Route } from "react-router-dom";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import Diagnosis from "./pages/Diagnosis";
import DiagnosisList from "./pages/DiagnosisList";
import SymptomPage from "./pages/SymptomPage";
import DiagnosisLoading from "./components/loading/DiagnosisLoading";
import ResultLoading from "./components/loading/ResultLoading";
import { useEffect } from "react";
import HomeLoading from "./components/loading/HomeLoading";

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
        {/* / route는 로그인되어있는 경우 List, 되어있지 않은 경우 Main */}
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/diagnosisList" element={<DiagnosisList />} />
        <Route path="/symptom" element={<SymptomPage />} />
        <Route path="/diagLoading" element={<DiagnosisLoading />} />
        <Route path="/resultLoading" element={<ResultLoading />} />
        <Route path="/loading" element={<HomeLoading />} />
      </Routes>
    </section>
  );
}

export default App;
