import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import TextField2 from "src/components/textField2";
import { Label } from "src/components/textField2/index.style";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

// auto focus
// https://github.com/cmc-glory/hannib-frontend/blob/ac5f235db98a40b1b71b933c48f7d70d8560ab99/src/screens/GoodsStack/GoodsRequestOnline.tsx#L198

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <ContentHeader back={true} exit={false} backCallback={() => navigate(-1)} />
      <Styled.Container>
        <Styled.H3>개인정보를 입력해주세요</Styled.H3>
        <Styled.Form>
          <Styled.TextFieldContainer>
            <Label>주민등록번호</Label>
            <Styled.TextFieldWrapper>
              <TextField2 placeholder="앞 6자리" value="" onChange={(e) => null} />
              <Styled.Hypen />
              <TextField2 placeholder="뒷 7자리" value="" onChange={(e) => null} />
            </Styled.TextFieldWrapper>
          </Styled.TextFieldContainer>

          <Styled.TextFieldContainer style={{ marginTop: "4rem" }}>
            <Label>전화번호</Label>
            <Styled.TextFieldWrapper>
              <TextField2 type="text" placeholder="세 자리" value="" onChange={(e) => null} />
              <Styled.Hypen />

              <TextField2 placeholder="네 자리" value="" onChange={(e) => null} />
              <Styled.Hypen />

              <TextField2 placeholder="네 자리" value="" onChange={(e) => null} />
            </Styled.TextFieldWrapper>
          </Styled.TextFieldContainer>

          <Styled.TextFieldContainer style={{ marginTop: "4rem" }}>
            <TextField2 label="이름" placeholder="이름을 입력해 주세요" value="" onChange={(e) => null} />
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
