import Tag, { ITag } from ".";
import { Meta, Story } from "@storybook/react";

export default {
  component: Tag,
  title: "Tag",
  argTypes: {
    selected: {
      description: "선택 여부",
    },
    children: {
      description: "태그 텍스트",
    },
  },
} as Meta;

const Template: Story<ITag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false,
  children: "Tag",
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  children: "Tag",
};
