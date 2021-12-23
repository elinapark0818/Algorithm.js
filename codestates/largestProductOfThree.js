const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 오름차순 정렬해서
  const newArr = arr.slice().sort((a, b) => a - b);
  // 상대적으로 큰 3개의 값을 배열에 담는다

  // 모두 양수일 때 마지막 3개의 요소를 곱해준다
  const result1 =
    newArr[newArr.length - 1] *
    newArr[newArr.length - 2] *
    newArr[newArr.length - 3];
  // 가장 큰 수가 양수면서, 가장 작은 2개의 요소를 곱한다
  const result2 = newArr[newArr.length - 1] * newArr[0] * newArr[1];

  // 둘 중 더 큰 값을 리턴한다
  return Math.max(result1, result2);
};
