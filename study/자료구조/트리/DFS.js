// Depth First Search

class Tree {
  constructor() {
    this.root = null;
  }

  // BFS는 콜백함수를 인자로 받는다.
  DFS(func) {
    // 아직 트리가 없다면 아무것도 실행하지 않는다
    if (this.root === null) return;

    const yet = [this.root];
    // 탐색한 노드가 있을 경우 반복문
    while (yet.length !== 0) {
      // yet의 맨 앞의 요소를 디큐
      const current = yet.shift();
      // 현재 부모노드의 자식노드들을 모두 큐에 넣는다
      // ! 먼저 탐색하도록 자식노드들을 앞에 넣는다
      yet.unshift(...current.children);
      // 현재노드를 콜백함수 실행
      func(current);
    }
  }
}

const letterDFS = [];

const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("d");
t.root.children[0].add("c");

t.DFS((node) => letterDFS.push(node.data));

// [‘a’, ‘b’, ‘c’, ‘d’]
