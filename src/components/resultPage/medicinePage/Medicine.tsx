import { Dispatch } from "react";
import styled from "styled-components";
import { IMedicine, IMedicineProps } from "../../../interfaces/resultPage";
import { Description } from "../../../lib/fontStyle";

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
const MedicineText = styled(Description)<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.color.grey_200 : theme.color.grey_600};

  margin-top: 0.7rem;
`;

const Medicine = ({ selected, setSelected, medicine }: IMedicineProps) => {
  return (
    <Container>
      {medicine.map((med, idx) => (
        <MedicineBox key={idx} onClick={() => setSelected(idx + 1)}>
          <MedicineImg selected={selected === idx + 1}>💊</MedicineImg>
          <MedicineText selected={selected === idx + 1}>
            {med.name}
          </MedicineText>
        </MedicineBox>
      ))}
    </Container>
  );
};

export default Medicine;
