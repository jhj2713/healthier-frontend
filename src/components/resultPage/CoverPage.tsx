import styled from "styled-components";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_100};
`;

const CoverPage = () => {
  return <Container>커버페이지</Container>;
};

export default CoverPage;
