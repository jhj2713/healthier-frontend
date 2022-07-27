import styled, { css } from "styled-components";
import { ITag } from "../../interfaces/component";

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

  padding: 0.8rem 1.2rem;
  border-radius: 6rem;

  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
`;

const Tag = ({ text, selected }: ITag) => {
  return <Container selected={selected}>{text}</Container>;
};

export default Tag;
