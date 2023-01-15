export interface IContentHeader {
  text: string;
  back: boolean;
  exit: boolean;
  backCallback?: () => void;
  exitCallback?: () => void;
}

export interface IRoundButton {
  outline: string;
  backgroundColor: string;
  color: string;
  children: string;
}

export interface IButton {
  selected: boolean;
  children: string;
}

export interface ITag {
  text: string;
  selected: boolean;
}

export interface IListComponent {
  diagnosis: IDiagnosisList;
}

export interface IDiagnosisList {
  banner_illustration: string;
  record: {
    diagnosis_id: string;
    title: string;
    is_created: string;
    severity: number;
  };
}

export interface ISymptomTypeComponent {
  selected: boolean;
  title: string;
}
