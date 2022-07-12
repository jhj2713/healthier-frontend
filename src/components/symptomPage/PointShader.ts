import { Vector3 } from "three";
import { Abstract } from "lamina/vanilla";

export default class Point extends Abstract {
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

  constructor(props: any) {
    //@ts-ignore
    super(Point, {
      name: "Point",
      ...props,
    });
  }
}
