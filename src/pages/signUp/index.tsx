import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CheckIcon from "src/assets/icons/CheckIcon";
import BottomSheet from "src/components/bottomSheet";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import TextFieldStandard from "src/components/textFieldStandard";
import { Label } from "src/components/textFieldStandard/index.style";
import { MOBILE_VENDORS } from "src/data/signup_page";
import theme from "src/lib/theme";
import { handleFocusInput } from "src/utils/inputUtils";
import * as Styled from "./index.style";

interface IRRN {
  first: string;
  second: string;
}

interface IPhoneNumber extends IRRN {
  third: string;
}

type TMobileVendor = (typeof MOBILE_VENDORS)[number];

function SignUp() {
  const navigate = useNavigate();

  const [RRN, setRRN] = useState<IRRN>({ first: "", second: "" });
  const [phoneNumber, setPhoneNumber] = useState<IPhoneNumber>({
    first: "",
    second: "",
    third: "",
  });
  const [name, setName] = useState<string>("");
  const [mobileVendor, setMobileVendor] = useState<TMobileVendor>();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

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

  const isNextButtonEnabled = (): boolean => {
    // TODO: 각종 예외 상황 처리 필요
    if (
      RRN.first.length === 6 &&
      RRN.second.length === 7 &&
      phoneNumber.first.length === 3 &&
      phoneNumber.second.length === 4 &&
      phoneNumber.third.length === 4 &&
      name.length >= 2
    ) {
      return true;
    }

    return false;
  };

  const handleClickNextButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isNextButtonEnabled()) {
      return;
    }

    setIsBottomSheetOpen(true);
  };

  const handleClickMobileVendor = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();

    setMobileVendor(e.currentTarget.dataset.type as TMobileVendor);
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
              <TextFieldStandard
                type="number"
                placeholder="앞 6자리"
                value={RRN.first}
                name="first"
                onChange={(e) => handleChangeRRN(e)(0)}
                ref={RRNRefs[0]}
              />
              <Styled.Hypen />
              <TextFieldStandard
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
              <TextFieldStandard
                type="number"
                name="first"
                placeholder="세 자리"
                value={phoneNumber.first}
                onChange={(e) => handleChangePhoneNumber(e)(0)}
                ref={phoneNumberRefs[0]}
              />
              <Styled.Hypen />

              <TextFieldStandard
                type="number"
                name="second"
                placeholder="네 자리"
                value={phoneNumber.second}
                onChange={(e) => handleChangePhoneNumber(e)(1)}
                ref={phoneNumberRefs[1]}
              />
              <Styled.Hypen />

              <TextFieldStandard
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
            <TextFieldStandard
              type="text"
              label="이름"
              placeholder="이름을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Styled.TextFieldContainer>
          <Styled.RoundButtonContainer>
            <RoundButton
              outline="none"
              backgroundColor={isNextButtonEnabled() ? theme.color.blue : theme.color.grey_650}
              color={isNextButtonEnabled() ? theme.color.grey_100 : theme.color.grey_400}
              onClick={handleClickNextButton}
            >
              다음 단계
            </RoundButton>
          </Styled.RoundButtonContainer>
        </Styled.Form>

        <BottomSheet
          header="통신사를 선택해주세요"
          onClickOverlay={() => setIsBottomSheetOpen(false)}
          isBottomSheetOpen={isBottomSheetOpen}
        >
          <Styled.ContentContainer>
            {MOBILE_VENDORS.map((mv) => (
              <Styled.ContentItem key={mv} onClick={handleClickMobileVendor} data-type={mv}>
                <Styled.Paragraph isSelected={mobileVendor === mv}>{mv}</Styled.Paragraph>
                {mobileVendor === mv && <CheckIcon />}
              </Styled.ContentItem>
            ))}
          </Styled.ContentContainer>
        </BottomSheet>
      </Styled.Container>
    </>
  );
}

export default SignUp;
