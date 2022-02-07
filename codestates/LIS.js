const LIS = function (arr) {
  // * 배열의 첫번째 요소를 초기값으로 담아둔 result
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    // * LIS를 구하기 위한 target 설정
    const target = arr[i];

    // * 배열의 마지막 요소보다 target이 크다면
    if (result[result.length - 1] < target) {
      // * result에 target을 담는다.
      result.push(target);
    }
    // * target보다 배열의 마지막요소가 크다면
    else {
      // * 최소값 인덱스
      let min = 0;
      // * 최대값 인덱스
      let max = result.length - 1;

      // * 최대값을 구하기 위해
      while (min < max) {
        // * 중간 값을 설정하고
        let mid = parseInt((min + max) / 2);
        // * Binary Search 로 구하기
        if (result[mid] >= target) {
          max = mid;
        } else if (result[mid] < target) {
          min = mid + 1;
        }
      }
      result[min] = target;
    }
  }
  // * result의 길이를 리턴하자
  return result.length;
};
