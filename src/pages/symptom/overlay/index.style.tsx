import { Heading_3, Body_3 } from "src/lib/fontStyle";
import styled, { keyframes } from "styled-components";

export const OverlaySection = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0) 78.12%, #131416 100%);
`;

export const ButtonDiv = styled.div`
  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: calc(var(--vh, 1vh) * 31.2);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  padding-bottom: 2rem;
`;

const PartAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const PartDiv = styled.div`
  width: 45vh;
  height: calc(var(--vh, 1vh) * 35);

  display: grid;
  grid-template-columns: 1fr 1.8fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  animation: ${PartAnimation} 0.6s ease-in-out both;
`;

export const TitleDiv = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled(Heading_3)`
  color: white;
  letter-spacing: -0.025rem;
  margin-left: 2.4rem;
`;

export const SubTitle = styled(Body_3)`
  letter-spacing: -0.05rem;

  margin: 0.8rem 0 0 2.4rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.green};
  cursor: pointer;
`;

export const RotateButton = styled.button<{ toggle: boolean }>`
  height: 5.2rem;
  width: 5.2rem;

  margin-bottom: 2rem;

  background-color: ${({ toggle, theme }) => (toggle ? theme.color.sub_blue : "rgba(0, 0, 0, 0)")};
  color: ${({ toggle, theme }) => (toggle ? theme.color.blue : theme.color.grey_500)};
  border: ${({ toggle }) => (toggle ? "none" : "solid")};
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.grey_500};

  border-radius: 5.2rem;
  cursor: pointer;

  font-size: 1.6rem;
  font-weight: ${({ toggle }) => (toggle ? "600" : "300")};
`;

export const PartButton = styled.button<{ toggle: boolean }>`
  padding: 0.6rem 1rem;

  color: ${({ toggle, theme }) => (toggle ? "white" : theme.color.blue)};
  background-color: ${({ toggle, theme }) => (toggle ? theme.color.blue : theme.color.grey_900)};

  border: solid 0.15rem;
  border-color: ${({ theme }) => theme.color.blue};
  border-radius: 4rem;
  border-width: 1px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.3rem;
  font-weight: 500;

  cursor: pointer;
`;
