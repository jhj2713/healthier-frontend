import DatePicker from ".";
import { Meta } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import { Value } from "react-calendar/dist/cjs/shared/types";

export default {
  component: DatePicker,
  title: "DatePicker",
} as Meta;

export const Default = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleValue = (val: Value) => updateArgs({ value: val });

  return <DatePicker value={value} setValue={handleValue} />;
};
