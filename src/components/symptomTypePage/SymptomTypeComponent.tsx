import styled from "styled-components";
import { ISymptomTypeComponent } from "../../interfaces/component";

const Container = styled.section<{ select: boolean }>`
  height: 13.5rem;
  width: 100%;

  background: ${({ select, theme }) =>
    select ? theme.color.sub_blue : "transparent"};

  border: ${({ select, theme }) =>
    !select && `0.1rem solid ${theme.color.grey_650}`};
  border-radius: 1rem;
  box-sizing: border-box;

  position: relative;
`;
const Title = styled.section<{ select: boolean }>`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ select, theme }) =>
    select ? theme.color.blue : theme.color.grey_300};

  margin-top: 2rem;
  margin-left: 2rem;

  position: absolute;
`;
const TypeImage = styled.section`
  height: 13.5rem;
  width: 13.5rem;

  background: ${({ theme }) => theme.color.blue};

  position: absolute;
  right: 0;
`;

const SymptomTypeComponent = ({ selected, title }: ISymptomTypeComponent) => {
  return (
    <Container select={selected}>
      <Title select={selected}>{title}</Title>
      <TypeImage></TypeImage>
    </Container>
  );
};

export default SymptomTypeComponent;
