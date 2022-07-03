import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";

const Container = styled.section`
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-size: 3rem;
  color: ${({ theme }) => theme.color.grey_100};
`;
const Logo = styled.section`
  margin-bottom: 2.1rem;
`;

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Healthier</Logo>
      </Container>
    </HeaderContainer>
  );
};

export default MainHeader;
