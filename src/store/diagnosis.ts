export const sleepdisorder_questions = [
  {
    id: "1",
    question: "언제부터 잠이 안오기 시작했나요?",
    answers: [
      { answer_id: 1, answer: "1주 전", score: 0, is_decisive: 0 },
      { answer_id: 2, answer: "2주 전", score: 1, is_decisive: 0 },
      { answer_id: 3, answer: "한달 전", score: 2, is_decisive: 0 },
      { answer_id: 4, answer: "3개월 전", score: 3, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "2",
    question: "일주일에 몇 번 정도 잠을 잘 못 주무시나요?",
    answers: [
      { answer_id: 1, answer: "주 1~2회", score: 0, is_decisive: 0 },
      { answer_id: 2, answer: "주 3회 이상", score: 1, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "3",
    question: "평소 알코올 섭취량은 어느정도 인가요?",
    answers: [
      {
        answer_id: 1,
        answer: "거의 마시지 않음 (주 0~1회)",
        score: 0,
        is_decisive: 0,
      },
      { answer_id: 2, answer: "주 2~3회", score: 1, is_decisive: 0 },
      { answer_id: 3, answer: "주 4회 이상", score: 2, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "4",
    question: "평소 카페인 음료 섭취량은 어느정도 인가요?",
    answers: [
      {
        answer_id: 1,
        answer: "거의 마시지 않음 (주 0~1회)",
        score: 0,
        is_decisive: 0,
      },
      { answer_id: 2, answer: "주 2~3회", score: 1, is_decisive: 0 },
      { answer_id: 3, answer: "주 4회 이상", score: 2, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "5",
    question: "자신에게 해당하는 것을 모두 고르세요",
    answers: [
      {
        answer_id: 1,
        answer: "누워있는 동안 생각하기, 계획하기, 회상하기 등 수면 방해 활동을 지속해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 2,
        answer: "취침과 기상시간이 규칙적이지 않아요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 3,
        answer: "수면과 관련되지 않은 활동(TV 시청, 독서 등)을 위해 침대를 사용해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 4,
        answer: "자기 전 3시간 내에 알코올이나 흡연을 해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 5,
        answer: "자기 전 3시간 내에 운동을 해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 6,
        answer: "자기전 침대에서 휴대폰, 인터넷 사용을 오래해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 7,
        answer: "잠에 들지 못할까봐 과도하게 걱정해요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 8,
        answer: "취침시간에 주변 소음에 시달려요",
        score: 2,
        is_decisive: 0,
      },
      {
        answer_id: 9,
        answer: "동반자의 행동(코골기, 다리움직임)으로 수면의 질이 떨어져요",
        score: 2,
        is_decisive: 0,
      },
      { answer_id: 10, answer: "낮잠을 자주 자요", score: 2, is_decisive: 0 },
    ],
    is_multiple: 1,
  },
  {
    id: "6",
    question: "수면의 문제가 일상생활에 지장을 주나요?",
    answers: [
      { answer_id: 1, answer: "예", is_decisive: 0 },
      { answer_id: 2, answer: "아니요", is_decisive: 0 },
    ],
    is_multiple: 0,
  },
];

export const headache_questions = [
  {
    id: "1",
    question: "언제부터 통증이 시작되었나요?",
    answers: [
      { answer_id: 1, answer: "1주 전", score: 0, is_decisive: 0 },
      { answer_id: 2, answer: "2주 전", score: 1, is_decisive: 0 },
      { answer_id: 3, answer: "한달 전", score: 2, is_decisive: 0 },
      { answer_id: 4, answer: "3개월 전", score: 3, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "2",
    question: "1달에 15일 이상 두통 증상이 있나요?",
    answers: [
      { answer_id: 1, answer: "예", score: 1, is_decisive: 0 },
      { answer_id: 2, answer: "아니요", score: 0, is_decisive: 0 },
    ],
    is_multiple: 0,
  },
  {
    id: "3",
    question: "통증의 정도가 어떻게 되나요?",
    answers: [
      {
        answer_id: 1,
        answer: "약간의 통증이 있지만 일상생활에는 문제가 없어요",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 2,
        answer: "중간정도의 통증이고 일상생활에 조금 영향이 있지만 참을 만해요",
        score: 2,
        is_decisive: 0,
      },
      {
        answer_id: 3,
        answer: "꽤 통증이 심하고 일상생활에 지장을 줘요",
        score: 3,
        is_decisive: 0,
      },
      {
        answer_id: 4,
        answer: "통증이 심각해서 일상생활이 어려워요",
        score: 4,
        is_decisive: 0,
      },
      {
        answer_id: 5,
        answer: "태어나서 한 번도 경험해보지 못한 통증으로 벼락 맞은 듯이 아파요",
        score: 5,
        is_decisive: 0,
      },
    ],
    is_multiple: 0,
  },
  {
    id: "4",
    question: "한 달에 15일 이상 진통제 등의 약물을 지속적으로 복용했나요?",
    answers: [
      {
        answer_id: 1,
        answer: "예",
        score: 1,
        is_decisive: 0,
      },
      {
        answer_id: 2,
        answer: "아니요",
        score: 0,
        is_decisive: 0,
      },
    ],
    is_multiple: 0,
  },
];
