let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // 노드를 담아서
  let values = [node.value];
  // 자식노드를 돌면서 노드를 합친다
  node.children.forEach((el) => {
    values = values.concat(dfs(el));
  });
  // 합쳐진 노드를 리턴
  return values;class Tree {
    constructor() {
      // 루트 노드를 빈 값으로 설정
      this.root = null;
    }
    
    DFS(func) {
      // 루트 노드가 빈 값이면 아무것도 실행되지 않아요
      if (this.root === null) return;
      
      // 아직 방문하지 않은 노드를 yet에 할당
      const yet = [this.root];
      
      // 루트노드가 생겼다면 반복문 실행
      while (yet.length !== 0) {
        // 현재 노드는 yet의 첫 번째 요소
        const current = yet.shift();
        // unshift로 자식노드들을 먼저 탐색하도록 앞에 추가한다(UNSHIFT!!!)
        yet.unshift(...current.children);
        // 현재 노드부터 탐색
        func(current);
      }
    }
  }
  
  const letterDFS = [];
  
  // 트리를 만들고
  const t = new Tree();
  // 루트 노드(a)를 추가하고
  t.root = new Node("a");
  // 루트 노드에 부모가 될 노드(b)를 추가하고
  t.root.add("b");
  // 루트 노드에 부모가 될 노드(d)를 추가하고
  t.root.add("d");
  // 부모 노드(b)에 자식노드(c)를 추가한다
  t.root.children[0].add("c");
  
  // letterDFS에 탐색하는 순서대로 노드를 추가
  t.DFS((node) => letterDFS.push(node.data));
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  // 노드의 값에 접근하려면 node.value
  this.value = value;
  // 자식노드가 담긴 배열
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  // 자식노드는 children에 추가된다
  this.children.push(child);
  return child;
};
