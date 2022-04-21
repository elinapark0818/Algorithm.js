// n >=2 일때, n번째 피보나치 수를 1234567 로 나눈 나머지를 리턴하라

function solution(n) {
  let answer = Fibonacci(n) % 1234567;
  return answer;
}

function Fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}
