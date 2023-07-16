import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

interface INextButtonProps {
  enabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
}
function NextButton({ enabled, onClick, style }: INextButtonProps) {
  return (
    <Styled.NextButtonContainer>
      <RoundButton
        outline="none"
        backgroundColor={enabled ? theme.color.blue : theme.color.grey_650}
        color={enabled ? theme.color.grey_100 : theme.color.grey_500}
        onClick={onClick}
        style={{ ...style, pointerEvents: "auto" }}
      >
        다음 단계
      </RoundButton>
    </Styled.NextButtonContainer>
  );
}

export default NextButton;
