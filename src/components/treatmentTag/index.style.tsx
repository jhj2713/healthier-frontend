import styled, { css } from "styled-components";
import { TTreatmentType } from ".";

export const Container = styled.section<{ type: TTreatmentType }>`
  display: inline-block;
  height: 100%;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: -0.03rem;

  ${({ type, theme }) =>
    type === "therapy"
      ? css`
          color: ${theme.color.blue_100};
          background: rgba(157, 167, 242, 0.3);
        `
      : css`
          color: ${theme.color.green_300};
          background: rgba(230, 250, 175, 0.25);
        `}
`;
