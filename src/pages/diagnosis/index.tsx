import { useLocation, useNavigate } from "react-router-dom";
import AnswerButtons from "./answerButtons";
import ContentHeader from "src/components/contentHeader";
import { Container, Question, LoadingTitle, LoadingIcon, LoadingBottomText, Tips, Description } from "./index.style";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import useDiagnosis from "src/hooks/useDiagnosis";

const Diagnosis = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: string };

  const { loading, curQuestion, selectedAnswer, setSelectedAnswer, handleNext, handleBack } = useDiagnosis(state);

  return (
    <>
      {loading ? (
        <Loading
          title={
            <LoadingTitle>
              <span className="highlight">정확한 증상 감별</span>을 위해
              <br /> 헬시어가 증상을 분석중이에요
            </LoadingTitle>
          }
          icon={<LoadingIcon loading="eager" alt="icon" src={imageUrl.diagnosis_loading} />}
          bottomInformation={
            <LoadingBottomText>
              <Tips>Tips</Tips>
              <Description>로그인을 하면 감별진단 내역을 모아 볼 수 있어요!</Description>
            </LoadingBottomText>
          }
        />
      ) : (
        <>
          <ContentHeader back={true} backCallback={handleBack} exit={true} exitCallback={() => navigate("/")}>
            감별진단
          </ContentHeader>
          <Container>
            <Question>
              {curQuestion.question.split("\\n").map((text: string, idx: number) => (
                <div key={idx}>{text}</div>
              ))}
            </Question>
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
