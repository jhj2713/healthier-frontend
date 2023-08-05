import { Meta, Story } from "@storybook/react";
import Dropdown, { IDropdown } from ".";

export default {
  component: Dropdown,
  title: "Dropdown",
  argTypes: {
    title: {
      description: "드롭다운 타이틀",
    },
    isSelected: {
      description: "옵션 선택 여부",
    },
    options: {
      description: "선택 가능한 드롭다운 옵션",
    },
  },
} as Meta;

const Template: Story<IDropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "출생연도",
  isSelected: false,
  options: Array.from(Array(92).keys())
    .map((y) => `${y + 1930}년`)
    .reverse(),
};

export const Selected = Template.bind({});
Selected.args = {
  title: "출생연도",
  isSelected: true,
  options: Array.from(Array(92).keys())
    .map((y) => `${y + 1930}년`)
    .reverse(),
};
