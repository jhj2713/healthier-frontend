import styled from "styled-components";

const Container = styled.section`
  position: absolute;
  background-color: ${({ theme }) => theme.color.grey_650};
  display: flex;

  padding: 1.2rem;
  border-radius: 0.8rem;
  :before {
    content: "";

    border-color: ${({ theme }) => theme.color.grey_650} transparent;
    border-style: solid;
    border-width: 0 1.3rem 1.6rem 1.3rem;
    border-radius: 0.1rem;

    display: block;
    left: 0.4rem;
    position: absolute;
    top: -0.8rem;
  }
`;
const TextBox = styled.section`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 150%;
  color: ${({ theme }) => theme.color.grey_300};
`;

const Tooltip = () => {
  return (
    <Container>
      <TextBox>클릭하여 상세 설명을 확인하세요!</TextBox>
    </Container>
  );
};

export default Tooltip;
