import styled from "styled-components";
import { ISymptomTypeComponent } from "../../interfaces/component";

const Container = styled.section<{ select: boolean }>`
  height: 13.5rem;
  width: 100%;

  display: flex;
  justify-content: center;

  background: ${({ select, theme }) =>
    select ? theme.color.sub_blue : "transparent"};

  border: ${({ select, theme }) =>
    !select && `0.1rem solid ${theme.color.grey_650}`};
  border-radius: 1rem;
  box-sizing: border-box;
`;
const Title = styled.section<{ select: boolean }>`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ select, theme }) =>
    select ? theme.color.blue : theme.color.grey_300};

  margin-top: 2rem;
`;

const SymptomTypeComponent = ({ selected, title }: ISymptomTypeComponent) => {
  return (
    <Container select={selected}>
      <Title select={selected}>{title}</Title>
    </Container>
  );
};

export default SymptomTypeComponent;
