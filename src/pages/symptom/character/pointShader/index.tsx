import React, { forwardRef } from "react";

import { Vector3 } from "three";
import { Abstract } from "lamina/vanilla";
import { Node, extend } from "@react-three/fiber";
import { IPointLayerProps } from "src/interfaces/symptomPage";

class PointLayer extends Abstract {
  static u_near = 2;
  static u_far = 10;
  static u_origin = new Vector3(0, 0, 0);
  static u_colorA = "white";
  static u_colorB = "black";
  static u_colorAalpha = 1;
  static u_colorBalpha = 1;

  static vertexShader = `
  varying vec3 v_worldPosition;
  varying vec3 v_position;
  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `;

  static fragmentShader = `
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform float u_colorAalpha;
    uniform float u_colorBalpha;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist =  length(v_worldPosition - u_origin); 
      float f_strength = (f_dist - u_near) / (u_far - u_near);
			vec3 f_color =  mix(u_colorB, u_colorA, 1.0 - clamp(f_strength, 0., 1.));
      float f_alpha =  mix(u_colorBalpha, u_colorAalpha, 1.0 - clamp(f_strength, 0., 1.));
  
      return vec4(f_color, f_alpha);
    }
  `;

  constructor(props?: IPointLayerProps) {
    super(PointLayer, {
      name: "PointLayer",
      ...props,
    });
  }
}

// 글로벌 네임스페이스에 접근하여 pointLayer_ JSX 컴포넌트를 선언합니다.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      pointLayer_: Node<PointLayer, typeof PointLayer>;
    }
  }
}

// react-three-fiber에 pointLayer_를 사용가능한 레이어로 선언합니다.
extend({ pointLayer_: PointLayer });

// ref를 사용할 수 있도록 보조하는 로직입니다.
const PointLayerComponent = forwardRef<PointLayer, IPointLayerProps>((props, ref) => {
  return <pointLayer_ ref={ref} {...props} />;
}) as React.ForwardRefExoticComponent<IPointLayerProps & React.RefAttributes<PointLayer>>;

export default PointLayerComponent;
