import styled from "styled-components";
import { Body_3 } from "src/lib/fontStyle";

export const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;

  .contents {
    margin: 2rem 2.4rem 0 2.4rem;
  }
`;

export const Description = styled(Body_3)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-top: 0.6rem;
`;
