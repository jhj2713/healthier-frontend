import styled from "styled-components";
import { Body_2, Heading_1, Body_4 } from "src/lib/fontStyle";

export const Container = styled.section`
  padding-bottom: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(var(--vw, 1vw) * 100 + 27.4rem);
`;

export const TagContainer = styled.section`
  margin-top: 2.8rem;

  section + section {
    margin-left: 0.8rem;
  }
`;

export const CoverImage = styled.img`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vw, 1vw) * 100);
  border: 0;
`;

export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 31rem;

  margin: 3.2rem 0 6.6rem 0;
`;

export const SeverityText = styled(Body_2)`
  color: ${({ theme }) => theme.color.green};

  margin-bottom: 1rem;
`;

export const Title = styled(Heading_1)`
  color: ${({ theme }) => theme.color.grey_100};

  margin-bottom: 1.6rem;
`;

export const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;
`;
