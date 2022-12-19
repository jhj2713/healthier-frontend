import styled from "styled-components";
import { Description } from "src/lib/fontStyle";

export const Container = styled.section`
  display: flex;

  margin-top: 2rem;
`;

export const MedicineImg = styled.section<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.6rem;
  height: 6.6rem;

  background-color: rgba(84, 100, 242, 0.5);
  border-radius: 50%;
  border: ${({ selected, theme }) => selected && `0.15rem solid ${theme.color.grey_300}`};
  box-sizing: border-box;

  opacity: ${({ selected }) => !selected && 0.5};
`;

export const MedicineBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 1.6rem;
  }
`;

export const MedicineText = styled(Description)<{ selected: boolean }>`
  color: ${({ theme, selected }) => (selected ? theme.color.grey_300 : theme.color.grey_600)};

  margin-top: 0.7rem;
`;
