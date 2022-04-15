// 모든 number들을 string으로 바꿔주고
// sort 해서 (b+a) - (a+b) 가 양수이면 순서 유지.

function solution(numbers) {
  let answer = numbers
    .map((a) => String(a))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// 변수값 불러오는걸로 적용

function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}
