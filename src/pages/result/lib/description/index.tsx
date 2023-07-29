import { Text } from "./index.style";

const Description = ({ text, className = "" }: { text: string; className?: string }) => {
  return <Text className={className}>{text}</Text>;
};

export default Description;
