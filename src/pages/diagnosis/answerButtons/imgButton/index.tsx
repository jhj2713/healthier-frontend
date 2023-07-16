import { useState } from "react";
import * as BodyPart from "src/assets/bodyParts";
import BodyImage from "src/assets/images/body.png";
import { DIGESTIVE_BODY_PART } from "src/data/answer_type";
import NextButton from "../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const bodyPartStyle: React.CSSProperties = { height: "100%", cursor: "pointer" };

type TDigestiveBodyPartKey = keyof typeof DIGESTIVE_BODY_PART;

function ImgButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [digestivePart, setDigestivePart] = useState<TDigestiveBodyPartKey>();

  const handleClickBodyPartButton = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const [, bodyPart] = e.currentTarget.id.split("_");

    setDigestivePart(bodyPart as TDigestiveBodyPartKey);
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [bodyPart] }));
  };

  const styleMapper = (id: TDigestiveBodyPartKey) => (digestivePart === id ? Styled.selectedStyle : Styled.defaultStyle);

  return (
    <Styled.RootContainer>
      <Styled.Container>
        <img src={BodyImage} width="100%" style={{ visibility: "hidden" }} />

        <Styled.BodyPartContainer>
          <Styled.BodyPartRowContainer className="BodyPart_top">
            <BodyPart.DigestTopLeft
              style={bodyPartStyle}
              customStyle={styleMapper("right-upper-stomach")}
              id="BodyPartButton_right-upper-stomach"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestTopMid
              style={bodyPartStyle}
              customStyle={styleMapper("solar-plexus")}
              id="BodyPartButton_solar-plexus"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestTopRight
              style={bodyPartStyle}
              customStyle={styleMapper("left-upper-stomach")}
              id="BodyPartButton_left-upper-stomach"
              onClick={handleClickBodyPartButton}
            />
          </Styled.BodyPartRowContainer>

          <Styled.BodyPartRowContainer className="BodyPart_mid">
            <BodyPart.DigestMidLeft
              style={bodyPartStyle}
              customStyle={styleMapper("right-side")}
              id="BodyPartButton_right-side"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestMidMid
              style={bodyPartStyle}
              customStyle={styleMapper("belly-button")}
              id="BodyPartButton_belly-button"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestMidRight
              style={bodyPartStyle}
              customStyle={styleMapper("left-side")}
              id="BodyPartButton_left-side"
              onClick={handleClickBodyPartButton}
            />
          </Styled.BodyPartRowContainer>

          <Styled.BodyPartRowContainer className="BodyPart_bottom">
            <BodyPart.DigestBottomLeft
              style={bodyPartStyle}
              customStyle={styleMapper("right-lower-stomach")}
              id="BodyPartButton_right-lower-stomach"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestBottomMid
              style={bodyPartStyle}
              customStyle={styleMapper("middle-lower-stomach")}
              id="BodyPartButton_middle-lower-stomach"
              onClick={handleClickBodyPartButton}
            />
            <BodyPart.DigestBottomRight
              style={bodyPartStyle}
              customStyle={styleMapper("left-lower-stomach")}
              id="BodyPartButton_left-lower-stomach"
              onClick={handleClickBodyPartButton}
            />
          </Styled.BodyPartRowContainer>
        </Styled.BodyPartContainer>
      </Styled.Container>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} style={{ opacity: 0.8 }} />
    </Styled.RootContainer>
  );
}

export default ImgButton;
