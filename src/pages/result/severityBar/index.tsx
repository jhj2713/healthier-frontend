import { Container, Text, SeverityBackground } from "./index.style";

const SeverityBar = ({ severity }: { severity: number }) => {
  const setBackgroundPercent = (severity: number): number => {
    switch (severity) {
      case 0:
        return 5;
      case 1:
        return 35;
      case 2:
        return 65;
      default:
        return 100;
    }
  };

  return (
    <Container>
      <section className="text-box">
        <Text type={0} severity={severity}>
          정상
        </Text>
        <Text type={1} severity={severity}>
          경미
        </Text>
        <Text type={2} severity={severity}>
          주의
        </Text>
        <Text type={3} severity={severity}>
          심각
        </Text>
      </section>
      <SeverityBackground severity={setBackgroundPercent(severity)}>
        <section className="highlight"></section>
      </SeverityBackground>
    </Container>
  );
};

export default SeverityBar;
