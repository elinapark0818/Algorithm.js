// 배열 두 개,
// A는 순서 그대로
// B는 최대한 이기게
// 그냥 내림차순 정렬하면 되겠는데

function solution(A, B) {
  // B가 이긴 횟수 담고
  let answer = 0;

  // 내름차순
  A.sort((a, b) => b - a);
  // 오름차순
  B.sort((a, b) => a - b);

  // A를 도는데 A의 가장 큰 숫자가 첫번째 순서로 나온다
  for (const a of A) {
    // B 맨 뒤 숫자가 제일 큰 값
    const max = B[B.length - 1];
    // B의 가장 큰 값보다 A의 숫자들이 작다면
    if (a < max) {
      // B가 이긴다.
      answer++;
      // 한번 쓴 카드는 지우기.
      B.pop();
    }
  }
  // B가 이긴 총 횟수
  return answer;
}
