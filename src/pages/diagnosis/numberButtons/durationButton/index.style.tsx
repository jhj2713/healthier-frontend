import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.grey_300};
  font-weight: 300;
`;

export const Input = styled.input`
  width: 10rem;
  padding: 0 0 0.8rem 0;
  margin: 0 1.2rem 0 0;

  font-size: 2rem;
  line-height: 1.25em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey_400};

  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_600};

  &:focus {
    border-bottom: 1px solid #5464f2;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.8rem;
    font-height: 1.27em;
  }

  /* remove number arrows */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Text = styled.span<{ color: string }>`
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${({ color }) => color};
  font-weight: 200;
`;

export const ButtonContainer = styled.div`
  margin-top: 6rem;
  section {
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`;
