import styled from "styled-components";

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
    <Container>
      <Logo>Healthier</Logo>
    </Container>
  );
};

export default MainHeader;
