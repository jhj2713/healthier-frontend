import Calendar from "react-calendar";
import { LooseValue, Value } from "react-calendar/dist/cjs/shared/types";
import { Container } from "./index.style";
import "react-calendar/dist/Calendar.css";
import { formatter } from "../../utils/calendar";
import { useEffect } from "react";

const disableArray = ["2023-06-04", "2023-06-11", "2023-06-18", "2023-06-25"];

export interface IDatePickerProps {
  setValue: (val: Value) => void;
  value: LooseValue;
}

function DatePicker({ value, setValue }: IDatePickerProps) {
  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (val: Value) => {
    setValue(val);
  };

  return (
    <Container>
      <Calendar
        value={value}
        defaultValue={new Date()}
        onChange={handleChange}
        formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
        tileDisabled={({ date }) => disableArray.findIndex((val) => val === formatter(date)) !== -1}
        next2Label={null}
        prev2Label={null}
      />
    </Container>
  );
}

export default DatePicker;
