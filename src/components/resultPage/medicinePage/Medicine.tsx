import { Dispatch } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;

  margin-top: 2rem;
`;
const MedicineImg = styled.section<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.6rem;
  height: 6.6rem;

  background-color: rgba(84, 100, 242, 0.5);
  border-radius: 50%;
  border: ${({ selected, theme }) =>
    selected && `0.15rem solid ${theme.color.grey_300}`};
  box-sizing: border-box;

  font-size: 3.2rem;

  opacity: ${({ selected }) => !selected && 0.5};
`;
const MedicineBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 1.6rem;
  }
`;
const MedicineText = styled.section<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.color.grey_200 : theme.color.grey_600};

  font-weight: 100;
  font-size: 1.2rem;
  line-height: 150%;

  margin-top: 0.7rem;
`;

const Medicine = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<number>;
}) => {
  return (
    <Container>
      <MedicineBox onClick={() => setSelected(1)}>
        <MedicineImg selected={selected === 1}>💊</MedicineImg>
        <MedicineText selected={selected === 1}>항히스타민제</MedicineText>
      </MedicineBox>
      <MedicineBox onClick={() => setSelected(2)}>
        <MedicineImg selected={selected === 2}>💊</MedicineImg>
        <MedicineText selected={selected === 2}>레돌민</MedicineText>
      </MedicineBox>
    </Container>
  );
};

export default Medicine;
