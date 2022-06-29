import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Information from "./pages/Information";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
