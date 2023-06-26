import { IIcon } from "src/interfaces/assets";

export default function ChevronUpIcon({ style = {}, width = 24, height = 24 }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M18 15L12 9L6 15" stroke="#5464F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
