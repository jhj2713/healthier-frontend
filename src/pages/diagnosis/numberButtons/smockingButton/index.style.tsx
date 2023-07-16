import styled from "styled-components";

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 10rem;
  padding: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.color.grey_300};
  font-size: 1.8rem;
  line-height: 150%;
  font-weight: 200;
`;

export const InputWrapper = styled.div`
  width: 12rem;
`;
