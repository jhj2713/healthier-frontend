import { IIcon } from "src/interfaces/assets";

export default function ChevronDownIcon({ style = {}, width = 24, height = 24, stroke = "#5464F2" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M6 9L12 15L18 9" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
