// 총 길이에서 2를 나눈 값 만큼 폰켓몬을 가질 수 있다
// nums 는 총 폰켓몬의 수
// nums 의 길이는 항상 짝수
// 같은 종류의 폰켓몬은 같은 번호를 가지고 있다
// 최대한 다양한 종류의 폰켓몬을 갖는 방법
// 폰켓몬의 종류 수를 리턴하라

function solution(nums) {
  let answer = [];
  // 2로 나눈 값만큼 폰켓몬을 가질 수 있다
  const total = nums.length / 2;

  // nums는 1차원 배열이다
  // nums의 배열의 요소를 확인했을 때
  // 가질 수 있는 총 폰켓몬의 수보다
  // 작은 수가 되야한다(같은 종류가 있을 수 있으니)
  // 종류가 다른 폰켓몬이라면 answer 에 push
  nums.map((n) => {
    answer.length < total && !answer.includes(n) ? answer.push(n) : n;
  });
  return answer.length;
}
