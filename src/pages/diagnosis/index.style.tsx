import styled from "styled-components";
import { Heading_3 } from "../../lib/fontStyle";

export const Container = styled.section`
  height: calc(100vh - 5.6rem);
  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;
  background-attachment: fixed;

  overflow: auto;
  overflow-y: overlay;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5.6rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Question = styled(Heading_3)`
  text-align: center;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 7rem;
  padding: 0 5rem;
`;
