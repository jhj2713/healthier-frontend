import styled, { css } from "styled-components";

const Container = styled.section<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background-color: transparent;
          color: ${({ theme }) => theme.color.blue};

          border: 0.1rem solid ${({ theme }) => theme.color.blue};
          padding: 0.7rem 0.9rem;
        `
      : css`
          background-color: ${({ theme }) => theme.color.grey_750};
          color: ${({ theme }) => theme.color.grey_300};

          padding: 0.8rem 1rem;
        `}

  border-radius: 6rem;

  font-weight: bolder;
`;

const Tag = ({ text, selected }: { text: string; selected: boolean }) => {
  return <Container selected={selected}>{text}</Container>;
};

export default Tag;
