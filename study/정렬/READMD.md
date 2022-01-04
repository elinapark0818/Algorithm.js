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

## Quick Sort (퀵 정렬)

pivot(중심축)을 정하고, 중심축보다 작은 값들을 왼쪽으로, 큰 값들을 오른쪽으로 보내는 것.

pivot을 정해서 왼쪽 오늘쪽으로 나누고, 다시 왼쪽 오른쪽에 대해 재귀적으로 pivot을 정해서 왼쪽 오른쪽을 나누고 ... 반복!

1. 분할(Divide) : 입력 배열을 pivot을 기준으로 비균등하게 2개의 부분 배열로 분할한다.

2. 정복(Conquer) : 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출을 이용하여 다시 분할 정복 방법을 적용한다.

3. 결합(Combine) : 정렬된 부분 배열들을 하나의 배열에 합병한다.

4. 순환 호출이 한번 진행될 때마다 최소한 하나의 pivot은 위치가 정해지게 된다.

<img src="https://user-images.githubusercontent.com/74189121/147994229-3243639b-1bd4-4d98-b988-ebc05f79481d.png">

### 퀵 정렬의 특징

- 장점

  - 속도가 빠르다(다른 정렬 알고리즘과 비교했을 때 가장 빠르다
  - 추가 메모리 공간이 필요하지 않다

- 단점
  - 정렬된 리스트에서는 불균형 분할에 의해 오히려 수행시간이 더 길다

```js
const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }

  const quickLeft = quickSort(left);
  const quickRight = quickSort(right);

  return [...quickLeft, pivot, ...quickRight];
};
```

- 시간복잡도 고려하기

```js
const quickSort = function (arr, func = (data) => data) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (func(arr[i]) < func(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  let sortedLeft = quickSort(left, func);
  let sortedRight = quickSort(right, func);

  return [...sortedLeft, pivot, ...sortedRight];
};
```
