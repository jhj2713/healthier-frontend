export const partList = [
  { id: 1, name: "내과" },
  { id: 2, name: "신경과" },
  { id: 3, name: "정신건강의학과" },
  { id: 4, name: "외과" },
  { id: 5, name: "정형외과" },
  { id: 6, name: "신경외과" },
  { id: 7, name: "흉부외과" },
  { id: 8, name: "성형외과" },
  { id: 9, name: "마취통증의학과" },
  { id: 10, name: "산부인과" },
  { id: 11, name: "소아청소년과" },
  { id: 12, name: "안과" },
  { id: 13, name: "이비인후과" },
  { id: 14, name: "피부과" },
  { id: 15, name: "비뇨의학과" },
  { id: 16, name: "영상의학과" },
  { id: 21, name: "재활의학과" },
  { id: 23, name: "가정의학과" },
  { id: 49, name: "치과" },
] as const;

export type TEmergencyNightKey = "emergencyNight" | "nightService";
export const emergencyNightData: { key: TEmergencyNightKey; label: string }[] = [
  { key: "emergencyNight", label: "응급실운영" },
  { key: "nightService", label: "야간진료" },
];
