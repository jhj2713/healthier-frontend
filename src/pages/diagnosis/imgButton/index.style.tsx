import styled from "styled-components";
import BodyImage from "../../../assets/images/body.png";

export const Container = styled.div`
  position: relative;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BodyImage});
`;

export const BodyPartContainer = styled.div`
  position: absolute;
  top: 38%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 66%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyPartRowContainer = styled.div<{ padding: string }>`
  display: flex;
  justify-content: space-between;
  padding: ${({ padding }) => padding};

  &.BodyPart_top,
  &.BodyPart_mid {
    height: calc((100% / 245) * 90 - 4px);
  }

  &.BodyPart_bottom {
    height: calc((100% / 245) * 65 - 4px);
  }
`;

export const BodyPartButton = styled.button`
  all: unset;
  cursor: pointer;
`;
