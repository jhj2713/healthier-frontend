import styled from "styled-components";

const Container = styled.section`
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextBox = styled.section`
  display: flex;
  justify-content: space-between;
  width: calc(var(--vw, 1vw) * 100 - 8.6rem);

  font-weight: 100;
  letter-spacing: -0.05rem;

  margin-left: 4.3rem;
`;
const Text = styled.section<{ type: number; severity: number }>`
  font-size: 1.4rem;

  color: ${({ theme, type, severity }) =>
    type !== severity
      ? theme.color.grey_400
      : type === 3
      ? theme.color.red
      : type === 2
      ? "#8A5FD0"
      : type === 1
      ? theme.color.blue
      : theme.color.grey_400};
  font-weight: ${({ type, severity }) => type === severity && 300};
`;
const Background = styled.section`
  margin-top: 1rem;
  margin-left: 4.3rem;

  background: rgba(84, 100, 242, 0.33);
  border-radius: 10rem;

  width: calc(var(--vw, 1vw) * 100 - 8.6rem);
  height: 0.5rem;
`;
const Highlight = styled.section<{ severity: number }>`
  height: 100%;
  width: ${({ severity }) => severity}%;

  border-radius: 10rem;
  background: ${({ severity }) =>
    severity === 100
      ? "linear-gradient(270deg, #E06122 0%, #5464F2 48.96%, #3F444F 100%);"
      : severity === 65
      ? "linear-gradient(270deg, #8A5FD0 0%, #4D5ABF 45.08%, #3F444F 100%);"
      : "linear-gradient(270deg, #4A56A5 0%, #3F444F 100%);"};
`;

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
      <TextBox>
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
      </TextBox>
      <Background>
        <Highlight severity={setBackgroundPercent(severity)}></Highlight>
      </Background>
    </Container>
  );
};

export default SeverityBar;
