import { Heading_3, Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);
`;

export const LoadingTitle = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    font-weight: 500;
  }
`;

export const LoadingImage = styled.img`
  width: 80%;
  margin-top: 1.5rem;

  align-self: flex-end;
`;

export const BottomTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const BottomText = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  font-weight: 100;

  text-align: center;
  white-space: pre-line;
`;

export const BottomTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const SwiperContainer = styled.div`
  height: 100%;
  .swiper {
    height: 100%;

    .swiper-slide {
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }
`;
