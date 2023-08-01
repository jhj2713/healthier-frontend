import { LayerProps } from "lamina/types";
import { Abstract, LayerMaterial } from "lamina/vanilla";
import { DENTAL_SYMPTOMS, DIGESTIVE_SYMPTOMS, SYMPTOM_TYPES } from "src/data/symptom_type";
import { Vector3 } from "three";

export interface IOverlayProps {
  view: ViewPoint;
  setView: (view: ViewPoint) => void;
  selection: BodyPart[];
  setSelection: (selection: BodyPart[]) => void;
}

export interface ICharacterProps {
  view: ViewPoint;
  selection: BodyPart[];
}

export interface IPointAbstract extends Abstract {
  origin: Vector3;
  near: number;
  far: number;
  colorA: string;
  colorB: string;
}

export interface IPointShader extends LayerMaterial {
  layers: IPointAbstract[];
}

export interface IPointLayerProps extends LayerProps {
  colorA: string;
  colorB: string;
  colorAalpha: number;
  colorBalpha: number;
  near: number;
  far: number;
  origin: number[];
}

export enum ViewPoint {
  FRONT = "FRONT",
  REAR = "REAR",
}

export enum BodyPart {
  NONE = "NONE",
  TEMPLE = "TEMPLE",
  FOREHEAD = "FOREHEAD",
  EYE = "EYE",
  NEAREYE = "NEAREYE",
  NEARNOSE = "NEARNOSE",
  CHIN = "CHIN",
  REARHEAD = "REARHEAD",
  HEAD = "HEAD",
  BACKNECK = "BACKNECK",
}

export type TSymptomType = (typeof SYMPTOM_TYPES)[number];
type TDentalSymptomType = (typeof DENTAL_SYMPTOMS)[number];
type TDigestiveSymptomType = (typeof DIGESTIVE_SYMPTOMS)[number];

type TDentalDiagnoseType = {
  category: "치과";
  symptoms: TDentalSymptomType[];
};

type TDigestiveDiagnoseType = {
  category: "소화기 내과";
  symptoms: TDigestiveSymptomType[];
};

export type TDiagnoseType = TDentalDiagnoseType | TDigestiveDiagnoseType;
export type TDiagnoseCategory = TDiagnoseType["category"];
