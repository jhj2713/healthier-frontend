import * as Styled from "./index.style";
interface ITitleProps {
  text: string;
  style?: React.CSSProperties;
  subTitle?: string;
}

function Title({ text, style, subTitle }: ITitleProps) {
  return (
    <section style={style}>
      <Styled.Separator />
      <Styled.Title marginBottom={subTitle ? "0.6rem" : "2rem"}>{text}</Styled.Title>
      {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
    </section>
  );
}

export default Title;
