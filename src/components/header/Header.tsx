import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ContentHeader from "./ContentHeader";
import MainHeader from "./MainHeader";

const Container = styled.header`
  height: 9.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};
`;

const Header = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route
          path="/info"
          element={<ContentHeader back={false} text="정보 수집" />}
        />
      </Routes>
    </Container>
  );
};

export default Header;
