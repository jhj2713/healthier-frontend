import { Abstract, LayerMaterial } from "lamina/vanilla";
import { LayerProps } from "lamina/types";
import { Vector3 } from "three";

export interface IOverlayProps {
  view: ViewPoint;
  setView: (view: ViewPoint) => void;
  menu: BodyPart;
  setMenu: (menu: BodyPart) => void;
}

export interface ICharacterProps {
  view: ViewPoint;
  menu: BodyPart;
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
