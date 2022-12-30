import styled, { css } from "styled-components";

export const Container = styled.section<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background: ${({ theme }) => theme.color.sub_blue};
          color: ${({ theme }) => theme.color.blue};
        `
      : css`
          background: ${({ theme }) => theme.color.grey_750};
          color: ${({ theme }) => theme.color.grey_300};
        `}

  padding: 0.8rem 1.2rem;
  border-radius: 6rem;

  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
`;
