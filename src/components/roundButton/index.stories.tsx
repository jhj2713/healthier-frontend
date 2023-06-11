import RoundButton, { IRoundButton } from ".";
import { Meta, Story } from "@storybook/react";
import theme from "src/lib/theme";

export default {
  component: RoundButton,
  title: "RoundButton",
  argTypes: {
    outline: {
      description: "버튼 outline 색상",
    },
    backgroundColor: {
      description: "버튼 배경 색상",
    },
    color: {
      description: "버튼 텍스트 색상",
    },
    children: {
      description: "버튼 텍스트",
    },
  },
} as Meta;

const Template: Story<IRoundButton> = (args) => <RoundButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  outline: "none",
  backgroundColor: theme.color.blue,
  color: theme.color.grey_100,
  children: "Button",
};

export const Unselected = Template.bind({});
Unselected.args = {
  outline: theme.color.grey_650,
  backgroundColor: theme.color.grey_900,
  color: theme.color.grey_300,
  children: "Button",
};

export const Selected = Template.bind({});
Selected.args = {
  outline: "none",
  backgroundColor: theme.color.sub_blue,
  color: theme.color.blue,
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  outline: "none",
  backgroundColor: theme.color.grey_750,
  color: theme.color.grey_500,
  children: "Button",
};

export const Enabled = Template.bind({});
Enabled.args = {
  outline: "none",
  backgroundColor: theme.color.green,
  color: theme.color.grey_900,
  children: "Button",
};
