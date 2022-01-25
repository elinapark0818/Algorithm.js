class minHeap {
  constructor() {
    this.heap = [];
  }

  // 부모노드 인덱스
  getParentIdx = (childIdx) => parseInt((childIdx - 1) / 2);
  // 왼쪽 자식노드 인덱스
  getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  // 오른쪽 자식노드 인덱스
  getRightChildIdx = (parentIdx) => parentIdx * 2 + 1;

  // * 항상 최상위 노드가 peek 가 된다
  peek = () => this.heap[0];

  // 노드 추가
  // * 우선순위 비교를 위해 key, value를 받아와서
  insert = (key, value) => {
    // * key, value로 이루어진 객체로 노드를 만들고
    const node = { key, value };
    // * heap 에 push 한다
    this.heap.push(node);
    // * 배열 가장 끝에 넣고, 최근에 삽입된 노드가 자리를 찾을 수 있도록
    // * 아래로부터 위로 끌어올리기(heapifyUp)
    this.heapifyUp();
  };

  heapifyUp = () => {
    let idx = this.heap.length - 1;
    // * 최근에 삽입된 노드
    const lastNode = this.heap[idx];

    // * 루트노드 되기전까지 반복문
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);

      // * 부모노드값이 최근에 삽입된 노드값보다 크면(= 우선순위가 낮다면)
      // * 부모노드의 자리를 다음 레벨로 내린다 (swap)
      if (this.heap[parentIdx].key > lastNode.key) {
        this.heap[idx] = this.heap[parentIdx];
        idx = parentIdx;
      }
      // * 부모노드값이 최근에 삽입된 노드값보다 작거나 같다면(=우선순위가 높다면)
      // * 자기 자리를 찾은거다. while문 빠져나가기
      else {
        break;
      }
    }
    // * 최종 idx가 최근에 삽입된 노드의 위치가 된다
    this.heap[idx] = lastNode;

    remove = () => {
      const count = this.heap.length;
      // * 최상위 노드
      const rootNode = this.heap[0];

      if (count <= 0) {
        return undefined;
      } else if (count === 1) {
        this.heap = [];
      } else {
        // * 끝에 있는 노드를 부모노드로 만들고
        this.heap[0] = this.heap.pop();
        // * 위에서부터 아래로 끌어내리기
        this.heapifyDown();

        // * 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
        heapifyDown = () => {
          let idx = 0;
          const count = this.heap.length;
          const rootNode = this.heap[idx];

          // * leftChild 가 있을 때까지 반복문
          while (this.getLeftChildIdx < count) {
            const leftChild = this.getLeftChildIdx(idx);
            const rightChild = this.getRightChildIdx(idx);

            // * left, right 중 더 작은 노드를 찾기

            const smallChildIdx =
              // * rightChild가 있다면 left,right 값 비교하고,
              rightChild < count &&
              this.heap[rightChild].key < this.heap[leftChild].key
                ? rightChild
                : // * rightChild가 없다면, leftChild의 인덱스가 된다
                  leftChild;

            // * 자식노드값이 루트노드보다 작다면 위로 끌어올리기
            if (this.heap[smallChildIdx].key <= rootNode.key) {
              this.heap[idx] = this.heap[smallChildIdx];
              idx = smallChildIdx;
            } else {
              break;
            }
          }
          this.heap[idx] = rootNode;
        };
      }
      return rootNode;
    };
  };
}
