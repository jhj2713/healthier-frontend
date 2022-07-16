import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IListComponent } from "../../interfaces/component";
import { Heading_5 } from "../../lib/fontStyle";
import axios from "axios";

const Container = styled.section<{ photo: string }>`
  height: 16rem;
  background: ${({ photo }) => `url(${photo})`},
    ${({ theme }) => theme.color.blue};
  background-size: cover;

  border-radius: 0.8rem;

  & + & {
    margin-top: 1rem;
  }
`;
const Box = styled.section`
  position: relative;
  height: calc(100% - 2.6rem);

  padding: 1.4rem 1.2rem 1.2rem 1.4rem;
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
`;
const Date = styled.section`
  font-size: 1rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.sub_blue};

  margin-top: 0.4rem;
`;
const Tag = styled.section`
  position: absolute;
  bottom: 0;
  display: inline;

  background-color: ${({ theme }) => theme.color.sub_blue};
  color: ${({ theme }) => theme.color.blue};

  font-weight: 300;
  font-size: 1rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.4rem 0.6rem;
  margin-bottom: 1.2rem;
  border-radius: 3rem;
`;

const ListComponent = ({ diagnosis }: IListComponent) => {
  const navigate = useNavigate();

  const diag_date =
    diagnosis.date.split("/")[0].padStart(2, "0") +
    "월 " +
    diagnosis.date.split("/")[1].padStart(2, "0") +
    "일";

  const handleNavigate = () => {
    /*axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/sleepdisorder/results/${diagnosis.result_log_id}`
      )
      .then((res) => {
        navigate("/result", {
          state: {
            type: "result",
            diagnostic_result: res.data.diagnostic_result,
          },
        });
      }); */
    navigate("/result", {
      state: {
        type: "result",
        diagnostic_result: {
          id: "62c795799d8ed7017f145df8",
          illustration:
            "https://img.freepik.com/premium-vector/self-love-illustration-with-heart-shaped-watch_650524-12.jpg?w=1380",
          h1: "나도 모르는 새에 자꾸자꾸 깨는 당신은",
          title: "주기성 사지운동증",
          h2: [
            "수면 클리닉에 내원하세요. 주기성 사지운동증을 유발하는 원인 질병이 있다면 해당 원인 질병의 과를 방문하세요.",
          ],
          severity: 2,
          explanation: {
            title: "주기성 사지운동증이란?",
            details: [
              "자신이 자고 있을 때 무의식적으로 팔다리의 주기적인 운동을 반복하는 증상이에요. 30초 단위로 엄지발가락을 접었다 펴거나, 발목, 손목, 무릎 또는 고관절을 굽히는 동작으로 미세하게 자주 깨며 수면의 질이 떨어질 수 있어요.",
            ],
          },
          cause: {
            tag_flag: 1,
            tags: [
              {
                cause: "#철분부족",
                details: ["도파민 부족", "전달 이상"],
              },
              {
                cause: "#유전요인",
                details: [""],
              },
            ],
            detail: [
              "뇌의 신경전달물질인 도파민 생성에 필요한 철이 부족하면 신경전달이 잘 이루어지지 않아 발생할 수 있어요.",
              "",
              "또한, 다리로의 혈류 부족과 신경 손상, 당뇨, 빈혈, 신장병, 전립선염 및 방광염 등의 질병이 원인일 수도 있어요.",
            ],
          },
          solutions: [
            {
              title: "철분 보충제를 섭취하기",
              detail:
                "철분이 부족하여 증상이 생긴 경우, 철분 보충만으로도 증상이 호전되기도 해요.",
              emoji: "💊",
            },
            {
              title: "잠들기 전 따뜻한 물로 샤워하기",
              detail: "자기 전 근육을 이완시켜주는데 도움이 돼요.",
              emoji: "🛀",
            },
            {
              title: "다리 마사지와 스트레칭하기",
              detail:
                "정해진 시간에 규칙적으로 일어나기 위해 노력하세요. 취침시각보다 기상시각이 중요해요. 낮시간에 활동하는데 지장이 없는 정도면 비록 짧은 시간을 자더라도 문제가 되지 않아요.",
              emoji: "🦵",
            },
          ],
          medicine_flag: 1,
          medicines: [
            {
              image:
                "https://img.freepik.com/free-photo/pills-in-package_23-2147983067.jpg?w=2000",
              name: "항히스타민제",
              efficacy:
                "수면에 도움을 주는 의약품으로 뇌에서 잠을 깨게하는 '히스타민'의 억제를 도와줘요.",
              caution: {
                h1: "잠들기 30분~1시간 전에 복용해야 해요",
                h2: "항히스타민제 장기복용은 치매를 유발할 수 있어 2주 이상 쓰지 않는 것을 권고하고 있어요.",
                is_colored: ["h1"],
              },
              sideeffects: [
                {
                  name: "오전 졸림증",
                  emoji: "😴",
                },
                {
                  name: "변비",
                  emoji: "🚽",
                },
                {
                  name: "구강건조",
                  emoji: "👄",
                },
                {
                  name: "맥박 증가",
                  emoji: "😡",
                },
                {
                  name: "배뇨장애",
                  emoji: "😞",
                },
              ],
            },
            {
              image:
                "https://img.freepik.com/free-photo/pills-in-package_23-2147983067.jpg?w=2000",
              name: "레돌민",
              efficacy:
                "레돌민 성분의 의약품은 수면 유도제로, 수면 유도 호르몬을 조절하여 수면 사이클을 정상으로 만들어요.",
              caution: {
                h1: "잠들기 30분~1시간 전에 복용해야 해요",
                h2: "술과 함께 복용하면 안돼요!",
                is_colored: ["h1"],
              },
              sideeffects: [
                {
                  name: "오전 졸림증",
                  emoji: "😴",
                },
                {
                  name: "(드물게) 간독성",
                  emoji: "🍄",
                },
              ],
            },
          ],
          treatments: [
            {
              title: "수면 다원검사",
              detail:
                "수면 실험실에서 하룻밤동안 잠을 자고, 잠을 자는 동안의 수면 패턴을 분석하여 더 상세한 원인을 파악할 수 있어요.",
            },
            {
              title: "약물 처방",
              detail:
                "도파민 효능제를 처방 받을 수 있고, 약물 복용시 빠른 증상 호전을 기대할 수 있어요.",
            },
          ],
        },
      },
    });
  };

  return (
    <Container photo={diagnosis.photo} onClick={handleNavigate}>
      <Box>
        <Title>
          일주기 리듬 <br />
          수면 장애
        </Title>
        <Date>{diag_date}</Date>
        <Tag>#수면장애</Tag>
      </Box>
    </Container>
  );
};

export default ListComponent;
