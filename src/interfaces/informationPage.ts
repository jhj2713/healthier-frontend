import { Dispatch } from "react";

export interface IGenderProps {
  gender: string;
  setGender: (gender: string) => void;
}

export interface ITagsProps {
  health: ITag[];
  setHealth: (health: ITag[]) => void;
}

export interface ITag {
  id: number;
  name: string;
  selected: boolean;
}

export interface IYearPickerProps {
  year: number;
  setYear: (year: number) => void;
}

export interface IAgreement {
  member: boolean;
  information: boolean;
}

export interface IAgreementProps {
  agree: IAgreement;
  setAgree: Dispatch<IAgreement>;
}
