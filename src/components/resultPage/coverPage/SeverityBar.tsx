import styled from "styled-components";

const Container = styled.section`
  margin-top: 2.4rem;
`;
const TextBox = styled.section`
  display: flex;
  justify-content: space-between;

  font-weight: 100;
  letter-spacing: -0.05rem;
`;
const Text = styled.section<{ type: number; severity: number }>`
  font-size: 1.4rem;

  color: ${({ theme, type, severity }) =>
    type !== severity
      ? theme.color.grey_400
      : type === 4
      ? theme.color.red
      : type === 3
      ? "#8A5FD0"
      : type === 2
      ? theme.color.blue
      : theme.color.grey_400};
  font-weight: ${({ type, severity }) => type === severity && 300};
`;
const Background = styled.section`
  margin-top: 1rem;

  background: rgba(84, 100, 242, 0.33);
  border-radius: 10rem;

  width: 27.4rem;
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
      case 1:
        return 5;
      case 2:
        return 35;
      case 3:
        return 65;
      default:
        return 100;
    }
  };

  return (
    <Container>
      <TextBox>
        <Text type={1} severity={severity}>
          정상
        </Text>
        <Text type={2} severity={severity}>
          경미
        </Text>
        <Text type={3} severity={severity}>
          보통
        </Text>
        <Text type={4} severity={severity}>
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
