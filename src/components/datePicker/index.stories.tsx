import { useArgs } from "@storybook/client-api";
import { Meta } from "@storybook/react";
import { Value } from "react-calendar/dist/cjs/shared/types";
import DatePicker from ".";

export default {
  component: DatePicker,
  title: "DatePicker",
} as Meta;

export const Default = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleValue = (val: Value) => updateArgs({ value: val });
  const disabledArray = [
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7),
    new Date(),
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7),
  ];

  return <DatePicker value={value} setValue={handleValue} disabledArray={disabledArray} />;
};
