import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.grey_600};
  padding: 1.1rem 0;
  font-size: 2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.grey_300};
  text-align: center;
  font-weight: 300;

  &:focus {
    border-color: #5464f2;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.6rem;
    font-height: 1.5em;
    font-weight: 200;
  }
`;
