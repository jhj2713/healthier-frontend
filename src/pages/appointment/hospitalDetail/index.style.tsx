import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div``;

export const Flex = styled.div<{ gap?: number; direction?: string; align?: string; justify?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  gap: ${({ gap }) => gap ?? 0}rem;
  align-items: ${({ align }) => align ?? "center"};
  justify-content: ${({ justify }) => justify ?? "center"};
`;

export const ContentContainer = styled(Flex)`
  padding: 2.4rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;
`;

export const Description = styled(Body_2)<{ color: string }>`
  display: inline-block;
  color: ${({ color }) => color};
`;

export const SubDescription = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;
`;

export const Button = styled.div`
  width: 100%;
  padding: 1.4rem 6.2rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  cursor: pointer;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.blue};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_100};
`;

export const DescriptionTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: rgba(84, 100, 242, 0.18);
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.color.sub_blue};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;

  margin-right: 0.6rem;
`;

export const Line = styled.div`
  height: 0.8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey_800};
`;
