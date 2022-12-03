// array의 각 element 중 divisor로 나누어 떨어지는 값을
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  // arr 의 원소가 divisor로 나누어 떨어지는것만 필터링
  let answer = arr.filter((v) => v % divisor === 0);
  // 결과를 오름차순으로 리턴하되
  answer = answer.sort((a, b) => a - b);

  // 나누어떨어지는게 없다면 배열에 -1 담아서 리턴하기
  return answer.length !== 0 ? answer : [-1];
}
