function getInputDayLabel() {
  const week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  const day = new Date("2021-12-25").getDay();
  const result = week[day];

  return result;
}

console.log(getInputDayLabel());
