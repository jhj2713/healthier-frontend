import { makeDates } from "src/utils/inputUtils";

export const MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

export const MONTH_TO_DATES = {
  1: makeDates(31),
  2: makeDates(28),
  3: makeDates(31),
  4: makeDates(30),
  5: makeDates(31),
  6: makeDates(30),
  7: makeDates(31),
  8: makeDates(31),
  9: makeDates(30),
  10: makeDates(31),
  11: makeDates(30),
  12: makeDates(31),
};
