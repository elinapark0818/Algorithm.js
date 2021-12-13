// 자연수 n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 리턴하라

// ? 3진법
// ? 123(3) = 11120

// ! toString() 특정 number 객체를 나타내는 문자열을 반환한다
const n = 123;
const result = n.toString(3); // '11120'

// ! parseInt() 문자열 인자를 구문분석하여 특정 진수의 정수를 반환한다.
parseInt(11120, 3); //123

// 3진수로 된 문자열로 바꾸고 toString()
// 배열로 변환 split()
// reverse 해서 다시 문자열로 변환 join
function solution(n) {
  const answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}

// 다른 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
