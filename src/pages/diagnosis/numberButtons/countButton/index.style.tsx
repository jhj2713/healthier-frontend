import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  height: 5.2rem;
  background: transparent;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.grey_650};
  border-radius: 3rem;
  outline: none;
  color: ${({ theme }) => theme.color.grey_300};
  font-size: 1.6rem;
  line-height: 1.5em;

  &:focus {
    border-color: #5464f2;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.6rem;
    line-height: 1.5em;
  }
`;

export const Text = styled.span`
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.grey_300};
  margin-left: 1.2rem;
  font-weight: 200;
`;
