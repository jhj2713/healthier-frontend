import styled from "styled-components";
import { Heading_3, Heading_5 } from "src/lib/fontStyle";

export const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    font-weight: 500;
  }
`;

export const Description = styled(Heading_5)`
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 0.6rem;

  .highlight {
    font-weight: 500;
  }
`;

export const Icon = styled.img`
  width: 26rem;
  height: 24rem;
`;
