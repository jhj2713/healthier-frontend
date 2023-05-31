import { useEffect, Dispatch, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { popAnswer } from "src/state/answerSlice";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { useDispatch } from "react-redux";
import { DiarrheaDiagnose } from "src/api/diagnose/diarrhea";
import { ANSWER_TYPE } from "src/data/answer_type";

interface IUseStomach {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useDiarrhea({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseStomach) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { answers } = useAppSelector((store) => store.answer);

  const questionListRef = useRef<IQuestion[]>([]); // 질문 목록
  const depthHistoryRef = useRef<number[]>([]); // 지나온 질문들의 depth
  const curIndex = useRef<number>(0); // 현재 질문 index
  const depthIndex = useRef<number>(0); // 현재 질문 depth

  useEffect(() => {
    async function getFirstQuestion() {
      const res = [
        {
          id: 2002,
          question: "점점 심해지나요? 좋아졌다가 나빠지나요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
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
            {
              answer_id: 2,
              answer: "호전과 악화가 반복돼요",
              next_question: null,
            },
          ],
        },
        {
          id: 2009,
          question: "지금 열이 나시거나 최근 열 나신 적 있나요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
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
          id: 2010,
          question: "몸살기운 같이 오한 있으신가요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
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
          id: 2011,
          question: "지난 6개월간 평상시 체중의 5% 이상 줄어들었나요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
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
          id: 2012,
          question: "복통 있으신가요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
          image_url: null,
          answers: [
            {
              answer_id: 0,
              answer: "예",
              next_question: {
                id: 2013,
                question: "복통의 위치를 표시해주세요",
                is_multiple: true,
                answer_type: ANSWER_TYPE.IMG,
                image_url: null,
                answers: [
                  {
                    answer_id: 0,
                    answer: "오른쪽윗배",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer: "명치",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 2,
                    answer: "왼쪽윗배",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 3,
                    answer: "오른쪽옆구리",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 4,
                    answer: "배꼽주위",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 5,
                    answer: "왼쪽옆구리",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 6,
                    answer: "오른쪽아랫배",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 7,
                    answer: "아랫배중앙",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
                    answer_id: 8,
                    answer: "왼쪽아랫배",
                    next_question: {
                      id: 2014,
                      question: "배변 후 복통 완화되나요?",
                      is_multiple: false,
                      answer_type: ANSWER_TYPE.DEF,
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
          id: 2015,
          question: "배변 습관에 변화가 있으신가요?",
          is_multiple: false,
          answer_type: ANSWER_TYPE.DEF,
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
      ];

      //await DiarrheaDiagnose.getDiarrhea();

      questionListRef.current = res;
      setCurQuestion(questionListRef.current[curIndex.current]);
    }

    if (state === DIAGNOSE_TYPE.diarrhea) {
      getFirstQuestion();
    }
  }, []);

  const handleDiarrheaNextLogic = async () => {
    if (curIndex.current === questionListRef.current.length - 1) {
      // TODO: 진단 API 연동
      setLoading(true);

      const timer = setTimeout(() => {
        navigate("/diagnosis-list");
        clearTimeout(timer);
      }, 3000);

      return;
    }

    if (!curQuestion.answers) return;
    depthHistoryRef.current.push(depthIndex.current);

    if (!selectedAnswer[0].next_question) {
      depthIndex.current = 0;
      curIndex.current += 1;
      setCurQuestion(questionListRef.current[curIndex.current]);
      setSelectedAnswer([]);
    } else if (curQuestion.is_multiple) {
      depthIndex.current = 0;
      curIndex.current += 1;
      setCurQuestion(questionListRef.current[curIndex.current]);
      setSelectedAnswer([]);
    } else {
      depthIndex.current += 1;
      setCurQuestion(selectedAnswer[0].next_question);
      setSelectedAnswer([]);
    }
  };

  const handleDiarrheaBackLogic = () => {
    if (answers.length === 0) {
      navigate(-1);
    } else {
      if (depthIndex.current !== 0) {
        // 최상위 depth에서부터 최근 question을 찾아나감
        let prevQuestion = questionListRef.current[curIndex.current] as IQuestion;
        for (let i = 0; i < depthIndex.current - 1; i++) {
          prevQuestion = prevQuestion.answers?.find((ans) => ans.next_question)?.next_question as IQuestion;
        }

        setCurQuestion(prevQuestion);
      } else {
        curIndex.current -= 1;

        if (depthHistoryRef.current[depthHistoryRef.current.length - 1] !== 0) {
          // 이전 질문이 depth가 있는 경우
          let prevQuestion = questionListRef.current[curIndex.current].answers?.find((ans) => ans.next_question)
            ?.next_question as IQuestion;
          for (let i = 0; i < depthIndex.current - 1; i++) {
            prevQuestion = prevQuestion.answers?.find((ans) => ans.next_question)?.next_question as IQuestion;
          }
          setCurQuestion(prevQuestion);
        } else {
          setCurQuestion(questionListRef.current[curIndex.current]);
        }
      }

      if (depthHistoryRef.current.length < 1) return;
      depthIndex.current = depthHistoryRef.current.pop() as number;

      setSelectedAnswer([]);
      dispatch(popAnswer());
    }
  };

  return { handleDiarrheaNextLogic, handleDiarrheaBackLogic };
}

export default useDiarrhea;
