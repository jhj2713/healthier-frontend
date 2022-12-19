import styled from "styled-components";
import { Heading_3, Body_1, Body_3 } from "../../../lib/fontStyle";

export const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    font-weight: 500;
  }
`;

export const Icon = styled.section`
  width: 26rem;
  height: 24.8rem;

  margin: 2rem 5rem 1.2rem 5rem;
`;

export const BottomTextBox = styled.section`
  text-align: center;
`;

export const Tips = styled(Body_3)`
  font-weight: 200;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.grey_300};
`;

export const Description = styled(Body_1)`
  margin-top: 0.8rem;
  width: 17.2rem;

  color: ${({ theme }) => theme.color.grey_400};
`;
