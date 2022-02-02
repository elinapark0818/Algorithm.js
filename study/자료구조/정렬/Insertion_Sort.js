// ? 삽입 정렬 특징
// ? 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 자신을 비교하여
// ? 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다.

// ? 시작복잡도가 평균적으로 O(n^2) 이다.
// ? 시간복잡도가 최선의 경우 O(n) 이다.

// * InsertionSort 는 2번째 원소부터 시작하여
// * 그 앞(왼쪽) 원소들과 비교하여 삽일할 위치를 지정한 뒤
// * 원소를 뒤로 옮기고 지정된 자리에 자료를 삽입한다

const insertionSort = (arr) => {
  let sorted = [arr[0]];

  // * 두번째 원소부터 시작(i = 1부터 시작)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted(i - 1)) {
      sorted.push(arr[i]);
    } else {
      // * 그 앞(j= 0부터 시작) 원소들과 비교하여 위치를 찾는다.
      for (let j = 0; j < i; j++) {
        // * 왼쪽 원소와 오른쪽 원소의 자리를 찾아서 삽입한다.
        if (arr[i] <= sorted[j]) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          // * 정렬된 배열에 합쳐서 넣기.
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return sorted;
};

// * 다른 코드
const insertionSort = function (arr) {
  // * 사용할 배열을 복사해 놓기
  let result = [...arr];

  // * 배열의 두번째 원소부터 비교하기 위해 i=1 부터 시작하는 반복문
  for (let i = 1; i < result.length; i++) {
    // * 현재값 저장
    let current = result[i];
    // * 정렬된 부분의 현재 인덱스
    let index = i - 1;

    // * 좌측 값이 현재 값보다 클 때 swap하기
    while (index >= 0 && result[index] > current) {
      result[index + 1] = result[index];
      index--;
    }
    // * 임시로 저장한 현재값을 정렬된 부분의 인덱스에 할당
    result[index + 1] = current;
  }
  return result;
};

// * 시간복잡도 O(n)
// * 두 번째 인자로 callback 함수 받아서 나온 값으로.
// * func(data){ return data }

// ? Advanced : insertionSort 함수의 두 번째 인자로 콜백함수를 받아서
// ? 콜백함수의 리턴값을 기준으로 정렬하기
const insertionSort = function (arr, func = (data) => data) {
  // todo: 두번째 인자(idx === 1)부터 시작할거니까 i = 1
  for (let i = 1; i < arr.length; i++) {
    // current 에 현재값 arr[1] 을 할당
    let current = arr[i];
    // todo: 왼쪽원소인 j(idx = 1 - 1 === 0) 에 인덱스 0을 할당하기
    let j = i - 1;
    // * arr[j + 1]이 arr[j] 보다 클때 반복문 실행
    // todo: 콜백함수의 리턴값을 기준으로 arr[1]이 현재값 보다 크다면 SWAP 바꿔주기!
    while (j >= 0 && func(arr[j]) > func(current)) {
      // * SWAP
      arr[j + 1] = arr[j];
      // * SWAP
      j = j - 1;
    }
    // * 다음 비교 할 현재값 current를 arr[j + 1] 에 할당하기
    arr[j + 1] = current;
  }
  return arr;
};
