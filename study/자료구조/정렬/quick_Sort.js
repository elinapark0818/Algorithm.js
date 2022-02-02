// * 퀵 정렬은 분할정복 방법을 통해 주어진 배열을 정렬한다
// * 퀵 정렬은 불안정 정렬에 속한다
// * 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다
// * MergeSort 와 달리 배열을 비균등하게 분할한다

// ? 배열 가운데 하나의 원소를 고른다 === pivot
// ? pivot 앞에는 pivot보다 작은 값을 가진 원소들이 오고
// ? pivot 뒤에는 picot보다 큰 값을 가진 원소들이 오게끔
// ? pivot 을 기준으로 배열을 둘로 나눈다 (분할한다)

// ? 분할된 두 개의 작은 배열에 대해 재귀적으로 반복한다 (정복한다)

// ? 정렬된 두 개의 작은 배열을 하나에 배열에 합친다. (결합한다)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
};

// * Advanced: quickSort 함수의 두번째 인자로 콜백함수를 받아서
// * 콜백함수의 리턴값을 기준으로 정렬하기

const quickSort = function (arr, func = (data) => data) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (func(arr[i]) <= func(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  let sortedLeft = quickSort(left, func);
  let sortedRight = quickSort(right, func);

  return [...sortedLeft, pivot, ...sortedRight];
};
