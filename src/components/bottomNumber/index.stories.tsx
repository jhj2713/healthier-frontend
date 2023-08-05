import { Meta, Story } from "@storybook/react";
import { IBottomNumber } from "src/interfaces/resultPage";
import SwiperPageNumber from ".";

export default {
  component: SwiperPageNumber,
  title: "SwiperPageNumber",
  argTypes: {
    curIndex: {
      description: "현재 페이지 번호",
    },
    totalCount: {
      description: "전체 페이지 번호",
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
