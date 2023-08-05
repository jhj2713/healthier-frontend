import styled from "styled-components";

export const TextFieldContainer = styled.div`
  padding: 0 2rem;
  margin-top: 7rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 30rem;

  padding: 2.4rem;
  box-sizing: border-box;

  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.color.grey_600};

  background: transparent;

  font-family: Spoqa Han Sans Neo;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
  &::-webkit-scrollbar {
    width: 1.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.grey_600};
    background-clip: padding-box;
    border: 0.4rem solid transparent;
    border-radius: 0.8rem;
  }
`;
