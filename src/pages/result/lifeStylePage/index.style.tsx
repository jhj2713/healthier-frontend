import styled from "styled-components";
import { RootContainer } from "../lib/index.style";

export const Container = styled(RootContainer)`
  padding-top: 5.6rem;
`;

export const TitleWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2.4rem;
`;

export const LifeStyleList = styled.ul``;

export const LifeStyleItem = styled.li<{ idx: number }>`
  display: flex;
  background-color: ${({ theme, idx }) => (idx % 2 === 0 ? theme.color.grey_800 : "transparent")};
  padding: 1.6rem 2.4rem;
  gap: 1.6rem;

  .icon {
    margin-top: 1rem;
    font-size: 2.3rem;
  }
`;

export const Contents = styled.div`
  width: 100%;
  white-space: pre-line;

  .title {
    line-height: 150%;
    font-size: 1.6rem;
    font-weight: 300;

    color: ${({ theme }) => theme.color.grey_200};

    margin-bottom: 0.2rem;
  }
`;
