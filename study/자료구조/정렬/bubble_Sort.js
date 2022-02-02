// ? 서로 인접한 두 원소를 비교해서 자리를 바꾸는 알고리즘

// * 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
// * 이미 정렬된 요소는 고려할 필요가 없으므로,
// * 'j < arr.length - 1 - i'만 비교하면 된다.

const swap = (idx1, idx2, arr) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// * SWAP 하는 함수를 따로 만들자
// * 시간 복잡도 최선으로 만들기
// * (정렬할게 없다면 멈추는 걸로) ===> if(!sorted) break;
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = 0;
    // * 가장 큰 수는 맨 뒤에 위치하게 되고
    // * 맨 뒤에 위치한 요소를 제외하고(arr.length - i - 1)
    // * 그 다음 가장 큰 수를 맨뒤에서 한 칸 앞에 위치시키기
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        sorted++;
        swap(j, j + 1, arr);
      }
    }
    // * 정렬할 게 없는 배열이라면, break
    if (!sorted) {
      break;
    }
  }
  return arr;
};
