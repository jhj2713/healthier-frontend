import { Container, Text, SeverityBackground } from "./index.style";

const setBackgroundPercent = (severity: number): number => {
  switch (severity) {
    case 0:
      return 5;
    case 1:
      return 48;
    default:
      return 100;
  }
};

const SeverityBar = ({ severity }: { severity: number }) => {
  return (
    <Container>
      <section className="text-box">
        <Text type={0} severity={severity}>
          관리가
          <br />
          필요해요
        </Text>
        <Text type={1} severity={severity}>
          병원에 가는걸
          <br />
          추천해요
        </Text>
        <Text type={2} severity={severity}>
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
