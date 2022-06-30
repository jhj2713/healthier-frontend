import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
