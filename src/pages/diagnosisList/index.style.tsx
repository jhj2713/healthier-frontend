import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Title = styled(Heading_3)<{ margin: string }>`
  color: ${({ theme }) => theme.color.grey_200};

  margin: ${({ margin }) => margin};

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const List = styled.div`
  margin-top: 0.6rem;
`;
