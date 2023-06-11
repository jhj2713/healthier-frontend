import styled from "styled-components";

export const Container = styled.div`
  // 캘린더 전체
  .react-calendar {
    border: none;
    background-color: ${({ theme }) => theme.color.grey_850};
  }

  // 상단 달 선택 navigation
  .react-calendar__navigation__label > span {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #f2f2f2;
  }
  .react-calendar__navigation__label:enabled:hover {
    background: none;
  }

  // 요일
  .react-calendar__month-view__weekdays__weekday {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.color.grey_600};
  }

  // 날짜
  .react-calendar__tile {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.color.grey_300};

    :hover,
    :focus {
      background: none;
    }
    :disabled {
      color: #3f444f;
      background: none;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #3f444f;
  }

  // 오늘 날짜
  .react-calendar__tile--now {
    font-weight: 700;
    color: ${({ theme }) => theme.color.grey_100};
    background: none;

    :hover,
    :focus {
      background: none;
    }
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #353f87;
    border-radius: 0.4rem;
  }
`;
