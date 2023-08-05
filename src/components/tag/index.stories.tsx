import { Meta, Story } from "@storybook/react";
import theme from "src/lib/theme";
import Tag, { ITag } from ".";

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

export const Default = () => {
  return <Tag selected={false}>Tag</Tag>;
};

export const Selected = () => {
  return <Tag selected>Tag</Tag>;
};

export const StyledPrimaryButton = () => {
  return <Tag style={{ color: theme.color.grey_200, background: theme.color.blue }}>Tag</Tag>;
};

export const StyledDisabledButton = () => {
  return <Tag style={{ color: theme.color.grey_200, background: theme.color.grey_500 }}>Tag</Tag>;
};
