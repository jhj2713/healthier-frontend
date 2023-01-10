import theme from "src/lib/theme";
import RoundButton from "src/components/roundButton";
import { IOverlayProps } from "src/interfaces/symptomPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/state";
import { setSite } from "src/state/userSlice";
import { regions, particles } from "src/data/symptom_data";
import { OverlaySection, TitleDiv, Title, SubTitle, PartDiv, PartButton, ButtonDiv, RotateButton } from "./index.style";

const Overlay = ({ view, setView, menu, setMenu }: IOverlayProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNext = (site: number) => {
    dispatch(setSite(site));
    navigate("/diagnosis", { state: "headache" });
  };

  return (
    <OverlaySection>
      <TitleDiv>
        {menu ? (
          <Title>
            <span style={{ color: theme.color.green }}>머리</span>에서
            <br /> <span style={{ color: theme.color.green }}>{regions[menu]}</span>
            {particles[menu] + " "}
            선택했어요
          </Title>
        ) : (
          <>
            <Title>
              증상 부위를 <br />
              선택해주세요
            </Title>
            <SubTitle onClick={() => handleNext(8)}>어디가 아픈지 모르겠다면 &#62;</SubTitle>
          </>
        )}
      </TitleDiv>
      {/* <PlaceHolderDiv /> */}
      {view ? (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 8}
            onClick={() => {
              setMenu(8);
            }}
          >
            머리 전체
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 7}
            onClick={() => {
              setMenu(7);
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
            toggle={menu === 9}
            onClick={() => {
              setMenu(9);
            }}
          >
            뒷목
          </PartButton>
        </PartDiv>
      ) : (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 8}
            onClick={() => {
              setMenu(8);
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
            toggle={menu === 2}
            onClick={() => {
              setMenu(2);
            }}
          >
            이마의 띠
          </PartButton>
          <PartButton
            toggle={menu === 1}
            onClick={() => {
              setMenu(1);
            }}
          >
            관자놀이
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 3}
            onClick={() => {
              setMenu(3);
            }}
          >
            눈
          </PartButton>
          <PartButton
            toggle={menu === 6}
            onClick={() => {
              setMenu(6);
            }}
          >
            턱
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 5}
            onClick={() => {
              setMenu(5);
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
            setMenu(0);
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
        <section onClick={() => menu && handleNext(menu)}>
          <RoundButton
            outline="none"
            backgroundColor={menu ? theme.color.green : theme.color.grey_750}
            color={menu ? theme.color.grey_900 : theme.color.grey_500}
          >
            진단 시작하기
          </RoundButton>
        </section>
      </ButtonDiv>
    </OverlaySection>
  );
};

export default Overlay;
