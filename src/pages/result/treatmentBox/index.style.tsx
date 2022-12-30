import styled from "styled-components";
import { Heading_5 } from "src/lib/fontStyle";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;

  padding: 2rem 2.4rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 0.6rem;
`;
