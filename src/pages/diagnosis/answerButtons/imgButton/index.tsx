import { useState } from "react";
import * as BodyPart from "src/assets/bodyParts";
import BodyImage from "src/assets/images/body.png";
import { DIGESTIVE_BODY_PART } from "src/data/answer_type";
import NextButton from "../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const bodyPartStyle: React.CSSProperties = { height: "100%", width: "100%" };

type TDigestiveBodyPartKey = keyof typeof DIGESTIVE_BODY_PART;

function ImgButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [digestivePart, setDigestivePart] = useState<TDigestiveBodyPartKey>();

  const handleClickBodyPartButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-upper-stomach">
              <BodyPart.DigestTopLeft style={bodyPartStyle} customStyle={styleMapper("right-upper-stomach")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_solar-plexus">
              <BodyPart.DigestTopMid style={bodyPartStyle} customStyle={styleMapper("solar-plexus")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-upper-stomach">
              <BodyPart.DigestTopRight style={bodyPartStyle} customStyle={styleMapper("left-upper-stomach")} />
            </Styled.BodyPartButton>
          </Styled.BodyPartRowContainer>

          <Styled.BodyPartRowContainer className="BodyPart_mid">
            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-side">
              <BodyPart.DigestMidLeft style={bodyPartStyle} customStyle={styleMapper("right-side")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_belly-button">
              <BodyPart.DigestMidMid style={bodyPartStyle} customStyle={styleMapper("belly-button")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-side">
              <BodyPart.DigestMidRight style={bodyPartStyle} customStyle={styleMapper("left-side")} />
            </Styled.BodyPartButton>
          </Styled.BodyPartRowContainer>

          <Styled.BodyPartRowContainer className="BodyPart_bottom">
            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-lower-stomach">
              <BodyPart.DigestBottomLeft style={bodyPartStyle} customStyle={styleMapper("right-lower-stomach")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_middle-lower-stomach">
              <BodyPart.DigestBottomMid style={bodyPartStyle} customStyle={styleMapper("middle-lower-stomach")} />
            </Styled.BodyPartButton>

            <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-lower-stomach">
              <BodyPart.DigestBottomRight style={bodyPartStyle} customStyle={styleMapper("left-lower-stomach")} />
            </Styled.BodyPartButton>
          </Styled.BodyPartRowContainer>
        </Styled.BodyPartContainer>
      </Styled.Container>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Styled.RootContainer>
  );
}

export default ImgButton;
