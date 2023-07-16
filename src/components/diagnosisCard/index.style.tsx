import { Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";
import type { TSeverity } from "src/interfaces/diagnoseApi/diagnosis";

export const Container = styled.section<{ severity: TSeverity; isSquare: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isSquare }) => (isSquare ? "calc(var(--vw, 1vw) * 100 - 4.8rem)" : "16rem")};

  background: ${({ theme, severity }) =>
    severity === "관리가 필요해요" ? theme.color.blue_300 : severity === "병원에 가는 걸 추천해요" ? theme.color.blue_500 : "#2745A9"};
  background-size: cover;

  border-radius: 0.8rem;

  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

export const Box = styled.section<{ isDate: Date | null }>`
  position: relative;

  height: 100%;
  box-sizing: border-box;
  padding: 2rem 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: ${({ isDate }) => (isDate ? "space-between" : "flex-end")};
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.6rem;
`;

export const Title = styled(Heading_5)<{ severity: TSeverity }>`
  color: ${({ theme, severity }) => (severity === "관리가 필요해요" ? theme.color.blue_800 : theme.color.grey_200)};

  width: 12rem;

  font-size: 2rem;
  line-height: 140%;
  font-weight: 300;
`;

export const DateItem = styled.section<{ severity: number }>`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue_700 : theme.color.sub_blue)};

  margin-top: 0.4rem;
`;

export const Chip = styled.section<{ severity: TSeverity }>`
  background-color: ${({ theme, severity }) =>
    severity === "관리가 필요해요"
      ? theme.color.blue
      : severity === "병원에 가는 걸 추천해요"
      ? theme.color.blue_700
      : theme.color.sub_blue};
  color: ${({ theme, severity }) => (severity === "병원에 꼭 가야해요" ? theme.color.blue : theme.color.grey_100)};

  font-weight: 300;
  font-size: 1.3rem;
  line-height: 150%;
  letter-spacing: -0.05rem;

  padding: 0.6rem 1rem;
  border-radius: 3rem;
`;

export const IllustrationWrapper = styled.section`
  position: absolute;
  right: 0;
  height: 100%;
`;

export const Illustration = styled.img<{ isSquare: boolean }>`
  border-radius: ${({ isSquare }) => (isSquare ? "0.8rem" : "0 0.8rem 0.8rem 0")};
  height: 100%;
  width: fit-content;
`;

export const IllustrationShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 100%;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0.35) 0%, rgba(19, 20, 22, 0) 100%);
  transform: rotate(-180deg);
`;
