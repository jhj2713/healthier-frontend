import { Meta, Story } from "@storybook/react";
import LogoHeader from ".";

export default {
  component: LogoHeader,
  title: "LogoHeader",
} as Meta;

const Template: Story = (args) => <LogoHeader {...args} />;

export const Default = Template.bind({});
