import { useArgs } from "@storybook/client-api";
import { Meta } from "@storybook/react";
import TextField2 from ".";

export default {
  component: TextField2,
  title: "TextField2",
  argTypes: {
    label: {
      description: "텍스트필드 상단 레이블",
    },
    placeholder: {
      description: "placeholder",
    },
    type: {
      description: "text 혹은 number",
    },
    value: {
      description: "입력 값",
    },
    name: {
      description: "해당 input의 이름",
    },
    onChange: {
      description: "이벤트 핸들러",
    },
  },
} as Meta;

export const Default = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

  return <TextField2 label="이름" placeholder="이름을 입력해 주세요" type="text" value={value} name="name" onChange={handleChangeValue} />;
};
