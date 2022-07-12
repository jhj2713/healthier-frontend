import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../lib/theme";
import RoundButton from "../buttons/RoundButton";
import { IOverlayProps } from "../../interfaces/symptomPage";
import { regions } from "../../pages/SymptomPage";

const OverlaySection = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0) 78.12%,
    #131416 100%
  );
`;

const ButtonDiv = styled.div`
  width: calc(100vw - 4rem);
  height: 35vh;

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

const PartDiv = styled.div`
  height: 45vh;
  width: 100vw;
  max-width: 60rem;

  display: grid;
  grid-template-columns: 1fr 1.8fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  padding-bottom: 2rem;

  animation: ${PartAnimation} 0.6s ease-in-out both;
`;

const TitleDiv = styled.div`
  width: 100vw;
  height: 20vh;

  padding-top: 12.6rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: white;
  font-weight: 200;
  margin: 0 0 0 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 100;
  color: white;
  margin: 2rem 0 0 2rem;
  text-decoration: underline;
  color: ${theme.color.green};
  cursor: pointer;
`;

const RotateButton = styled.button<{ toggle: boolean }>`
  height: 5.2rem;
  width: 5.2rem;

  margin-bottom: 2rem;

  background-color: ${({ toggle }) =>
    toggle ? theme.color.sub_blue : "rgba(0, 0, 0, 0)"};
  color: ${({ toggle }) =>
    toggle ? theme.color.blue_500 : theme.color.grey_500};
  border: ${({ toggle }) => (toggle ? "none" : "solid")};
  border-width: 0.1rem;
  border-color: ${theme.color.grey_500};

  border-radius: 100%;
  cursor: pointer;
`;

const PartButton = styled.button<{ toggle: boolean }>`
  padding: 0.5rem 1rem;

  color: ${({ toggle }) => (toggle ? "white" : theme.color.blue)};
  background-color: ${({ toggle }) => (toggle ? theme.color.blue : "black")};

  border: solid;
  border-color: ${theme.color.blue};
  border-radius: 4rem;

  font-size: 1.5rem;
`;

const particles = ["", "를", "를", "를", "를", "를", "를", "을", "을", "를"];

const Overlay = ({ view, setView, menu, setMenu }: IOverlayProps) => {
  return (
    <OverlaySection>
      <TitleDiv>
        {menu ? (
          <Title>
            <span style={{ color: theme.color.green }}>머리 어깨</span>에서
            <br />{" "}
            <span style={{ color: theme.color.green }}>{regions[menu]}</span>
            {particles[menu] + " "}
            선택했어요
          </Title>
        ) : (
          <>
            <Title>
              증상 부위를 <br />
              선택해주세요
            </Title>
            <SubTitle>어디가 아픈지 모르겠다면 &#62;</SubTitle>
          </>
        )}
      </TitleDiv>
      {view ? (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 1}
            onClick={() => {
              setMenu(1);
            }}
          >
            머리 전체
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 2}
            onClick={() => {
              setMenu(2);
            }}
          >
            뒷머리
          </PartButton>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <PartButton
            toggle={menu === 3}
            onClick={() => {
              setMenu(3);
            }}
          >
            뒷목
          </PartButton>
        </PartDiv>
      ) : (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 1}
            onClick={() => {
              setMenu(1);
            }}
          >
            머리 전체
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 4}
            onClick={() => {
              setMenu(4);
            }}
          >
            눈 주위
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 5}
            onClick={() => {
              setMenu(5);
            }}
          >
            이마의 띠
          </PartButton>
          <PartButton
            toggle={menu === 6}
            onClick={() => {
              setMenu(6);
            }}
          >
            관자놀이
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 7}
            onClick={() => {
              setMenu(7);
            }}
          >
            눈
          </PartButton>
          <PartButton
            toggle={menu === 8}
            onClick={() => {
              setMenu(8);
            }}
          >
            턱
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 9}
            onClick={() => {
              setMenu(9);
            }}
          >
            코 주위
          </PartButton>
        </PartDiv>
      )}

      <ButtonDiv>
        <RotateButton
          toggle={view === 0}
          onClick={() => {
            setView(0);
          }}
        >
          앞
        </RotateButton>
        <RotateButton
          toggle={view === 1}
          onClick={() => {
            setView(1);
            setMenu(0);
          }}
        >
          뒤
        </RotateButton>
        <RoundButton
          outline="none"
          backgroundColor={menu ? theme.color.green : theme.color.grey_750}
          color={menu ? theme.color.black : theme.color.grey_500}
          text={"진단 시작하기"}
        />
      </ButtonDiv>
    </OverlaySection>
  );
};

export default Overlay;
