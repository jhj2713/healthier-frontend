import Button from ".";
import { IButton } from "src/interfaces/component";
import { Meta, Story } from "@storybook/react";

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

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false,
  children: "Button",
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  children: "Button",
};
