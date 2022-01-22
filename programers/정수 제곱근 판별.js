// * n이 어떤 양의 정수의 제곱이라면, x+1 의 제곱을 리턴,
// * 아니라면 -1 리턴하라
function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}
