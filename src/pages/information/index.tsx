import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import RoundButton from "src/components/roundButton";
import { IAgreement } from "src/interfaces/informationPage";
import theme from "src/lib/theme";
import { useAppDispatch, useAppSelector } from "src/state";
import { userSubmit } from "src/state/userSlice";
import Agreement from "./agreement";
import Gender from "./gender";
import { Title, ButtonBackground } from "./index.style";
import InformationAgreement from "./informationAgreement";
import MemberAgreement from "./memberAgreement";
import Tags from "./tags";
import YearPicker from "./yearPicker";

const Information = () => {
  const defaultState = useAppSelector((appState) => appState.user);

  const [active, setActive] = useState(false);
  const [year, setYear] = useState(defaultState.birth.year);
  const [interests, setInterests] = useState(defaultState.interests);
  const [gender, setGender] = useState(defaultState.gender);
  const [agree, setAgree] = useState<IAgreement>({ member: false, information: false });
  const [agreementDetail, setAgreementDetail] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isSelected = (): boolean => {
      return year !== 0 && gender !== "" && agree.information && agree.member;
    };

    if (isSelected()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [year, interests, gender, agree]);

  const handleProceed = () => {
    if (!active) {
      return;
    }

    dispatch(userSubmit({ gender, birth: { year, month: 0, date: 0 }, interests }));
    navigate("/symptom-type", { state: "info" });
  };

  return (
    <>
      {agreementDetail === 0 ? (
        <>
          <ContentHeader back={false} exit={true} exitCallback={() => navigate("/")} label="정보 수집" />

          <Layout padding="0 2.4rem 12rem 2.4rem" style={{ height: "(var(--vh, 1vh) * 100)" }}>
            <Title>
              잠깐! <br />더 나은 감별 서비스를 위해
              <br /> 간단한 정보가 필요해요
            </Title>
            <YearPicker year={year} setYear={setYear} />
            <Gender gender={gender} setGender={setGender} />
            <Tags interests={interests} setInterests={setInterests} />
            <Agreement agree={agree} setAgree={setAgree} setAgreementDetail={setAgreementDetail} />
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
          </Layout>
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
