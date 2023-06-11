import Calendar from "react-calendar";
import { LooseValue, Value } from "react-calendar/dist/cjs/shared/types";
import { Container } from "./index.style";
import "react-calendar/dist/Calendar.css";
import { formatter } from "../../utils/calendar";

export interface IDatePickerProps {
  setValue: (val: Value) => void;
  value: LooseValue;
  disabledArray: Date[];
}

function DatePicker({ value, setValue, disabledArray }: IDatePickerProps) {
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
        tileDisabled={({ date }) => disabledArray.findIndex((val) => formatter(val) === formatter(date)) !== -1}
        nextLabel={<img src="/images/doctorAppointment/arrow.svg" />}
        prevLabel={<img src="/images/doctorAppointment/arrow.svg" style={{ transform: "rotate(180deg)" }} />}
        next2Label={null}
        prev2Label={null}
      />
    </Container>
  );
}

export default DatePicker;
