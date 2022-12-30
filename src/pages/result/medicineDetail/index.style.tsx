import styled from "styled-components";
import { Body_2 } from "src/lib/fontStyle";

export const Contents = styled.section`
  margin-top: 2.2rem;

  .sub-title {
    font-size: 1.6rem;
    line-height: 150%;
    font-weight: 300;

    color: ${({ theme }) => theme.color.grey_200};

    margin-bottom: 0.2rem;
  }
`;

export const Highlight = styled(Body_2)`
  color: ${({ theme }) => theme.color.green};
`;
