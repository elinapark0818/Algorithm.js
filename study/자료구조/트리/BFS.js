// Breadth First Search

class Tree {
  constructor() {
    this.root = null;
  }

  // BFS는 콜백함수를 인자로 받는다.
  BFS(func) {
    // 아직 트리가 없다면 아무것도 실행하지 않는다
    if (this.root === null) return;

    const yet = [this.root];
    // 탐색한 노드가 있을 경우 반복문
    while (yet.length !== 0) {
      // yet의 맨 앞의 요소를 디큐
      const current = yet.shift();
      // 현재 부모노드의 자식노드들을 모두 큐에 넣는다
      yet.push(...current.children);
      // 현재노드를 콜백함수 실행
      func(current);
    }
  }
}

const letterBFS = [];

const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("d");
t.root.children[0].add("c");

t.BFS((node) => letterBFS.push(node.data));

// [‘a’, ‘b’, ‘d’, ‘c’]

//

// todo : "A"부터 시작한다.
// todo : result = ["A"]
// todo : result = ["A", "B"]
// todo : result = ["A", "B", "C"]
// todo : result = ["A", "B", "C", "D"]
// todo : result = ["A", "B", "C", "D", "G"]
// todo : result = ["A", "B", "C", "D", "G", "H"]
// todo : result = ["A", "B", "C", "D", "G", "H", "I"]
// todo : result = ["A", "B", "C", "D", "G", "H", "I", "E"]
// todo : result = ["A", "B", "C", "D", "G", "H", "I", "E", "F"]
// todo : result = ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
