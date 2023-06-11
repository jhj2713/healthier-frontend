import DatePicker, { IDatePickerProps } from ".";
import { Meta, Story } from "@storybook/react";

export default {
  component: DatePicker,
  title: "DatePicker",
} as Meta;

const Template: Story<IDatePickerProps> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  setValue: (val) => console.log(val),
};
