// 양꼬치(n) 10인분 마다 음료수(k) 1개 서비스로 준다.
// 계산할 금액을 구하라

function solution(n, k) {
  // k * 2000
  // n 이 10의 배수일때마다 k-1
  // 10인분마다 k - parseInt(n / 10)
  let answer = 0;

  if (n >= 10) {
    k -= parseInt(n / 10);
  }
  n = n * 12000;
  k = k * 2000;
  answer = n + k;
  return answer;
}
