import styled from "styled-components";

export const Input = styled.input<{ placeholderSize: string }>`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.grey_600};
  padding: 1.4rem 1.6rem;
  font-size: 2rem;
  line-height: 150%;
  color: ${({ theme }) => theme.color.grey_300};
  text-align: center;
  font-weight: 200;

  &:focus {
    border-color: #5464f2;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: ${({ placeholderSize }) => placeholderSize};
    font-height: 150%;
    font-weight: 200;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label<{ labelGap: string }>`
  display: block;
  margin-bottom: ${({ labelGap }) => labelGap};

  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};
`;
