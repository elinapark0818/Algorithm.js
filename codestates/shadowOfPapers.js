const merge = function (left, right, comparator = (item) => item) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    } else if (
      rightIdx >= right.length ||
      comparator(left[leftIdx]) <= comparator(right[rightIdx])
    ) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return merged;
};

const mergeSort = function (arr, comparator) {
  const aux = (start, end) => {
    if (start >= end) return [arr[start]];
    const mid = Math.floor((start + end) / 2);
    const right = aux(start, mid);
    const left = aux(mid + 1, end);
    return merge(left, right, comparator);
  };
  return aux(0, arr.length - 1);
};

function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.
  // 2차원 배열안에서 직사각형의 넓이 구하기

  // 스위핑(sweeping) : 청소하다, 휩쓸다
  // 스위핑 알고리즘이란 단어의 뜻 그대로 휩쓸고 지나가며 문제를 해결하는 방식으로,
  // 특정 기준에 따라 정렬한 후 순서대로 처리하는 알고리즘이다.
  // 시간복잡도는 대부분 sort와 같은 nLogN

  // 문제의 크기를 추측할 수 있어야 한다
  // 입력크기에 따른 시간복잡도와 공간복잡도를 고려하기

  // [
  //   [0, 0, 4, 4], // (0,0) 시작하는 w:4, h:4 사각형
  //   [2, 1, 2, 6], // (2,1) 시작하는 w:2, h:6 사각형
  //   [1, 5, 5, 3], // (1,5) 시작하는 w:5, h:3 사각형
  //   [2, 2, 3, 3], // (2,2) 시작하는 w:3, h:3 사각형
  // ]
  // 사각형들을 겹쳐보면 (w:4 h:2 사각형), (w:5 h:2 사각형), (w:3 h:1 사각형), (w:5 h:3 사각형)
  // 사각형들의 넓이를 다 더하면 8+10+3+15 = 36 이 나온다.

  // 일단, 주어진 배열의 0번째 인덱스와 1번째 인덱스를 시작점으로 찍어야 하고
  // 시작점에서 부터 w만큼 h만큼의 너비를 적용한 끝지점 좌표를 찍자.
  // 주어진 2차원 배열에 대한 좌표가 다 찍혔을 때
  // 겹치는 구간을 어떻게 처리해야 할까...?
  // 처음 0번째 배열의 좌표를 시작으로해서 x,y의 값이 &&로 0이아닌 값이 있을때까지를 구하고
  // .
  // 주어진 사각형의 정보를 각 좌표의 시작과 끝을 나타내는 좌표로 변경하여 저장한다.
  const coordinates = [];
  papers.forEach((p) => {
    const [x, y, width, height] = p;
    // 사각형의 시작점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 시작을 알리는 flag
    coordinates.push([x, y, y + height - 1, 1]);
    // 사각형의 마지막점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 마지막을 알리는 flag
    // x좌표는 너비 계산에 누락을 방지하기 위해 범위로 저장한다.
    coordinates.push([x + width, y, y + height - 1, -1]);
  });

  // x축을 기준으로 정렬한다.
  const sorted = mergeSort(coordinates, (c) => c[0]);
  // 좌표 평면을 좌측에서 우측으로 순회하면서 매좌표까지 사각형이 차지하는 y좌표를 저장한다.
  const height = Array(10000 + 1).fill(0);
  for (let y = sorted[0][1]; y <= sorted[0][2]; y++) {
    height[y] = 1;
  }
  let sum = 0;

  for (let i = 1; i < sorted.length; i++) {
    // 겹치는 부분을 제외하고 순수하게 높이만 구한다.
    const h = height.reduce((acc, cur) => acc + (cur === 0 ? 0 : 1), 0);

    const x2 = sorted[i][0];
    const x1 = sorted[i - 1][0];
    sum += (x2 - x1) * h;

    const y1 = sorted[i][1];
    const y2 = sorted[i][2];
    // 사각형은 서로 겹칠 수 있으므로, 누적값을 저장해야 한다.
    for (let y = y1; y <= y2; y++) {
      height[y] += sorted[i][3];
    }
  }
  return sum;
}
