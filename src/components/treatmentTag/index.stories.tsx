import TreatmentTag, { TTreatmentTag } from ".";
import { Meta, Story } from "@storybook/react";

export default {
  component: TreatmentTag,
  title: "TreatmentTag",
  argTypes: {
    type: {
      description: "태그 유형",
      options: ["therapy", "inspection"],
      control: {
        type: "select",
        labels: ["therapy", "inspection"],
      },
    },
  },
} as Meta;

const Template: Story<TTreatmentTag> = (args) => <TreatmentTag {...args} />;

export const Therapy = Template.bind({});
Therapy.args = {
  type: "therapy",
};

export const Inspection = Template.bind({});
Inspection.args = {
  type: "inspection",
};
