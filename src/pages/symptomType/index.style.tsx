import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 5.6rem);

  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 7rem;
  margin-bottom: 6.6rem;
`;

export const SymptomContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  & + & {
    margin-top: 1.2rem;
  }
`;
