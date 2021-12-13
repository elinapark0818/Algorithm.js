function leafYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

leafYear(2016); // 윤년이다. true
leafYear(2021); // 아니다. false

// 이렇게도 윤년인지 확인할 수 있다
function leafYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}
