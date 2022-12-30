import { useRef, useLayoutEffect } from "react";
import { extend, Object3DNode, MaterialNode, BufferGeometryNode } from "@react-three/fiber";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { Line2 } from "three/examples/jsm/lines/Line2";
import theme from "src/lib/theme";

extend({ LineMaterial, LineGeometry, Line2 });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      lineGeometry: BufferGeometryNode<LineGeometry, typeof LineGeometry>;
      lineMaterial: MaterialNode<LineMaterial, typeof LineMaterial>;
      line2: Object3DNode<Line2, typeof Line2>;
    }
  }
}

const Line = ({ start, end }: { start: number[]; end: number[] }) => {
  const ref = useRef<LineGeometry>(null!);

  useLayoutEffect(() => {
    ref.current!.setPositions([...start, ...end]);
  }, [start, end]);

  return (
    <line2>
      <lineGeometry ref={ref} />
      <lineMaterial linewidth={0.001} color={theme.color.blue} />
    </line2>
  );
};

export const FrontLines = () => {
  return (
    <>
      {/* 눈 주위 라인 */}
      <Line start={[-0.56, 0.05, 1.0]} end={[-1.2, 0.5, 1]} />
      <Line start={[-1.2, 0.5, 1]} end={[-1.7, 0.5, 1]} />
      {/* 관자놀이 라인 */}
      <Line start={[-0.86, -0.35, 0.65]} end={[-1.7, -0.35, 1]} />
      {/* 턱 라인 */}
      <Line start={[-0.0, -1.11, 0.65]} end={[-1.2, -1.2, 1]} />
      <Line start={[-1.2, -1.2, 1]} end={[-1.6, -1.2, 1]} />
      {/* 코 주위 라인 */}
      <Line start={[0.0, -0.5, 1.3]} end={[1.0, -1.2, 1]} />
      <Line start={[1.0, -1.2, 1]} end={[1.7, -1.2, 1]} />
      {/* 눈 라인 */}
      <Line start={[0.5, -0.35, 0.95]} end={[1.0, -0.35, 1]} />
      <Line start={[1.0, -0.35, 1]} end={[1.7, -0.35, 1]} />
      {/* 이마의 띄 라인 */}
      <Line start={[0.4, 0.24, 0.86]} end={[1.0, 0.5, 1]} />
      <Line start={[1.0, 0.5, 1]} end={[1.7, 0.5, 1]} />
    </>
  );
};

export const BackLines = () => {
  return (
    <>
      {/* 뒷머리 주위 라인 */}
      <Line start={[-0.56, 0.05, 0.8]} end={[-1.2, 0.5, 1]} />
      <Line start={[-1.2, 0.5, 1]} end={[-1.7, 0.5, 1]} />
      {/* 뒷목 라인 */}
      <Line start={[0.0, -1.2, 1]} end={[1.0, -1.2, 1]} />
      <Line start={[1.0, -1.2, 1]} end={[1.7, -1.2, 1]} />
    </>
  );
};
