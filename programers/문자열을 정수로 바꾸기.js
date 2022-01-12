// todo: 문자열 s를 숫자로 변환한 결과를 반환하는 함수를 만들어라
function solution(s) {
  for (let i = 0; i < s; i++) {
    if (s[0] === "-") {
      return Number(-s);
    }
  }
  return Number(s);
}

// ! 사칙연산 더하기 문자열은 숫자가 리턴된다!
function solution(s) {
  return +s;
}

// * 와 ㅋㅋ
function solution(s) {
  return s / 1;
}
