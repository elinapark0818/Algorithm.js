function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 빼기 연산자를 사용해야겠다.
  // true false 로 리턴해야한다.
  // 0 또는 1이 될때까지 빼기를 계속하게 하고
  // num 이 2보다 큰 수라는 조건을 주자
  // 반복문 금지
  // 음수도 취급하게 만들어야 한다

  // 홀수면 true'
  if (num === 1) return true;
  // 짝수면 false
  if (num === 0) return false;

  // 음수일 경우
  if (num < 0) {
    return isOdd(-num);
  }
  // 2씩 계속 빼기
  num -= 2;
  // 자신을 호출하는 재귀!
  return isOdd(num);
}
