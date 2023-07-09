import { Body_2 } from "src/lib/fontStyle";
import styled, { css } from "styled-components";

export const Container = styled(Body_2)<{
  selected: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.8rem;
  font-weight: 200;

  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.color.sub_blue};
          color: ${({ theme }) => theme.color.blue};
        `
      : css`
          background-color: transparent;
          color: ${({ theme }) => theme.color.grey_600};
          border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
        `}

  border-radius: 0.8rem;
  box-sizing: border-box;
`;
