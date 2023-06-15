import { Meta } from "@storybook/react";
import DiagnosisCard from ".";

export default {
  component: DiagnosisCard,
  title: "DiagnosisCard",
} as Meta;

export const Default = () => {
  const diagnosis = {
    banner_illustration:
      "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
    record: {
      diagnosis_id: 0,
      title: "양안부동시",
      severity: 1,
    },
  };

  const handleNavigate = () => {
    console.log("navigate");
  };

  return <DiagnosisCard diagnosis={diagnosis} handleNavigate={handleNavigate} />;
};
