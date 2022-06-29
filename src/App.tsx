import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.color.grey_100};
  font-size: 2rem;
`;

function App() {
  return <Container>Healthier</Container>;
}

export default App;
