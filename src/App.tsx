import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Diagnosis, DiagnosisList, Information, MainPage, ResultPage, SymptomPage, SymptomTypePage } from "./pages";
import HomeLoading from "./components/loading/HomeLoading";
import { useAppSelector } from "./state";

function App() {
  const { authenticated } = useAppSelector((state) => state.auth);

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
        <Route path="/" element={authenticated ? <DiagnosisList /> : <MainPage />} />
        <Route path="/info" element={<Information />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/symptom" element={<SymptomPage />} />
        <Route path="/loading" element={<HomeLoading />} />
        <Route path="/symptom-type" element={<SymptomTypePage />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </section>
  );
}

export default App;
