import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";

const Container = styled.section`
  height: inherit;

  display: flex;
  justify-content: center;

  font-size: 3rem;
  color: ${({ theme }) => theme.color.grey_100};
`;
const Logo = styled.img`
  margin-top: 1.6rem;
`;

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo alt="logo" src="/images/Logo.png" height={24} />
      </Container>
    </HeaderContainer>
  );
};

export default MainHeader;
