import theme from "src/lib/theme";
import RoundButton from "src/components/roundButton";
import { BodyPart, IOverlayProps, ViewPoint } from "src/interfaces/symptomPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/state";
import { addSite } from "src/state/userSlice";
import { regions, particles } from "src/data/symptom_data";
import { OverlaySection, TitleDiv, Title, SubTitle, PartDiv, PartButton, ButtonDiv, RotateButton } from "./index.style";

const Overlay = ({ view, setView, menu, setMenu }: IOverlayProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNext = (site: BodyPart) => {
    dispatch(addSite(site));
    navigate("/diagnosis", { state: "headache" });
  };

  return (
    <OverlaySection>
      <TitleDiv>
        {menu ? (
          <Title>
            <span style={{ color: theme.color.green }}>머리</span>에서
            <br /> <span style={{ color: theme.color.green }}>{regions[menu]}</span> 선택했어요
          </Title>
        ) : (
          <>
            <Title>
              증상 부위를 <br />
              선택해주세요
            </Title>
            <SubTitle onClick={() => handleNext(BodyPart.HEAD)}>어디가 아픈지 모르겠다면 &#62;</SubTitle>
          </>
        )}
      </TitleDiv>
      {/* <PlaceHolderDiv /> */}
      {view === ViewPoint.REAR ? (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.HEAD}
            onClick={() => {
              setMenu(BodyPart.HEAD);
            }}
          >
            머리 전체
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.REARHEAD}
            onClick={() => {
              setMenu(BodyPart.REARHEAD);
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
            toggle={menu === BodyPart.BACKNECK}
            onClick={() => {
              setMenu(BodyPart.BACKNECK);
            }}
          >
            뒷목
          </PartButton>
        </PartDiv>
      ) : (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.HEAD}
            onClick={() => {
              setMenu(BodyPart.HEAD);
            }}
          >
            머리 전체
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.NEAREYE}
            onClick={() => {
              setMenu(BodyPart.NEAREYE);
            }}
          >
            눈 주위
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.FOREHEAD}
            onClick={() => {
              setMenu(BodyPart.FOREHEAD);
            }}
          >
            이마의 띠
          </PartButton>
          <PartButton
            toggle={menu === BodyPart.TEMPLE}
            onClick={() => {
              setMenu(BodyPart.TEMPLE);
            }}
          >
            관자놀이
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.EYE}
            onClick={() => {
              setMenu(BodyPart.EYE);
            }}
          >
            눈
          </PartButton>
          <PartButton
            toggle={menu === BodyPart.CHIN}
            onClick={() => {
              setMenu(BodyPart.CHIN);
            }}
          >
            턱
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === BodyPart.NEARNOSE}
            onClick={() => {
              setMenu(BodyPart.NEARNOSE);
            }}
          >
            코 주위
          </PartButton>
        </PartDiv>
      )}

      <ButtonDiv>
        <RotateButton
          toggle={view === ViewPoint.FRONT}
          onClick={() => {
            setView(ViewPoint.FRONT);
            setMenu(BodyPart.NONE);
          }}
        >
          앞
        </RotateButton>
        <RotateButton
          toggle={view === ViewPoint.REAR}
          onClick={() => {
            setView(ViewPoint.REAR);
            setMenu(BodyPart.NONE);
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
            증상 감별 시작하기
          </RoundButton>
        </section>
      </ButtonDiv>
    </OverlaySection>
  );
};

export default Overlay;
