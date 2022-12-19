import { useState } from "react";
import Title from "../../../components/title";
import Medicine from "../medicine";
import MedicineDetail from "../medicineDetail";
import { IMedicine } from "../../../interfaces/resultPage";
import { Container, Description } from "./index.style";

const MedicinePage = ({ medicine }: { medicine: IMedicine[] }) => {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <section className="contents">
        <Title text="증상에 맞는 약을 추천해 드려요" />
        <Description>해당 의약품은 처방없이 구매할 수 있어요</Description>
        <Medicine selected={selected} setSelected={setSelected} medicine={medicine} />
        <MedicineDetail selected={selected} medicine={medicine} />
      </section>
    </Container>
  );
};

export default MedicinePage;
