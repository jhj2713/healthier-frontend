import { useArgs } from "@storybook/client-api";
import { Meta } from "@storybook/react";
import TextFieldOutlined from ".";

export default {
  component: TextFieldOutlined,
  title: "TextFieldOutlined",
  argTypes: {
    borderRadius: {
      description: "input의 border-radius 값",
    },
    placeholder: {
      description: "placeholder",
    },
    type: {
      description: "text 혹은 number",
    },
    value: {
      description: "텍스트필드 입력 값",
    },
    onChange: {
      description: "값 변경 핸들러",
    },
  },
} as Meta;

export const Default = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value });

  return <TextFieldOutlined value={value} onChange={handleChangeInput} placeholder="숫자 입력" type="number" />;
};
