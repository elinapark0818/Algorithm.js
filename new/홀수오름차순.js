// 정수 n 이 주어진다.
// n 이하의 홀수값을
// 오름차순으로 배열에 담아 출력해라
function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}
