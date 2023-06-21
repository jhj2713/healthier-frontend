import styled from "styled-components";

export const Container = styled.div`
  margin-top: 11.2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span<{ color: string }>`
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${({ color }) => color};
  font-weight: 200;

  &.duration-type {
    margin-right: 0.4rem;
    font-weight: 300;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const DurationButton = styled.button<{ selected: boolean }>`
  font-size: 1.6rem;
  line-height: 1rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  padding: 1.2rem 1.8rem;
  border: 1px solid #5464f2;
  border-radius: 2rem;
  background: ${({ selected }) => (selected ? "#5464F2" : "transparent")};
  color: ${({ selected }) => (selected ? "#fff" : "#5464F2")};
  cursor: pointer;
`;
