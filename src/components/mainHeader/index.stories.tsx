import LogoHeader from ".";
import { Meta, Story } from "@storybook/react";

export default {
  component: LogoHeader,
  title: "LogoHeader",
} as Meta;

const Template: Story = (args) => <LogoHeader {...args} />;

export const Default = Template.bind({});
