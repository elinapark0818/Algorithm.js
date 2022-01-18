// * 자연수 n이 주어지면
// * 각 자릿수의 합을 구해서 리턴하는 함수를 만들어라

// ? : n의 범위 100,000,000 이하의 자연수
// ? => 시간복잡도. O(n) 또는 O(log n)

function solution(n) {
  // * 자연수 n을 문자열로 바꿔서
  // * answer에 더해 리턴하자
  let str = String(n);
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}

function solution(n) {
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}
