import axios, { AxiosResponse } from "axios";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { TDiagnoseType } from "src/interfaces/diagnoseApi/diagnosis";
import { DIAGNOSE_TYPE } from "../../utils/diagnosis";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const diagnosisFetcher = {
  getQuestions(diagnosisType: TDiagnoseType, gender: string): Promise<IDiagnoseResponse> {
    if (diagnosisType === DIAGNOSE_TYPE.stomach) {
      return fetcher.get(`/stomach?gender=${gender === "f" ? "female" : "male"}`);
    } else if (diagnosisType === DIAGNOSE_TYPE.backpain) {
      return fetcher.get(`/backpain`);
    } else if (diagnosisType === DIAGNOSE_TYPE.diarrhea) {
      return fetcher.get(`/diarrhea`);
    } else if (diagnosisType === DIAGNOSE_TYPE.bloodystool) {
      return fetcher.get(`/bloodystool`);
    } else if (diagnosisType === DIAGNOSE_TYPE.gum) {
      return fetcher.get(`/gum`);
    } else if (diagnosisType === DIAGNOSE_TYPE.chestpain) {
      //return fetcher.get(`/stomach?gender=${gender}`);
      return Promise.resolve({
        category: "CHESTPAIN",
        question: [
          {
            id: 1000,
            question: "언제부터 증상이 시작되었나요?",
            is_multiple: false,
            answer_type: "NUMBER_1",
            image_url: null,
            answers: null,
          },
          {
            id: 1001,
            question: "갑자기 통증이 시작되었나요? 서서히 시작되었나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "갑자기 시작되었어요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "서서히 시작되었어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1002,
            question: "다음 중 어떤 상황에서 통증이 생기나요?",
            is_multiple: true,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "걸을 때",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "무거운 짐을 들 때",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "기침시",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "잘 모르겠어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1003,
            question: "통증위치를 표시해주세요.",
            is_multiple: true,
            answer_type: "IMG",
            image_url: "urlurlurl~ (입력은 개발팀에서 하겠습니다)",
            answers: [
              {
                answer_id: 0,
                answer: "등 위쪽",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "등 아래쪽",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "오른쪽 등",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "왼쪽 등",
                next_question: null,
              },
            ],
          },
          {
            id: 1004,
            question: "통증 위치가 이동하거나 팔다리로 통증이 퍼지나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "잘 모르겠어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1005,
            question: "통증이 일시적인가요 또는 지속적인가요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "잠깐 나타났다가 호전돼요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "통증이 계속 지속되어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1006,
            question: "점점 심해지나요? 좋아졌다가 나빠지나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "호전돼요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "악화돼요",
                next_question: null,
              },
            ],
          },
          {
            id: 1007,
            question: "이전에도 이런 적이 있나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: {
                  id: 1008,
                  question: "언제인가요?",
                  is_multiple: false,
                  answer_type: "NUMBER_1",
                  image_url: null,
                  answers: null,
                },
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1009,
            question: "통증의 느낌이 어떤가요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "콕콕 찌르는 느낌이에요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "둔하고 뻐근해요",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "칼로 베는 듯한 통증이에요",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "전기가 통하듯 찌릿해요",
                next_question: null,
              },
            ],
          },
          {
            id: 1010,
            question: "관절을 움직일 때 어떤 양상을 띠나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "관절을 움직일 때 소리가 나요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "관절을 움직이기 어려워요",
                next_question: null,
              },
            ],
          },
          {
            id: 1011,
            question: "다음 증상 중 해당하는 것에 체크하세요",
            is_multiple: true,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "발적",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "열감",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "부종",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "압통",
                next_question: null,
              },
              {
                answer_id: 4,
                answer: "해당사항 없음",
                next_question: null,
              },
            ],
          },
          {
            id: 1012,
            question: "통증 점수를 0~10점 중에 표현하세요",
            is_multiple: false,
            answer_type: "DRAG_1",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "경험해본 적이 없는 극심한 통증",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "일상생활이 불가한 심한 통증",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "일상생활에 상당한 영향을 주는 통증",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "일상생활에 영향이 있지만 참을 만한 고통",
                next_question: null,
              },
              {
                answer_id: 4,
                answer: "일상생활에는 문제가 없는 경미한 고통",
                next_question: null,
              },
              {
                answer_id: 5,
                answer: "통증이 거의 없음",
                next_question: null,
              },
            ],
          },
          {
            id: 1013,
            question: "다음 증상 중 해당하는 것에 체크하세요",
            is_multiple: true,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "발열",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "오한",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "체중감소",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "피부발진",
                next_question: null,
              },
              {
                answer_id: 4,
                answer: "우울/불안",
                next_question: null,
              },
            ],
          },
          {
            id: 1014,
            question: "팔다리 힘이 빠지나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1015,
            question: "팔다리 감각이 달라졌나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1016,
            question: "팔다리에 저린 느낌이 드나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1017,
            question: "오래 걸으면 쉬어야하나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: {
                  id: 1018,
                  question: "휴식 후 호전되나요?",
                  is_multiple: false,
                  answer_type: "DEF",
                  image_url: null,
                  answers: [
                    {
                      answer_id: 0,
                      answer: "예",
                      next_question: null,
                    },
                    {
                      answer_id: 1,
                      answer: "아니오",
                      next_question: null,
                    },
                  ],
                },
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1019,
            question: "뇨 또는 변을 참기 어려우시거나 실수하신 적 있으신가요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1020,
            question: "어떨 때 증상이 악화되나요?",
            is_multiple: true,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "아침에 악화되어요",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "기침시 악화되어요",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "운동시 악화되어요",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "특정 자세를 취하면 악화되어요",
                next_question: null,
              },
              {
                answer_id: 4,
                answer: "휴식시 악화되어요",
                next_question: null,
              },
              {
                answer_id: 5,
                answer: "잘 모르겠어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1021,
            question: "최근 이삿짐을 날랐거나 무거운 짐을 옮긴 적이 있나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1022,
            question: "진통제를 복용해보았나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: {
                  id: 1023,
                  question: "마지막 진통제 복용시간이 언제인가요?",
                  is_multiple: false,
                  answer_type: "NUMBER_2",
                  image_url: null,
                  answers: null,
                },
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1024,
            question: "최근 교통사고/운동 등으로 다친 적이 있나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1025,
            question: "이전에 입원이나 수술 하신 적있나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
            ],
          },
          {
            id: 1026,
            question: "월경 주기와 증상이 관련 있나요?",
            is_multiple: false,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "예",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "아니오",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "잘 모르겠어요",
                next_question: null,
              },
            ],
          },
          {
            id: 1027,
            question: "다음 중 가지고 있는 질환이 있으면 선택해주세요.",
            is_multiple: true,
            answer_type: "DEF",
            image_url: null,
            answers: [
              {
                answer_id: 0,
                answer: "고혈압",
                next_question: null,
              },
              {
                answer_id: 1,
                answer: "디스크",
                next_question: null,
              },
              {
                answer_id: 2,
                answer: "관절염",
                next_question: null,
              },
              {
                answer_id: 3,
                answer: "류마티스잘환",
                next_question: null,
              },
              {
                answer_id: 4,
                answer: "해당사항 없음",
                next_question: null,
              },
            ],
          },
        ],
      });
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
};
