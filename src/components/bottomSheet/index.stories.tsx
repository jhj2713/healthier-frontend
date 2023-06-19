import { Meta, Story } from "@storybook/react";
import BottomSheet from ".";
import { IBottomSheetProps } from "./index";

export default {
  component: BottomSheet,
  title: "BottomSheet",
  argTypes: {
    header: {
      description: "제목 텍스트",
    },
    children: {
      description: "내용 리엑트 엘리먼트",
    },
    onClickOverlay: {
      description: "뒷 배경 클릭 핸들러",
    },
    isBottomSheetOpen: {
      description: "bottom sheet 열림 상태",
    },
  },
} as Meta;

const Template: Story<IBottomSheetProps> = (args) => <BottomSheet {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "통신사를 선택해주세요",
  children: null,
  onClickOverlay() {
    return null;
  },
  isBottomSheetOpen: true,
};

export const Closed = Template.bind({});

Closed.args = {
  header: "통신사를 선택해주세요",
  children: null,
  onClickOverlay() {
    return null;
  },
  isBottomSheetOpen: false,
};
