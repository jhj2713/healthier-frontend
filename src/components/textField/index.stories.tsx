import TextField from ".";
import { Meta } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

export default {
  component: TextField,
  title: "TextField",
  argTypes: {
    label: {
      description: "텍스트필드 상단 레이블",
    },
    placeholder: {
      description: "placeholder",
    },
    value: {
      description: "텍스트필드 입력 값",
    },
    setValue: {
      description: "텍스트필드 입력 값 변경 함수",
    },
  },
} as Meta;

export const Default = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleValue = (val: string) => updateArgs({ value: val });

  return (
    <TextField
      label="추가적인 전달사항"
      placeholder="의사선생님에게 말씀드리고 싶은 부분을 적어주세요"
      value={value}
      setValue={handleValue}
    />
  );
};
