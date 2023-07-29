import * as Styled from "./index.style";

interface IChipsProps {
  labels: string[];
}
function Chips({ labels }: IChipsProps) {
  return (
    <Styled.ChipsContainer>
      {labels.map((label) => (
        <Styled.Chip key={label}>{label}</Styled.Chip>
      ))}
    </Styled.ChipsContainer>
  );
}

export default Chips;
