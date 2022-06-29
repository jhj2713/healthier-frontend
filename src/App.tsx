import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHeader />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
