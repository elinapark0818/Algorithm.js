// * n의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수?
// * 내림차순 하라

function solution(n) {
  return (
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("") * 1
  );
}
