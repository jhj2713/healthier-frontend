import * as Styled from "./index.style";

const MOBILE_VENDORS = ["SKT", "KT", "LG 유플러스", "SKT 알뜰폰", "KT 알뜰폰", "LG 알뜰폰"];

function BottomSheet() {
  return (
    <Styled.Overlay headerHeight="5.6rem">
      <Styled.Container>
        <Styled.Header>통신사를 선택해주세요</Styled.Header>
        <Styled.ContentContainer>
          {MOBILE_VENDORS.map((mv) => (
            <Styled.ContentItem key={mv}>{mv}</Styled.ContentItem>
          ))}
        </Styled.ContentContainer>
      </Styled.Container>
    </Styled.Overlay>
  );
}
export default BottomSheet;
