import styled from "styled-components";
import Title from "./common/Title";
import TreatmentBox from "./common/TreatmentBox";

const Container = styled.section`
  padding-top: 9.6rem;
`;
const TitleBox = styled.section`
  margin: 4rem 0 4.5rem 2.4rem;
`;
const TreatmentList = styled.section`
  margin: 0 2.4rem;
`;

const treatment_arr = [
  {
    title: "광치료",
    content:
      "자연광에 해당하는 빛을 내는 장치를 20~30분 쬐어서 우리 몸의 생체시계를 정상화시켜요.",
  },
  {
    title: "멜라토닌",
    content:
      "불면증 치료에 사용되는 약물로, 멜라토닌 수용체를 활성화시켜 수면을 유도해요.",
  },
];

const TreatmentPage = () => {
  return (
    <Container>
      <TitleBox>
        <Title highlight="" text={"병원에 가면\n이런 치료를 받아요"} />
      </TitleBox>
      <TreatmentList>
        {treatment_arr.map((treat, idx) => (
          <TreatmentBox
            key={idx}
            title={treat.title}
            description={treat.content}
          />
        ))}
      </TreatmentList>
    </Container>
  );
};

export default TreatmentPage;
