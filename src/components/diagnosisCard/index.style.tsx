import { Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section<{ severity: number; isSquare: boolean }>`
  position: relative;
  height: ${({ isSquare }) => (isSquare ? "calc(var(--vw, 1vw) * 100 - 4.8rem)" : "16rem")};
  background: ${({ theme, severity }) =>
    severity === 3
      ? theme.color.sub_blue
      : severity === 2
      ? theme.color.blue_500
      : severity === 1
      ? theme.color.blue_700
      : theme.color.blue_800};
  background-size: cover;

  border-radius: 0.8rem;

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

export const TitleContainer = styled.div`
  margin-bottom: 0.6rem;
`;

export const Title = styled(Heading_5)<{ severity: number }>`
  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue_800 : theme.color.grey_200)};

  width: 12rem;

  font-size: 2rem;
`;

export const DateItem = styled.section<{ severity: number }>`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue_700 : theme.color.sub_blue)};

  margin-top: 0.4rem;
`;

export const Tag = styled.section<{ severity: number }>`
  background-color: ${({ theme, severity }) =>
    (severity === 3 && theme.color.blue) || (severity === 2 && theme.color.blue_700) || (severity <= 1 && theme.color.sub_blue)};
  color: ${({ theme, severity }) => (severity === 3 || severity === 2 ? theme.color.grey_200 : theme.color.blue)};

  font-weight: 300;
  font-size: 1.3rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.6rem 1rem;
  border-radius: 3rem;
`;

export const BannerImgContainer = styled.section`
  position: absolute;
  right: 0;
`;

export const BannerImg = styled.img<{ isSquare: boolean }>`
  height: ${({ isSquare }) => (isSquare ? "calc(var(--vw, 1vw) * 100 - 4.8rem)" : "16rem")};
  border-radius: ${({ isSquare }) => (isSquare ? "0.8rem" : "0 0.8rem 0.8rem 0")};
`;

export const BannerShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: calc(var(--vw, 1vw) * 100 - 4.8rem);
  width: 100%;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0.35) 0%, rgba(19, 20, 22, 0) 100%);
  transform: rotate(-180deg);
`;
