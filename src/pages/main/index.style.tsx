import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Title = styled(Heading_3)`
  padding-top: 4rem;
  padding-left: 2.4rem;

  color: ${({ theme }) => theme.color.grey_100};

  .strong {
    font-weight: 500;
  }
`;

export const MainImage = styled.section`
  position: relative;
  margin-top: 4.5rem;

  display: flex;
  justify-content: center;
  overflow: hidden;

  .image {
    width: calc(var(--vw, 1vw) * 100 - 12rem);
    object-fit: contain;
  }
`;
