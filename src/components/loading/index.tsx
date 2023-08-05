import { ReactNode } from "react";
import * as Styled from "./index.style";

interface IText {
  text: string;
  style?: React.CSSProperties;
}

export interface ILoading {
  titleTexts: IText[];
  subTitle?: string;
  illustration: ReactNode;
  bottomInformation?: ReactNode;
}

const Loading = ({ titleTexts, subTitle, illustration, bottomInformation }: ILoading) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        {titleTexts.map((titleText) => (
          <span key={titleText.text} style={titleText.style}>
            {titleText.text}
          </span>
        ))}
        {subTitle && (
          <Styled.SubtitleContainer>
            <p className="subtitle">{subTitle}</p>
          </Styled.SubtitleContainer>
        )}
      </Styled.TitleContainer>
      {illustration}
      {bottomInformation}
    </Styled.Container>
  );
};

export default Loading;
