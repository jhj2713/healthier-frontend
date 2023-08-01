import { useState } from "react";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import MedicineDetail from "./medicineDetail";
import MedicinesList from "./medicinesList";
import type { TMedicinesData } from "src/interfaces/resultPage";

interface IMedicinesPageProps {
  data: TMedicinesData;
}

const MedicinePage = ({ data }: IMedicinesPageProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const handleClickMedicine = (idx: number) => {
    setSelectedIdx(idx);
  };

  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Title text="증상에 맞는 약을 추천해드려요" subTitle="해당 의약품은 처방없이 구매할 수 있어요" />
      </Styled.TitleWrapper>
      <MedicinesList medicines={data.medicines} selectedIdx={selectedIdx} handleClickMedicine={handleClickMedicine} />
      <MedicineDetail medicine={data.medicines[selectedIdx]} />
    </Styled.Container>
  );
};

export default MedicinePage;
