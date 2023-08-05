import { Meta } from "@storybook/react";
import DiagnosisCard from ".";
import type { IDiagnoseResult } from "src/interfaces/diagnoseApi/diagnosis";

export default {
  component: DiagnosisCard,
  title: "DiagnosisCard",
} as Meta;

export const Default = () => {
  const result: IDiagnoseResult = {
    dx_id: "1000",
    dx_name: "안양부동시",
    most_likely: false,
    severity: 1,
    img_url: "",
  };

  const handleNavigate = () => {
    console.log("navigate");
  };

  return <DiagnosisCard result={result} handleNavigate={handleNavigate} />;
};

// export const DateContain = () => {
//   const diagnosis = {
//     banner_illustration:
//       "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
//     record: {
//       diagnosis_id: 0,
//       title: "양안부동시",
//       is_created: new Date().toString(),
//       severity: 2,
//     },
//   };

//   const handleNavigate = () => {
//     console.log("navigate");
//   };

//   return <DiagnosisCard diagnosis={diagnosis} handleNavigate={handleNavigate} />;
// };

export const SquareCard = () => {
  const result: IDiagnoseResult = {
    dx_id: "1000",
    dx_name: "안양부동시",
    most_likely: true,
    severity: 1,
    img_url: "",
  };

  const handleNavigate = () => {
    console.log("navigate");
  };

  return <DiagnosisCard isSquare result={result} handleNavigate={handleNavigate} />;
};
