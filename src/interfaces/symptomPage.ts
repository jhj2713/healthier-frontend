import { Abstract, LayerMaterial } from "lamina/vanilla";
import { LayerProps } from "lamina/types";
import { Vector3 } from "three";

export interface IOverlayProps {
  view: number;
  setView: (view: number) => void;
  menu: number;
  setMenu: (menu: number) => void;
}

export interface ICharacterProps {
  view: number;
  menu: number;
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
