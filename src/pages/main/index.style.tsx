import styled from "styled-components";
import { Heading_3 } from "src/lib/fontStyle";

export const Container = styled.main`
  padding-top: 5.6rem;
  height: calc(var(--vh, 1vh) * 100 - 9.6rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: ${({ theme }) => theme.color.grey_100};
`;

export const Title = styled(Heading_3)`
  margin-top: 4rem;
  margin-left: 2.4rem;

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

export const GuideText = styled.section`
  margin-top: 0.8rem;
  margin-left: 2.5rem;

  font-size: 1.5rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: 0.015rem;

  color: ${({ theme }) => theme.color.grey_300};

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;
