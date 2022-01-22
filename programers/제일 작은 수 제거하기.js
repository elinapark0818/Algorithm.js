// * 정수를 저장한 배열 arr
// * 가장 작은 정수를 제거한 배열을 리턴하라
function solution(arr) {
  const min = arr.reduce((acc, cur) => Math.min(acc, cur));

  let answer = arr.filter((i) => i !== min);
  answer = answer.length === 1 ? [-1] : answer;

  return answer;
}
