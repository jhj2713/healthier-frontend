import styled from "styled-components";

export const Background = styled.section<{ idx: number }>`
  display: flex;
  background-color: ${({ theme, idx }) => (idx % 2 === 0 ? theme.color.grey_800 : "transparent")};

  .icon {
    margin-top: 2.1rem;
    margin-left: 2.4rem;

    font-size: 2.3rem;
  }
`;

export const Contents = styled.section`
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  width: calc(var(--vw, 1vw) * 100 - 4.8rem);

  .title {
    line-height: 150%;
    font-size: 1.6rem;
    font-weight: 300;

    color: ${({ theme }) => theme.color.grey_200};

    margin-bottom: 0.2rem;
  }
`;
