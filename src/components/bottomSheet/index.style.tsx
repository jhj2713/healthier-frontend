import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled.div<{ headerHeight: string }>`
  position: absolute;
  top: ${({ headerHeight }) => "-" + headerHeight};
  left: 0;
  width: 100%;
  height: ${({ headerHeight }) => `calc(100% + ${headerHeight})`};
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  overflow: hidden;
`;

export const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 32px 24px;
  width: calc(var(--vw, 1vw) * 100);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.grey_900};
  border-radius: 20px 20px 0px 0px;
  z-index: 4;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 2rem;
  line-height: 1.4em;
  font-weight: 300;
  margin-bottom: 2.4rem;
`;

export const Content = styled.div``;
