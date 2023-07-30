import { IIcon } from "src/interfaces/assets";

export default function ChevronLeftIcon({ width = 32, height = 32, stroke = "#FDFDFD" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 24L12 16L20 8" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
