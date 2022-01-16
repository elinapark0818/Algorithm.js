// todo: 정수 n의 약수를 모두 더한 값을 리턴하라

// * 약수는 나머지가 0이되는 값
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
