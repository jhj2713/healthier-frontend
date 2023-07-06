import * as BodyPart from "../../../assets/bodyParts";
import BodyImage from "../../../assets/images/body.png";
import * as Styled from "./index.style";

const bodyPartStyle: React.CSSProperties = { height: "100%", width: "100%" };

function ImgButton() {
  return (
    <Styled.Container>
      <img src={BodyImage} width="100%" style={{ visibility: "hidden" }}></img>
      <Styled.BodyPartContainer>
        <Styled.BodyPartRowContainer padding="0 5%" className="top">
          <Styled.BodyPartButton>
            <BodyPart.DigestTopLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton>
            <BodyPart.DigestTopMid style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton>
            <BodyPart.DigestTopRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>
        <Styled.BodyPartRowContainer padding="0 0.8%" className="mid">
          <Styled.BodyPartButton>
            <BodyPart.DigestMidLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton>
            <BodyPart.DigestMidMid style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton>
            <BodyPart.DigestMidRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>

        <Styled.BodyPartRowContainer padding="0 2%" className="bottom">
          <Styled.BodyPartButton>
            <BodyPart.DigestBottomLeft style={bodyPartStyle} />
          </Styled.BodyPartButton>

          <Styled.BodyPartButton>
            <BodyPart.DigestBottomMid style={bodyPartStyle} />
          </Styled.BodyPartButton>
          <Styled.BodyPartButton>
            <BodyPart.DigestBottomRight style={bodyPartStyle} />
          </Styled.BodyPartButton>
        </Styled.BodyPartRowContainer>
      </Styled.BodyPartContainer>
    </Styled.Container>
  );
}

export default ImgButton;
