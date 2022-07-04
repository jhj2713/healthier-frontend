import { Route, Routes } from "react-router-dom";
import ContentHeader from "./ContentHeader";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route
          path="/info"
          element={<ContentHeader back={false} text="정보 수집" />}
        />
        <Route
          path="/diagnosis"
          element={<ContentHeader back={false} text="자가진단" />}
        />
        <Route path="/*" element={<></>} />
      </Routes>
    </>
  );
};

export default Header;
