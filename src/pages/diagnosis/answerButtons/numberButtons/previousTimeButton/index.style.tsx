import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.7rem;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-top: 6.6rem;
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
`;

export const InputWrapper = styled.div`
  width: 10rem;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-bottom: 1px;
`;

export const Text = styled.span`
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.grey_200};
  font-weight: 200;

  &.time-type {
    color: ${({ theme }) => theme.color.sub_blue};
    font-weight: 300;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.button<{ selected: boolean }>`
  width: 5.6rem;
  height: 8.4rem;

  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 300;

  color: ${({ theme, selected }) => (selected ? theme.color.sub_blue : theme.color.grey_300)};
  background: ${({ selected }) => (selected ? "rgba(109, 123, 242, 0.24)" : "transparent")};

  border: none;
  border-radius: 1.2rem;
`;
