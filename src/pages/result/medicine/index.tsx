import { IMedicineProps } from "src/interfaces/resultPage";
import { Container, MedicineBox, MedicineImg, MedicineText } from "./index.style";

const Medicine = ({ selected, setSelected, medicine }: IMedicineProps) => {
  return (
    <Container>
      {medicine.map((med, idx) => (
        <MedicineBox key={idx} onClick={() => setSelected(idx + 1)}>
          <MedicineImg selected={selected === idx + 1}>
            <img alt="medicine" src={med.image} width={64} height={64} />
          </MedicineImg>
          <MedicineText selected={selected === idx + 1}>{med.name}</MedicineText>
        </MedicineBox>
      ))}
    </Container>
  );
};

export default Medicine;
