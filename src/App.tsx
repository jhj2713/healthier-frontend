import { Routes, Route, Navigate } from "react-router-dom";
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
import SymptomTypePage from "./pages/SymptomTypePage";

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
        <Route path="/diagnosis-list" element={<DiagnosisList />} />
        <Route path="/symptom" element={<SymptomPage />} />
        <Route path="/diag-loading" element={<DiagnosisLoading />} />
        <Route path="/result-loading" element={<ResultLoading />} />
        <Route path="/loading" element={<HomeLoading />} />
        <Route path="/symptom-type" element={<SymptomTypePage />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </section>
  );
}

export default App;
