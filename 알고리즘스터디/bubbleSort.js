// todo : 버블 정렬
// todo : 1. 인접한 두 원소를 검사하여 정렬한다
// todo : 2. 정렬 할 목록 전체를 반복하여 해당 인덱스 값이 인접한 값과 swap 가능하면 swap
// todo : 3. 더이상 swap 할수 없을 때까지 반복한다

// * elina

// todo: 버블정렬 이중for문
const bubbleSort = function (arr) {
  // * 두 수(j, j + 1)를 비교하기 위한 이중 반복문
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // * arr[0], arr[1] 비교해서 더 큰 수를 두번째 자리에 배치
      // * arr[1], arr[2] 비교해서 더 큰 수를 두번째 자리에 배치
      // * arr[2], arr[3] 비교해서 더 큰 수를 두번째 자리에 배치
      // * arr[3], arr[4] 비교해서 더 큰 수를 두번째 자리에 배치
      // * arr[4], arr[5] 비교해서 더 큰 수를 두번째 자리에 배치
      // * arr[5], arr[6] 비교해서 더 큰 수를 두번째 자리에 배치
      // * 정렬되었어도 다시 반복
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        // * 왼쪽(j 번째)값을 오른쪽 값(j + 1)으로 바꾸고
        arr[j] = arr[j + 1];
        // * 오른쪽(j + 1번째)값을 왼쪽 값(j)으로 바꾸기
        arr[j + 1] = swap;
        // ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    // * swap = 0 이라면 정렬이 완성된 것
    if (!swap) {
      break;
    }
  }
  return arr;
};

debugger;
bubbleSort([2, 1, 3]);

// * swap 따로 뺀 버블정렬

const swap = (idx1, idx2, arr) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let sorted = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        sorted++;
        swap(j, j + 1, arr);
      }
    }
    if (sorted === 0) {
      break;
    }
  }
  return arr;
};
