function interestCalculator(rate, payment, term) {
  let interest = (((payment * term * (term + 1)) / 2) * rate) / 12;
  console.log(interest.toFixed(0));
}

// 이율이 0.5% 일때, 매월 50만원씩 12개월 납부할 경우
interestCalculator(0.005, 500000, 12); // 이자는 16,250원이다.

// 이율이 15% 일때, 매월 60만원씩 24개월 납부할 경우
interestCalculator(0.015, 600000, 24); // 이자는 225,000원이다.
