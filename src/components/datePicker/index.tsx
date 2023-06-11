import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { Container } from "./index.style";
import "react-calendar/dist/Calendar.css";

export interface IDatePickerProps {
  setValue: (val: Value) => void;
}

function DatePicker({ setValue }: IDatePickerProps) {
  const handleChange = (val: Value) => {
    setValue(val);
  };

  return (
    <Container>
      <Calendar onChange={handleChange} next2Label={null} prev2Label={null} />
    </Container>
  );
}

export default DatePicker;
