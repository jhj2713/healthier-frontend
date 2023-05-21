import { Heading_3, Description } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5.6rem 2.4rem;
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 4rem;

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const DescriptionText = styled(Description)`
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const List = styled.div`
  margin-top: 0.6rem;
`;
