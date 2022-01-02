// * 0 ~ 9 까지 이루어진 배열.
// * 연속적으로 나타나는 숫자는 하나만 남기고 제거할 거다.
// * 배열의 순서를 유지해야 한다.

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function solution(arr) {
  return arr.filter((i, index) => i != arr[index + 1]);
}
