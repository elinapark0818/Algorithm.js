// 윤년이다 2월이 29일까지
// 두 수 a, b를 입력받아
// 2016년 a월 b일이 몇요일인지 구하라

function solution(a, b) {
  // 윤년이라고 했으니, 2월은 29일로
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 요일의 위치를 %7 로 했을 때, 인덱스 값으로 구할거다.
  // 인덱스는 0부터 시작하고, 1월 1일이 금요일이니까 목요일부터 배열에 담는다
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  // 편의상 일자를 days 에 할당
  let days = b;
  // 1월부터 12월까지 반복해서
  for (let i = 1; i < a; i++) {
    // 해당하는 월(month)의 일(days)을 더해준다
    days += monthDay[i];
  }
  // 요일을 구하기 위해 7로 나누었을 때의 몫을
  // weekDay의 인덱스 값으로 리턴하면 원하는 2016년의 해당날짜 요일이 리턴된다
  return weekDay[days % 7];
}

// Date 를 사용하면 윤년 따지지않고 쉽게 구할 수 있다...
function solution(a, b) {
  let answer = "";
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016,${a},${b}`);
  answer = day[date.getDay()];
  return answer;
}

// 다른 풀이
function solution(a, b) {
  let answer = "";
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 달마다 날짜 수
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]; // 요일

  for (let i = 1; i < a; i++) {
    // 주어진 달보다 적게
    let day = month[i] % 7; // 달의 마지막 날의 요일 인덱스 값
    for (let j = 0; j < day; j++) {
      // 요일 배열 재정비
      let back = week.shift(); // 앞의 요소 빼기
      week.push(back); // 뺀 요소 다시 추가
    }
  }
  let d = b % 7; // 요일 인덱스 값
  answer = week[d]; // 요일 찾기
  return answer;
}
