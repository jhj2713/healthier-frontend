import styled from "styled-components";

export const Overlay = styled.div<{ headerHeight: string }>`
  position: absolute;
  top: ${({ headerHeight }) => "-" + headerHeight};
  left: 0;
  width: 100%;
  height: ${({ headerHeight }) => `calc(100% + ${headerHeight})`};
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  box-sizing: border-box;
  padding: 32px 24px;

  background: ${({ theme }) => theme.color.grey_900};
  border-radius: 20px 20px 0px 0px;
`;
export const Header = styled.header`
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 2rem;
  line-height: 1.4em;
  font-weight: 300;
  margin-bottom: 2.4rem;
`;

export const ContentContainer = styled.ul``;
export const ContentItem = styled.li`
  font-size: 1.6rem;
  line-height: 1.25em;
  color: ${({ theme }) => theme.color.grey_400};
  font-weight: 200;
  padding: 1.4rem 0;
  margin-bottom: 0.4rem;
`;
