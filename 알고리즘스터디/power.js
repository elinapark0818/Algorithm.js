function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.

  // 지수가 0이면 거듭제곱은 무조건 1이다.
  if (exponent === 0) return 1;

  // 시간복잡도 O(logN)을 만족해야한다.
  // 반으로 쪼개서 홀수,짝수일 때의 결과를 출력하자

  // 지수를 반으로 나눈다
  const half = parseInt(exponent / 2);

  // 베이스랑 하프로 재귀를 돌리자.
  const temp = power(base, half);

  // 거듭제곱한 결과에 94906249를 나눈 나머지를 리턴
  const result = (temp * temp) % 94906249;

  // 홀수면, half = parseInt(exponent / 2) 내림때문에 지수가 1 부족하다
  // result에 base 한번 더 곱하기
  if (exponent % 2 === 1) return (base * result) % 94906249;
  // 짝수면, result 리턴
  else return result;
}
