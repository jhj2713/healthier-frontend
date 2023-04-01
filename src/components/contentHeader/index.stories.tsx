import ContentHeader from ".";
import { Meta, Story } from "@storybook/react";
import { IContentHeader } from "src/interfaces/component";

export default {
  component: ContentHeader,
  title: "ContentHeader",
  argTypes: {
    back: {
      description: "뒤로가기 버튼 유무",
    },
    exit: {
      description: "exit 버튼 유무",
    },
    children: {
      description: "헤더 타이틀 텍스트",
    },
  },
} as Meta;

const Template: Story<IContentHeader> = (args) => <ContentHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  back: true,
  exit: true,
  children: "감별 결과",
};

export const BackHeader = Template.bind({});
BackHeader.args = {
  back: true,
  exit: false,
  children: "감별 결과",
};

export const ExitHeader = Template.bind({});
ExitHeader.args = {
  back: false,
  exit: true,
  children: "감별 결과",
};
