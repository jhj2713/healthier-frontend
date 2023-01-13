import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnswerButtons from "./answerButtons";
import ContentHeader from "src/components/contentHeader";
import { IAnswer, IQuestion } from "src/interfaces/diagnosisPage";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "src/state";
import { resetAnswer, popAnswer } from "src/state/answerSlice";
import { Container, Question, LoadingTitle, LoadingIcon, LoadingBottomText, Tips, Description } from "./index.style";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";

const Diagnosis = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: string };

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);
  const { gender, birth_year, interests, site } = useAppSelector((store) => store.user);
  const { answers } = useAppSelector((store) => store.answer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAnswer());
    if (!state) {
      navigate("/");
    }

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`).then((res) => {
      setCurQuestion(res.data);
    });
  }, []);

  const handleNext = () => {
    if (selectedAnswer[0].is_decisive === 1) {
      const data = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer[0].answer_id,
        gender,
        birth_year,
        interests,
        tracks: answers,
      };

      setLoading(true);
      let response_state = {};
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/decisive`, data).then((res) => {
        response_state = {
          type: "",
          diagnostic_result: res.data.diagnostic_result,
        };
      });
      new Promise((resolve) => {
        setTimeout(
          () =>
            resolve(
              navigate("/result", {
                state: response_state,
              })
            ),
          3000
        );
      });
    } else {
      const nextQuestion = state === "sleepdisorder" || (state === "headache" && !curQuestion.is_last_default);
      const data = nextQuestion
        ? {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
          }
        : { site_id: site };

      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose${nextQuestion ? "" : "/headache/last-default"}`, data).then((res) => {
        setCurQuestion(res.data.question);
        setSelectedAnswer([]);
      });
    }
  };

  const handleBack = () => {
    if (answers.length === 1) {
      dispatch(popAnswer());
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`).then((res) => {
        setCurQuestion(res.data);
        setSelectedAnswer([]);
      });
    } else if (answers.length !== 0) {
      dispatch(popAnswer());
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose`, {
          question_id: answers[answers.length - 2].question_id,
          answer_id: answers[answers.length - 2].answer_id[0],
        })
        .then((res) => {
          setCurQuestion(res.data.question);
          setSelectedAnswer([]);
        });
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {loading ? (
        <Loading
          title={
            <LoadingTitle>
              <span className="highlight">정확한 증상 진단</span>을 위해
              <br /> 헬시어가 증상을 분석중이에요
            </LoadingTitle>
          }
          icon={<LoadingIcon loading="eager" alt="icon" src={imageUrl.diagnosis_loading} />}
          bottomInformation={
            <LoadingBottomText>
              <Tips>Tips</Tips>
              <Description>로그인을 하면 진단내역을 모아 볼 수 있어요!</Description>
            </LoadingBottomText>
          }
        />
      ) : (
        <>
          <ContentHeader back={true} backCallback={handleBack} exit={true} exitCallback={() => navigate("/")}>
            자가 진단
          </ContentHeader>
          <Container>
            <Question>{curQuestion.question}</Question>
            <AnswerButtons
              question={curQuestion}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleNext={handleNext}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Diagnosis;
