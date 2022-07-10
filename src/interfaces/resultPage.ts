import { Dispatch } from "react";

export interface IBottomBar {
  curIndex: number;
  totalCount: number;
}

export interface ICoverPageProps {
  illustration: string;
  highlight: string;
  title: string;
  description: string;
  severity: number;
}

export interface IDefinePageProps {
  title: string;
  definition: string;
  cause: { cause: string; details: string[] }[];
  cause_detail: string;
}

export interface ICauseBox {
  cause_1: {
    cause: string;
    details: string[];
  };
  cause_2: {
    cause: string;
    details: string[];
  };
}

export interface ILifeProps {
  title: string;
  detail: string;
  emoji: string;
}

export interface ILifeComponent {
  idx: number;
  icon: string;
  title: string;
  content: string;
}

export interface IMedicine {
  image: string;
  name: string;
  efficacy: string;
  caution: { h1: string; h2: string; is_colored: string[] };
  sideeffects: { name: string; emoji: string }[];
}

export interface IMedicineProps {
  selected: number;
  setSelected: Dispatch<number>;
  medicine: IMedicine[];
}

export interface IMedicineDetail {
  selected: number;
  medicine: IMedicine[];
}

export interface ITreatPageProps {
  title: string;
  detail: string;
}

export interface ITreatBoxProps {
  title: string;
  description: string;
}
