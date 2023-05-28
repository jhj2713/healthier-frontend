import theme from "src/lib/theme";
import RoundButton from "src/components/roundButton";
import { BodyPart, IOverlayProps, ViewPoint } from "src/interfaces/symptomPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/state";
import { setSite } from "src/state/userSlice";
import { regions, particles } from "src/data/symptom_data";
import { OverlaySection, TitleDiv, Title, SubTitle, PartDiv, PartButton, ButtonDiv, RotateButton } from "./index.style";

const Overlay = ({ view, setView, selection, setSelection }: IOverlayProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInitiate = (sites: BodyPart[]) => {
    dispatch(setSite(sites));
    navigate("/diagnosis", { state: "headache" });
  };

  const toggleMenu = (part: BodyPart) => {
    const i = selection.indexOf(part);
    if (i === -1) {
      setSelection([...selection, part]);
    } else {
      selection.splice(i, 1);
      setSelection([...selection]);
    }
  };

  return (
    <OverlaySection>
      <TitleDiv>
        {selection.length ? (
          <Title>
            <span style={{ color: theme.color.green }}>머리</span>에서
            <br />{" "}
            <span style={{ color: theme.color.green }}>
              {selection.map((part, i, arr) => {
                if (i === arr.length - 1) return regions[part] + particles[part];
                else return regions[part] + ", ";
              })}
            </span>{" "}
            선택했어요
          </Title>
        ) : (
          <>
            <Title>
              증상 부위를 <br />
              선택해주세요
            </Title>
            <SubTitle onClick={() => handleInitiate([BodyPart.HEAD])}>어디가 아픈지 모르겠다면 &#62;</SubTitle>
          </>
        )}
      </TitleDiv>
      {/* <PlaceHolderDiv /> */}
      {view === ViewPoint.REAR ? (
        <PartDiv>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.HEAD)} onClick={() => toggleMenu(BodyPart.HEAD)}>
            머리 전체
          </PartButton>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.REARHEAD)} onClick={() => toggleMenu(BodyPart.REARHEAD)}>
            뒷머리
          </PartButton>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.BACKNECK)} onClick={() => toggleMenu(BodyPart.BACKNECK)}>
            뒷목
          </PartButton>
        </PartDiv>
      ) : (
        <PartDiv>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.HEAD)} onClick={() => toggleMenu(BodyPart.HEAD)}>
            머리 전체
          </PartButton>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.NEAREYE)} onClick={() => toggleMenu(BodyPart.NEAREYE)}>
            눈 주위
          </PartButton>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.FOREHEAD)} onClick={() => toggleMenu(BodyPart.FOREHEAD)}>
            이마의 띠
          </PartButton>
          <PartButton toggle={selection.includes(BodyPart.TEMPLE)} onClick={() => toggleMenu(BodyPart.TEMPLE)}>
            관자놀이
          </PartButton>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.EYE)} onClick={() => toggleMenu(BodyPart.EYE)}>
            눈
          </PartButton>
          <PartButton toggle={selection.includes(BodyPart.CHIN)} onClick={() => toggleMenu(BodyPart.CHIN)}>
            턱
          </PartButton>
          <div></div>
          <PartButton toggle={selection.includes(BodyPart.NEARNOSE)} onClick={() => toggleMenu(BodyPart.NEARNOSE)}>
            코 주위
          </PartButton>
        </PartDiv>
      )}

      <ButtonDiv>
        <RotateButton
          toggle={view === ViewPoint.FRONT}
          onClick={() => {
            setView(ViewPoint.FRONT);
          }}
        >
          앞
        </RotateButton>
        <RotateButton
          toggle={view === ViewPoint.REAR}
          onClick={() => {
            setView(ViewPoint.REAR);
          }}
        >
          뒤
        </RotateButton>
        <section onClick={() => selection && handleInitiate(selection)}>
          <RoundButton
            outline="none"
            backgroundColor={selection ? theme.color.green : theme.color.grey_750}
            color={selection ? theme.color.grey_900 : theme.color.grey_500}
          >
            증상 감별 시작하기
          </RoundButton>
        </section>
      </ButtonDiv>
    </OverlaySection>
  );
};

export default Overlay;
