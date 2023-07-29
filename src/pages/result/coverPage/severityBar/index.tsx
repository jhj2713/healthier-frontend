import { Container, Text, SeverityBackground } from "./index.style";
import type { TSeverity } from "src/interfaces/diagnoseApi/diagnosis";

const setBackgroundPercent = (severity: TSeverity): number => {
  switch (severity) {
    case 1:
      return 5;
    case 2:
      return 48;
    default:
      return 100;
  }
};

const SeverityBar = ({ severity }: { severity: TSeverity }) => {
  return (
    <Container>
      <section className="text-box">
        <Text type={1} severity={severity}>
          관리가
          <br />
          필요해요
        </Text>
        <Text type={2} severity={severity}>
          병원에 가는걸
          <br />
          추천해요
        </Text>
        <Text type={3} severity={severity}>
          병원에
          <br />꼭 가야해요
        </Text>
      </section>
      <SeverityBackground severity={setBackgroundPercent(severity)}>
        <section className="highlight"></section>
      </SeverityBackground>
    </Container>
  );
};

export default SeverityBar;
