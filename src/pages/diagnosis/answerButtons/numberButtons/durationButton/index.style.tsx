import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6.6rem;
  padding: 0 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.span`
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.grey_200};
  font-weight: 200;
  margin-bottom: 0.1rem;

  &.duration-type {
    margin-right: 0.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color.sub_blue};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 7.3rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const DurationButton = styled.button<{ isSelected: boolean }>`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 300;

  padding: 3rem 0;
  width: 100%;
  max-width: 7.2rem;

  border: 1px solid ${({ isSelected, theme }) => (isSelected ? "transparent" : theme.color.grey_650)};
  border-radius: 1.2rem;

  background: ${({ isSelected }) => (isSelected ? "rgba(109, 123, 242, 0.24)" : "transparent")};
  color: ${({ isSelected, theme }) => (isSelected ? theme.color.sub_blue : theme.color.grey_300)};

  cursor: pointer;
`;
