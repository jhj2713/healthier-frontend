import { MONTH_TO_DATES } from "src/data/dates";

export type TGender = "m" | "f";
export type TMonth = keyof typeof MONTH_TO_DATES;

export interface IInformation {
  name: string;
  birth: {
    year: number;
    month: number;
    date: number;
  };
  gender: TGender;
}
