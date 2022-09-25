import { useEffect, useState } from "react";
import styled from "styled-components";
import Gender from "../components/infoPage/Gender";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";
import Tags from "../components/infoPage/Tags";
import YearPicker from "../components/infoPage/YearPicker";
import Agreement from "../components/infoPage/Agreement";
import { useAppDispatch } from "../state";
import { userSubmit } from "../state/userSlice";
import { health_interest } from "../store/interest";
import ContentHeader from "../components/header/ContentHeader";
import { Heading_3 } from "../lib/fontStyle";
import { useNavigate } from "react-router-dom";
import { IAgreement } from "../interfaces/informationPage";
import MemberAgreement from "../components/infoPage/MemberAgreement";
import InformationAgreement from "../components/infoPage/InformationAgreement";

const ButtonBackground = styled.section`
  position: fixed;
  bottom: 0;
  margin: 0 2rem;
  font-size: 1.3rem;

  padding-top: 10.4rem;
  padding-bottom: 3rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);

  pointer-events: none;
`;
const ButtonBox = styled.section`
  pointer-events: auto;
`;
const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  padding-top: 4rem;
`;
const Contents = styled.section`
  margin: 0 2.4rem 15rem 2.4rem;
  padding-top: 5.6rem;

  height: (var(--vh, 1vh) * 100);
`;

const Information = () => {
  const [active, setActive] = useState(false);
  const [year, setYear] = useState(0);
  const [health, setHealth] = useState(health_interest);
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState<IAgreement>({ member: false, information: false });
  const [agreementDetail, setAgreementDetail] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isSelected()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [year, health, gender, agree]);

  return (
    <>
      {agreementDetail === 0 ? (
        <>
          <ContentHeader text="정보 수집" back={false} callback={() => {}} />
          <Contents>
            <Title>
              잠깐! <br />더 나은 진단 서비스를 위해
              <br /> 간단한 정보가 필요해요
            </Title>
            <YearPicker year={year} setYear={setYear} />
            <Gender gender={gender} setGender={setGender} />
            <Tags health={health} setHealth={setHealth} />
            <Agreement agree={agree} setAgree={setAgree} setAgreementDetail={setAgreementDetail} />
          </Contents>
          <ButtonBackground>
            <ButtonBox onClick={handleProceed}>
              <RoundButton
                outline="none"
                backgroundColor={active ? theme.color.blue : theme.color.grey_750}
                color={active ? theme.color.grey_100 : theme.color.grey_600}
                text="증상 진단하러 가기"
              />
            </ButtonBox>
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
