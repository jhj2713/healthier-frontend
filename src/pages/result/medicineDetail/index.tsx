import { IMedicineDetail } from "../../../interfaces/resultPage";
import Description from "../description";
import MedicineTag from "../medicineTag";
import { Contents, Highlight } from "./index.style";

const MedicineDetail = ({ selected, medicine }: IMedicineDetail) => {
  return (
    <>
      <Contents>
        <section className="sub-title">효능•효과</section>
        <Description text={medicine[selected - 1].efficacy} />
      </Contents>
      {medicine[selected - 1].dosage_and_uses && (
        <Contents>
          <section className="sub-title">용량 및 용법</section>
          <MedicineTag tags={medicine[selected - 1].dosage_and_uses || []} />
        </Contents>
      )}
      <Contents>
        <section className="sub-title">복용 시 주의해주세요</section>
        {!medicine[selected - 1].caution.is_colored[0] ? (
          <Description text={medicine[selected - 1].caution.h1} />
        ) : (
          <>
            <Highlight>{medicine[selected - 1].caution.h1}</Highlight>
            <Description text={medicine[selected - 1].caution.h2} />
          </>
        )}
      </Contents>
      <Contents>
        <section className="sub-title">부작용</section>
        <MedicineTag tags={medicine[selected - 1].sideeffects} />
      </Contents>
    </>
  );
};

export default MedicineDetail;
