import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
