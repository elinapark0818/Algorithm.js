## Bubble Sort (버블정렬)

거품이 일어나듯이 연쇄적으로 자기 자리를 찾아가는 정렬
n번째 정렬 회차가 끝나면, n번째 데이터의 자리가 확정된다.

- stable한 정렬 : 중복데이터가 있다면, 데이터의 위치를 교환하지 않고 지나간다. (기존 중복 데이터의 순서가 정렬이 다 끝난 이후에도 유지되는 정렬)

장점 => in place : 자료를 정렬할 때, 추가적인 메모리 공간이 아닌 데이터가 저장된 그 공간 내에서 정렬하게 된다.

단점 => 자료가 많아질수록 성능이 떨어진다.

```js
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        result = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = result;
      }
    }
    // 정렬하지 않아도 되는 경우 반복문을 돌리지 않기 위한 방법
    if (!result) {
      break;
    }
  }
  return arr;
};
```

## Insertion Sort (삽입정렬)

한 번에 하나의 데이터의 자리가 확정된다

```js
const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 삽입정렬
  // arr[1] 과 arr[0]을 비교하고
  // arr[0]이 arr[1]보다 크면 자리를 바꾼다.
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > current) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = current;
  }
  return arr;
};
```

callback 함수를 받아서 그 함수의 리턴값을 기준으로 정렬하기

```js
// 두 번째 인자로 callback 함수 받아서 나온 값으로. func(data){ return data }
const insertionSort = function (arr, func = (data) => data) {
  //
  for (let i = 1; i < arr.length; i++) {
    // key 에 arr[1] 을 할당
    let key = arr[i];
    // j 에 0을 할당
    let j = i - 1;
    // arr[j + 1]이 arr[j] 보다 클때 반복문 실행
    while (j >= 0 && func(arr[j]) > func(key)) {
      // 위치 바꾸기
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // 위치 바꾸기
    arr[j + 1] = key;
  }
  return arr;
};
```

## Selection Sort (선택정렬)
