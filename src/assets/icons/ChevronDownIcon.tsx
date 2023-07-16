import { IIcon } from "src/interfaces/assets";

export default function ChevronDownIcon({ style = {}, width = 24, height = 24, stroke = "#5464F2" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M6 9L12 15L18 9" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export const SmallChevronDownIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9.33398L8 5.33398L4 9.33398" stroke="white" stroke-linecap="round" />
    </svg>
  );
};
