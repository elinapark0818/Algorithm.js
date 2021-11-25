function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // 원금(principal)이 1이고 연이율이 interestRate일 때, 2이상 될 때까지 몇 년이 걸리는지...
  // '연이율을 100으로 나눈 값'을 '원금'과 더하면 이자를 구할 수 있다.
  // (원금이 1이고 연이율이 7이라면, 1년뒤 금액은 (1 + 0.07)* 1)
  // 몇 년이 걸릴지 모르니까, while을 쓰는게 좋겠다.
  // 1년 뒤에는 원금이 변경되니, 원금이 2배인 2가되기 전까지 반복문(while)을 작성하자
  // 시간(년)을 리턴해야한다

  // 원금을 1로
  let principal = 1;
  // 몇년이 걸릴지 모르니까 일단 초기값(시간)을 0으로 하고
  let year = 0;
  // 이자는 원금(principal) + (연이율 / 100)
  let interest = 1 + interestRate / 100;
  // 1년이 지나면 복리가 생기니까, 2보다 작을 동안을 계산하자
  while (principal < 2) {
    // 원금에는 원금에 이자를 곱한 값을 넣고
    principal *= interest;
    // 결과값에 1(년)씩 더해주자
    year++;
  }
  // 시간을 리턴해주자
  return year;
}
