// 전체 예산이 정해져 있다. budget . number
// d 에는 부서별로 신청한 금액이 들어있는 배열이다.

// 입출력 예시
// d = [1,3,2,4,5], budget = 9
// result = 3 (1, 2, 4 를 요청한 부서를 충족시킴). 나머지 2는 버려진다

// 반복문으로 d를 돌리자
// d[i]가 budget 보다 작으면 빼주고 카운트를 센다
// 뺀 값에서 d[i]가 또 작은지 확인하고 카운트를 센다
// 남은 budget이 d[i]보다 작아지면 멈춘다.
function solution(d, budget) {
  let answer = 0;
  const sortD = d.sort((a, b) => a - b);
  let num = budget;
  for (let i = 0; i < sortD.length; i++) {
    if (sortD[i] <= num) {
      num -= sortD[i];
      answer++;
    }
  }
  return answer;
}

// 다른 풀이
// reduce 로 이렇게 간단하게 할 수 있다...
// 고차함수 사용을 바로 떠올리는 실력이 필요한 것 같다.

function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
}
