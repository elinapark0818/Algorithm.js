// * elina

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // 탐색할 현재 노드 할당
  let current = node;

  // 두 개의 큐 저장공간을 만들어야 한다
  // 탐색하기 전 큐
  let queue = [];
  // 탐색을 마친 큐
  let result = [];

  // 현재 노드를 큐에 넣고
  queue.push(current);

  // 탐색할 큐에 노드가 있을때만 반복문 실행
  while (queue.length !== 0) {
    // 첫번째 노드를 확인하고
    current = queue.shift();
    // 탐색을 마친 현재 노드(첫번째)를 탐색완료 큐에 넣기
    result.push(current.value);
    // 현재 노드의 자식노드가 있다면
    for (let i = 0; i < current.children.length; i++) {
      // 형제 노드 뒤에 자식노드를 탐색할 큐에 넣기
      queue.push(current.children[i]);
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
