import { useEffect, useState } from "react";
import Gender from "./gender";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import Tags from "./tags";
import YearPicker from "./yearPicker";
import Agreement from "./agreement";
import { useAppDispatch } from "src/state";
import { userSubmit } from "src/state/userSlice";
import { health_interest } from "src/data/interest";
import ContentHeader from "src/components/contentHeader";
import { useNavigate } from "react-router-dom";
import { IAgreement } from "src/interfaces/informationPage";
import MemberAgreement from "./memberAgreement";
import InformationAgreement from "./informationAgreement";
import { Contents, Title, ButtonBackground } from "./index.style";

const Information = () => {
  const [active, setActive] = useState(false);
  const [year, setYear] = useState(0);
  const [health, setHealth] = useState(health_interest);
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState<IAgreement>({ member: false, information: false });
  const [agreementDetail, setAgreementDetail] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSelected()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [year, health, gender, agree]);

  const handleProceed = () => {
    if (active) {
      const healthId = health.filter((item) => item.selected).map((item) => item.id);
      dispatch(userSubmit({ gender, birth_year: year, interests: healthId }));
      navigate("/symptom-type", { state: "info" });
    }
  };

  const isSelected = (): boolean => {
    return year !== 0 && health.filter((item) => item.selected).length !== 0 && gender !== "" && agree.information && agree.member;
  };

  return (
    <>
      {agreementDetail === 0 ? (
        <>
          <ContentHeader back={false} exit={true} exitCallback={() => navigate("/")}>
            정보 수집
          </ContentHeader>
          <Contents>
            <Title>
              잠깐! <br />더 나은 감별 서비스를 위해
              <br /> 간단한 정보가 필요해요
            </Title>
            <YearPicker year={year} setYear={setYear} />
            <Gender gender={gender} setGender={setGender} />
            <Tags health={health} setHealth={setHealth} />
            <Agreement agree={agree} setAgree={setAgree} setAgreementDetail={setAgreementDetail} />
          </Contents>
          <ButtonBackground>
            <section className="button-box" onClick={handleProceed}>
              <RoundButton
                outline="none"
                backgroundColor={active ? theme.color.blue : theme.color.grey_750}
                color={active ? theme.color.grey_100 : theme.color.grey_600}
              >
                증상 감별하러 가기
              </RoundButton>
            </section>
          </ButtonBackground>
        </>
      ) : agreementDetail === 1 ? (
        <MemberAgreement agreementDetail={agreementDetail} setAgreementDetail={setAgreementDetail} />
      ) : (
        <InformationAgreement agreementDetail={agreementDetail} setAgreementDetail={setAgreementDetail} />
      )}
    </>
  );
};

export default Information;
