// * 병합 정렬
// * 분할 정복 방법을 통해 구현한다

// ? 퀵정렬과 다르게 안정 정렬에 속한다

const merge = (left, right) => {
  // * 정렬된 left, right를 담을 배열
  let result = [];

  // * left , right 배열 원소를 대소 비교해서 result에 담기
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // * left 배열 원소만 남아있을 때
  while (left.length) {
    result.push(left.shift());
  }
  // * right 배열 원소만 남아있을 때
  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

const mergeSort = (arr) => {
  // * 빈 배열이거나, 원소가 하나뿐이라면 그냥 배열 리턴하기
  if (arr.length <= 1) {
    return arr;
  }

  // * 중간 값
  const mid = parseInt(arr.length / 2);
  // * mid 보다 왼쪽에 위치한 값들을 left 에
  const left = arr.slice(0, mid);
  // * mid 보다 오른쪽에 위치한 값들을 left 에
  const right = arr.slice(mid);

  // * merge 함수를 실행한다.
  return merge(mergeSort(left), mergeSort(right));
};
