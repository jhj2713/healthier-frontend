import styled from "styled-components";
import { Heading_5 } from "../../../lib/fontStyle";

export const Container = styled.section<{ severity: number }>`
  position: relative;
  height: 16rem;
  background: ${({ theme, severity }) =>
    severity === 3 ? theme.color.sub_blue : severity === 2 ? theme.color.blue_500 : severity === 1 ? theme.color.blue_700 : theme.color.blue_800};
  background-size: cover;

  border-radius: 0.8rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const Box = styled.section`
  padding: 1.4rem 1.2rem 0 1.4rem;
`;

export const Title = styled(Heading_5)<{ severity: number }>`
  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue_800 : theme.color.grey_200)};

  width: 12rem;

  font-size: 2rem;
`;

export const Date = styled.section<{ severity: number }>`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue_700 : theme.color.sub_blue)};

  margin-top: 0.4rem;
`;

export const Tag = styled.section<{ severity: number }>`
  position: absolute;
  bottom: 0;
  display: inline;

  background-color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue : severity === 2 ? theme.color.blue_700 : theme.color.sub_blue)};
  color: ${({ theme, severity }) => (severity === 3 || severity === 2 ? theme.color.grey_200 : theme.color.blue)};

  font-weight: 300;
  font-size: 1.3rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.6rem 1rem;
  margin-bottom: 1.2rem;
  border-radius: 3rem;
`;

export const BannerImg = styled.section`
  position: absolute;
  right: 0;

  img {
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;
