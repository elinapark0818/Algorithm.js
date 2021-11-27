// 길이가 같은 1차원 정수 배열 a, b 가 주어진다
// a와 b의 내적을 리턴하라
// 내적이 무엇인가?
// 입출력 예시를 보니, a[i]와 b[i]를 곱한 값을 다 더해주네

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
