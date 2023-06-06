import styled from "styled-components";
import { Body_1 } from "src/lib/fontStyle";

export const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;

  .contents {
    margin: 2rem 2.4rem 0 2.4rem;
    width: calc(var(--vw, 1vw) * 100 - 4.8rem);
  }
`;

export const DescriptionBox = styled.section<{ top: number; bottom: number }>`
  margin-top: ${({ top }) => top}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;

export const SymptomBox = styled.section`
  margin-bottom: 6rem;
`;

export const SymptomText = styled(Body_1)`
  font-weight: 300;
  color: ${({ theme }) => theme.color.grey_300};
`;

export const SymptomTags = styled.section`
  margin-top: 1.2rem;

  section {
    margin-right: 0.8rem;
  }
`;
