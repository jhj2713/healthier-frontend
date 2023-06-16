import Button from ".";
import { Meta } from "@storybook/react";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    selected: {
      description: "선택 여부",
    },
    children: {
      description: "버튼 텍스트",
    },
  },
} as Meta;

export const Default = () => {
  return <Button selected={false}>Button</Button>;
};

export const Selected = () => {
  return <Button selected>Button</Button>;
};

export const StyledDefaultButton = () => {
  return (
    <Button selected={false} style={{ width: "7.9rem", height: "4.4rem" }}>
      Button
    </Button>
  );
};

export const StyledSelectButton = () => {
  return (
    <Button selected style={{ width: "7.9rem", height: "4.4rem" }}>
      Button
    </Button>
  );
};
