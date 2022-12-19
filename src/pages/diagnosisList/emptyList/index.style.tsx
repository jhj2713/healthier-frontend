import styled from "styled-components";
import { Heading_3, Body_2 } from "../../../lib/fontStyle";

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin: 4rem 2.4rem 0 2.4rem;

  .highlight {
    font-weight: 500;
  }
`;

export const EmptyContainer = styled.section`
  padding-top: 2rem;

  height: calc((var(--vw, 1vw) * 100 - 10rem) * 1.096);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const ImageBox = styled.section`
  position: absolute;

  width: calc(var(--vw, 1vw) * 100 - 10rem);

  img {
    width: 100%;
  }
`;

export const EmptyText = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};

  position: absolute;

  bottom: 0;
  margin-bottom: 6.4rem;
`;
