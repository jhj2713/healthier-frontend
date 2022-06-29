import styled, { css } from "styled-components";

const Container = styled.section<{ selected: boolean }>`
  padding: 0.8rem 1rem;

  ${({ selected }) =>
    selected
      ? css`
          background-color: transparent;
          color: ${({ theme }) => theme.color.blue};
          border: 0.1rem solid ${({ theme }) => theme.color.blue};
        `
      : css`
          background-color: ${({ theme }) => theme.color.grey_750};
          color: ${({ theme }) => theme.color.grey_300};
        `}

  border-radius: 6rem;
  box-sizing: border-box;
`;

const Tag = ({ text, selected }: { text: string; selected: boolean }) => {
  return <Container selected={selected}>{text}</Container>;
};

export default Tag;
