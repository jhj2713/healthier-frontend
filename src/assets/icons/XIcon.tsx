import { IIcon } from "src/interfaces/assets";

export default function XIcon({ width = 32, height = 32, stroke = "#FDFDFD" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L8 24" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L24 24" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
