// * 레퍼런스

// solution with segment tree: O(logN) (search only)
// object implementaion
const rangeMinimum = function (arr, ranges) {
  // ts: tree start. te: tree end
  // arr의 ts부터 te까지를 tree로 만든다.
  const createMinTree = (arr, ts, te) => {
    // base case
    if (ts === te) {
      return { value: arr[ts] };
    }

    // recursive case
    // 현재 범위를 절반을 기준으로 왼쪽과 오른쪽으로 나눈다
    const mid = parseInt((ts + te) / 2);
    const left = createMinTree(arr, ts, mid);
    const right = createMinTree(arr, mid + 1, te);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };
  const tree = createMinTree(arr, 0, arr.length - 1);

  // rs: range start, re: reange end
  const findMin = (ts, te, rs, re, tree) => {
    // 현재 tree와 구간이 정확히 일치하거나
    // 구간이 tree를 포함할 경우
    if (rs <= ts && te <= re) {
      return tree.value;
    }

    // 현재 tree에 주어진 구간이 겹치지 않는 경우
    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    // 겹치는 부분이 존재하는 경우
    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, tree.left), //
      findMin(mid + 1, te, rs, re, tree.right)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};

// solution with segment tree: O(logN) (search only)

const rangeMinimum = function (arr, ranges) {
  const createMinTree = (arr, ts, te, tree, idx) => {
    if (ts === te) {
      tree[idx] = arr[ts];
      return arr[ts];
    }

    const mid = Math.floor((ts + te) / 2);
    tree[idx] = Math.min(
      createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
      createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
    );

    return tree[idx];
  };

  // 트리 전체의 높이(루트 노트에서 가장 깊은 리프 노드까지의 거리)를 구하고
  // 전체 배열의 크기를 구한다.
  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  createMinTree(arr, 0, arr.length - 1, tree, 0);

  const findMin = (ts, te, rs, re, idx) => {
    if (rs <= ts && te <= re) {
      return tree[idx];
    }

    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, 2 * idx + 1), //
      findMin(mid + 1, te, rs, re, 2 * idx + 2)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, 0);
  });
  return mins;
};

// *

const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  // Number.MAX_SAFE_INTEGER = Number 객체의 정적 상수
  // console.log(Number.MAX_SAFE_INTEGER) = 9007199254740991

  // 돌려보자 rangeMinimum([1,3,2,7,9,11], [[1,4],[0,3]])

  // ranges 의 각 배열들에 대해 최소값 구하기
  return ranges.map((range) => {
    // 구조분해 할당으로 start보다 크고 end 보다 작거나 같은 값 세팅
    const [start, end] = range;
    // 자바스크립트에서 최대 한도 이상을 넘어 값이 손실되는 것을 방지
    // infinity 가 되는 것을 막기 위해서 한도 값 설정
    let min = Number.MAX_SAFE_INTEGER; // 9007199254740991
    // range 조건에 부합하는 반복문 작성
    for (let i = start; i <= end; i++) {
      // 안전하게 최소값 찾아서 min에 재할당
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    // arr = [1,3,2,7,9,11]
    // 각 range 에 대한 최소값 리턴
    // [1,4] => 2
    // [0,3] => 1
    return min; // [2, 1]
  });
};
