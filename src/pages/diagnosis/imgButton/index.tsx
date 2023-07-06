import { DIGESTIVE_BODY_PART } from "src/data/answer_type";
import { IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import * as BodyPart from "../../../assets/bodyParts";
import BodyImage from "../../../assets/images/body.png";
import * as Styled from "./index.style";

const bodyPartStyle: React.CSSProperties = { height: "100%", width: "100%" };

interface IImgButton {
  setSelectedAnswer: React.Dispatch<React.SetStateAction<IAnswer[]>>;
}

type TDigestiveBodyPartKey = keyof typeof DIGESTIVE_BODY_PART;

function ImgButton({ setSelectedAnswer }: IImgButton) {
  const handleClickBodyPartButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const [, bodyPart] = e.currentTarget.id.split("_");

    alert(DIGESTIVE_BODY_PART[bodyPart as TDigestiveBodyPartKey]);

    setSelectedAnswer([
      {
        answer_id: 0,
        answer: DIGESTIVE_BODY_PART[bodyPart as TDigestiveBodyPartKey],
        next_question: null,
      },
    ]);
  };

  return (
    <Styled.Container>
      <img src={BodyImage} width="100%" style={{ visibility: "hidden" }} />

      <Styled.BodyPartContainer>
        <Styled.BodyPartRowContainer className="BodyPart_top">
          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-upper-stomach">
            <BodyPart.DigestTopLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_solar-plexus">
            <BodyPart.DigestTopMid style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-upper-stomach">
            <BodyPart.DigestTopRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>

        <Styled.BodyPartRowContainer className="BodyPart_mid">
          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-side">
            <BodyPart.DigestMidLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_belly-button">
            <BodyPart.DigestMidMid style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-side">
            <BodyPart.DigestMidRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>

        <Styled.BodyPartRowContainer className="BodyPart_bottom">
          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_right-lower-stomach">
            <BodyPart.DigestBottomLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_middle-lower-stomach">
            <BodyPart.DigestBottomMid style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton onClick={handleClickBodyPartButton} id="BodyPartButton_left-lower-stomach">
            <BodyPart.DigestBottomRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>
      </Styled.BodyPartContainer>
    </Styled.Container>
  );
}

export default ImgButton;
