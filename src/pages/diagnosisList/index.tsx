import DiagnosisCard from "src/components/diagnosisCard";
import MainHeader from "src/components/mainHeader";
import { Container, DescriptionText, List, Title } from "./index.style";

const mockData = {
  most_likely: [
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce90a556e36933184b0fbf.png",
      record: {
        diagnosis_id: "62ce90a556e36933184b0fbf",
        is_created: "2023-01-13T20:59:45.055",
        severity: 2,
        title: "정신생리적 불면증",
      },
    },
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce900456e36933184b0fba.png",
      record: {
        diagnosis_id: "62ce908856e36933184b0fbd",
        is_created: "2023-01-13T20:59:45.055",
        severity: 0,
        title: "수면장애가 아니에요",
      },
    },
  ],
  suspicious: [
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/headache/62e5281ee39eaf5b29f8adf1.png",
      record: {
        diagnosis_id: "62e5281ee39eaf5b29f8adf1",
        is_created: "2023-01-13T20:59:45.055",
        severity: 1,
        title: "경추성 두통",
      },
    },
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce90a556e36933184b0fbf.png",
      record: {
        diagnosis_id: "62ce90a556e36933184b0fbf",
        is_created: "2023-01-13T20:59:45.055",
        severity: 2,
        title: "정신생리적 불면증",
      },
    },
  ],
};

const DiagnosisList = () => {
  return (
    <Container>
      <MainHeader />
      <Title>
        <span className="highlight">000님</span>의 예상 질환이에요
      </Title>
      <DescriptionText style={{ marginTop: "0.8rem" }}>
        <span className="highlight">예상질환</span>을 클릭하면 자세한 설명을 확인할 수 있어요!
      </DescriptionText>
      <DescriptionText style={{ marginTop: "2.4rem" }}>
        <span className="highlight">가장 가능성 높은 질환</span>
      </DescriptionText>
      <List>
        {mockData.most_likely.map((diag, idx) => (
          <DiagnosisCard key={idx} diagnosis={diag} />
        ))}
      </List>
      <DescriptionText style={{ marginTop: "2.4rem" }}>
        <span className="highlight">다음 질환도 의심되어요!</span>
      </DescriptionText>
      <List>
        {mockData.suspicious.map((diag, idx) => (
          <DiagnosisCard key={idx} diagnosis={diag} />
        ))}
      </List>
    </Container>
  );
};

export default DiagnosisList;
