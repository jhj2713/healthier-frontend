import { Heading_1 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainImgWrapper = styled.div`
  background: ${({ theme }) => theme.color.grey_700};
  height: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vw, 1vw) * 100);
`;

export const SeverityBarWrapper = styled.section`
  padding: 0 3.4rem;

  margin-top: 6rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3.6rem 4rem;
`;

export const TypicalSymptom = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 150%;

  white-space: pre-line;

  color: ${({ theme }) => theme.color.green};

  text-align: center;

  margin-bottom: 1rem;
`;

export const Name = styled(Heading_1)`
  color: ${({ theme }) => theme.color.grey_100};
  margin-bottom: 1.6rem;
`;

export const NecessaryMeasures = styled.p`
  color: ${({ theme }) => theme.color.grey_200};

  font-size: 1.3rem;
  font-weight: 200;
  line-height: 150%;

  white-space: pre-line;
  text-align: center;

  margin-bottom: 1.6rem;
`;
