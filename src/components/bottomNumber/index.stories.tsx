import SwiperPageNumber from ".";
import { Meta, Story } from "@storybook/react";
import { IBottomNumber } from "src/interfaces/resultPage";

export default {
  component: SwiperPageNumber,
  title: "SwiperPageNumber",
  argTypes: {
    selected: {
      description: "선택 여부",
    },
    children: {
      description: "버튼 텍스트",
    },
  },
} as Meta;

const Template: Story<IBottomNumber> = (args) => <SwiperPageNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  curIndex: 1,
  totalCount: 3,
};

export const SecondPage = Template.bind({});
SecondPage.args = {
  curIndex: 2,
  totalCount: 3,
};

export const ThirdPage = Template.bind({});
ThirdPage.args = {
  curIndex: 3,
  totalCount: 3,
};
