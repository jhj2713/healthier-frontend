export const ANSWER_TYPE = {
  DEF: "DEF",
  IMG: "IMG",
  ETC: "ETC",
  NUMBER_1: "NUMBER_1",
  NUMBER_2: "NUMBER_2",
  NUMBER_3: "NUMBER_3",
  NUMBER_4: "NUMBER_4",
  NUMBER_5: "NUMBER_5",
  NUMBER_6: "NUMBER_6",
  NUMBER_7: "NUMBER_7",
  NUMBER_8: "NUMBER_8",
  NUMBER_9: "NUMBER_9",
  NUMBER_10: "NUMBER_10",
  DRAG_1: "DRAG_1",
  STR: "STR",
  NA: "NA",
} as const;

export const DIGESTIVE_BODY_PART = {
  "right-upper-stomach": "0",
  "solar-plexus": "1",
  "left-upper-stomach": "2",
  "right-side": "3",
  "belly-button": "4",
  "left-side": "5",
  "right-lower-stomach": "6",
  "middle-lower-stomach": "7",
  "left-lower-stomach": "8",
} as const;

export const TOOTH_PART = {
  "top-right": "0",
  top: "1",
  "top-left": "2",
  "bottom-right": "3",
  bottom: "4",
  "bottom-left": "5",
};

export const TIME_TYPES = ["시간", "일", "주", "개월", "년"] as const;

export const INITIAL_QUESTION = {
  id: "",
  question: "",
  is_multiple: false,
  image_url: null,
  answer_type: ANSWER_TYPE.DEF,
  answers: null,
  sub_content: null,
};

export const INITIAL_ANSWER = {
  answer_id: [],
  next_question: null,
};
