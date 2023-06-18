import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import TextField2 from "src/components/textField2";
import { Label } from "src/components/textField2/index.style";
import theme from "src/lib/theme";
import { handleFocusInput } from "src/utils/inputValidator";
import * as Styled from "./index.style";

interface IRRN {
  first: string;
  second: string;
}

interface IPhoneNumber extends IRRN {
  third: string;
}

function SignUp() {
  const navigate = useNavigate();

  const [RRN, setRRN] = useState<IRRN>({ first: "", second: "" });
  const [phoneNumber, setPhoneNumber] = useState<IPhoneNumber>({
    first: "",
    second: "",
    third: "",
  });
  const [name, setName] = useState<string>("");

  const RRNRefs: Array<React.RefObject<HTMLInputElement>> = [useRef(null), useRef(null)];
  const phoneNumberRefs: Array<React.RefObject<HTMLInputElement>> = [useRef(null), useRef(null), useRef(null)];

  const handleChangeRRN = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRRN({ ...RRN, [e.target.name]: e.target.value });

    return (refIdx: number) => {
      if (refIdx === 0 && e.target.value.length === 6) {
        handleFocusInput(refIdx, RRNRefs);
      } else if (refIdx === 1 && e.target.value.length === 7) {
        handleFocusInput(refIdx, RRNRefs);
      }
    };
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });

    return (refIdx: number) => {
      if (refIdx === 0 && e.target.value.length === 3) {
        handleFocusInput(refIdx, phoneNumberRefs);
      } else if (refIdx === 1 && e.target.value.length === 4) {
        handleFocusInput(refIdx, phoneNumberRefs);
      } else if (refIdx === 2 && e.target.value.length === 4) {
        handleFocusInput(refIdx, phoneNumberRefs);
      }
    };
  };

  return (
    <>
      <ContentHeader back={true} exit={false} backCallback={() => navigate(-1)} />
      <Styled.Container>
        <Styled.H3>개인정보를 입력해주세요</Styled.H3>
        <Styled.Form>
          <Styled.TextFieldContainer>
            <Label>주민등록번호</Label>
            <Styled.TextFieldWrapper>
              <TextField2
                type="number"
                placeholder="앞 6자리"
                value={RRN.first}
                name="first"
                onChange={(e) => handleChangeRRN(e)(0)}
                ref={RRNRefs[0]}
              />
              <Styled.Hypen />
              <TextField2
                type="number"
                placeholder="뒷 7자리"
                value={RRN.second}
                name="second"
                onChange={(e) => handleChangeRRN(e)(1)}
                ref={RRNRefs[1]}
              />
            </Styled.TextFieldWrapper>
          </Styled.TextFieldContainer>

          <Styled.TextFieldContainer style={{ marginTop: "4rem" }}>
            <Label>전화번호</Label>
            <Styled.TextFieldWrapper>
              <TextField2
                type="number"
                name="first"
                placeholder="세 자리"
                value={phoneNumber.first}
                onChange={(e) => handleChangePhoneNumber(e)(0)}
                ref={phoneNumberRefs[0]}
              />
              <Styled.Hypen />

              <TextField2
                type="number"
                name="second"
                placeholder="네 자리"
                value={phoneNumber.second}
                onChange={(e) => handleChangePhoneNumber(e)(1)}
                ref={phoneNumberRefs[1]}
              />
              <Styled.Hypen />

              <TextField2
                type="number"
                name="third"
                placeholder="네 자리"
                value={phoneNumber.third}
                onChange={(e) => handleChangePhoneNumber(e)(2)}
                ref={phoneNumberRefs[2]}
              />
            </Styled.TextFieldWrapper>
          </Styled.TextFieldContainer>

          <Styled.TextFieldContainer style={{ marginTop: "4rem" }}>
            <TextField2
              type="text"
              label="이름"
              placeholder="이름을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Styled.TextFieldContainer>
          <Styled.RoundButtonContainer>
            <RoundButton outline="none" backgroundColor={theme.color.blue} color={theme.color.grey_100}>
              다음 단계
            </RoundButton>
          </Styled.RoundButtonContainer>
        </Styled.Form>
      </Styled.Container>
    </>
  );
}

export default SignUp;
