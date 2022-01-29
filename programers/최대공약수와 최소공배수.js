// * 두 수를 입력받아 최대공약수와 최소공배수를 반환하는 함수
// * 최대공약수 : 두 수 A,B의 공통된 약수 중 가장 큰 정수
// * 최소공배수 : 두 수 A,B의 공통된 약수 중 가장 작은 정수

// ? 일단 약수를 다 구하는 반복문을 작성하자
// ? A, B를 서로 나누었을 때, 나누어지면 B가 최대공약수(A>B)
// ? 서로가 나누어지면 A % B 가 최대공약수

// ? 유클리드 호제법이란? 🤔
// 두 수의 최대공약수를 구하는 알고리즘이다.
// 2개의 자연수 A,B 에 대해서 A를 B로 나눈 나머지를 r이라고 한다면 (단, A>B 이다),
// A와 B의 최대공약수는 B와 r의 최대공약수와 같다.
// 이 성질에 따라 B를 r로 나눈 나머지 r` 을 구하고,
// 다시 r을 r` 로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때,
// 나누는 수가 A와 B의 최대 공약수이다.

// 유클리드 호제법이란?
// 쉽게 설명하자면,
// a > b 일 때,
// a % b = r (나머지)
// b % r = r2
// r % r2 = r3
function solution(n, m) {
  // 최대공약수 구하기
  const gcf = (a, b) => {
    if (b === 0) {
      // 나머지가 0이 되면 나눈 수를 반환하면 된다
      return a;
    }
    // 나머지가 0이 아니면, 재귀 돌리기
    return gcf(b, a % b);
  };
  // 최소공배수 구하기
  const lcm = (a, b) => (a * b) / gcf(a, b);

  return [gcf(n, m), lcm(n, m)];
}
