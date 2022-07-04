import styled, { css } from "styled-components";

const Container = styled.section<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.color.sub_blue};
          color: ${({ theme }) => theme.color.blue};
        `
      : css`
          background-color: ${({ theme }) => theme.color.grey_750};
          color: ${({ theme }) => theme.color.grey_300};
        `}

  padding: 0.8rem 1rem;
  border-radius: 6rem;

  font-weight: 300;
`;

const Tag = ({ text, selected }: { text: string; selected: boolean }) => {
  return <Container selected={selected}>{text}</Container>;
};

export default Tag;
