// * arr[i] 가 divisor로 나누어떨어지는 값을.
// * 오름차순으로 정렬한 배열을 반환하라
// * 나누어 떨어지는 값이 없다면 -1을 담고 있는 배열을 리턴하라

function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);

  if (answer.length === 0) answer.push(-1);
  return answer;
}

// filter로 간단하게
function solution(arr, divisor) {
  let answer = arr.filter((i) => i % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
