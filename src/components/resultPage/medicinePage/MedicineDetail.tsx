import styled from "styled-components";
import { IMedicineDetail } from "../../../interfaces/resultPage";
import { Body_2 } from "../../../lib/fontStyle";
import Description from "../common/Description";
import MedicineTag from "./MedicineTag";

const Contents = styled.section`
  margin-top: 2.2rem;
`;
const SubTitle = styled.section`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 300;

  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 0.2rem;
`;
const Highlight = styled(Body_2)`
  color: ${({ theme }) => theme.color.green};
`;

const MedicineDetail = ({ selected, medicine }: IMedicineDetail) => {
  return (
    <>
      <Contents>
        <SubTitle>효능•효과</SubTitle>
        <Description text={medicine[selected - 1].efficacy} />
      </Contents>
      {medicine[selected - 1].dosage_and_uses && (
        <Contents>
          <SubTitle>용량 및 용법</SubTitle>
          <MedicineTag tags={medicine[selected - 1].dosage_and_uses || []} />
        </Contents>
      )}
      <Contents>
        <SubTitle>복용 시 주의해주세요</SubTitle>
        <Highlight>{medicine[selected - 1].caution.h1}</Highlight>
        <Description text={medicine[selected - 1].caution.h2} />
      </Contents>
      <Contents>
        <SubTitle>부작용</SubTitle>
        <MedicineTag tags={medicine[selected - 1].sideeffects} />
      </Contents>
    </>
  );
};

export default MedicineDetail;
