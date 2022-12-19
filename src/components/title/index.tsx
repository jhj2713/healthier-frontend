import { Line, TitleText } from "./index.style";

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <Line />
      <TitleText>{text}</TitleText>
    </>
  );
};

export default Title;
