import { useState } from "react";
import styled from "styled-components";
import Title from "../common/Title";
import Medicine from "./Medicine";
import MedicineDetail from "./MedicineDetail";
import { IMedicine } from "../../../interfaces/resultPage";
import { Body_3 } from "../../../lib/fontStyle";

const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;
`;
const Contents = styled.section`
  margin: 2rem 2.4rem 0 2.4rem;
`;
const Description = styled(Body_3)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-top: 0.6rem;
`;

const MedicinePage = ({ medicine }: { medicine: IMedicine[] }) => {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <Contents>
        <Title text="증상에 맞는 약을 추천해 드려요" />
        <Description>해당 의약품은 처방없이 구매할 수 있어요</Description>
        <Medicine selected={selected} setSelected={setSelected} medicine={medicine} />
        <MedicineDetail selected={selected} medicine={medicine} />
      </Contents>
    </Container>
  );
};

export default MedicinePage;
