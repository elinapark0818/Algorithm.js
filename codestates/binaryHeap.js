// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

// 부모노드는 항상 자식 노드보다 값이 작아야 한다
// 같은 선상의 레벨 노드가 모두 채워져야 다음 레벨 트리가 생성될 수 있다

// heap 은 최소 또는 최대값을 O(n) 시간복잡도로 찾기위해 사용된다

// swap 으로 인덱스를 바꿔주고
// 부모인덱스를 인덱스의 1/2 값으로
function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return parseInt((idx - 1) / 2);
}

// 자식요소가 추가될때
// 힙에 추가하고
// 힙의 길이에 해당하는 인덱스를 설정
function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  // 삽입된 노드의 인덱스
  let index = heap.length - 1;

  // 부모-자식 노드의 인덱스 설정
  // 루트노드가 되기 전까지(index > 0)
  while (index > 0) {
    // 부모노드 인덱스
    let idx = getParentIdx(index);
    // swap 사용해서 자식노드 인덱스 설정
    // 부모노드 값이 마지막에 삽입된 노드값보다 크면
    // 부모노드 값을 아래로 내린다
    if (heap[index] > heap[idx]) {
      swap(index, idx, heap);
      index = idx;
    }
    // 각 노드가 자리를 찾으면 멈춘다
    else {
      break;
    }
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
