class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  // 자식노드 추가하기
  add(data) {
    // 자식노드에 새로운 노드를 생성하여 추가한다
    this.children.push(new Node(data));
  }
  // 자식노드 지우기
  remove(data) {
    this.children = this.children.filter((child) =>
      // 지우고자 하는 자식노드라면 false, 나머지 노드들은 true
      child.data === data ? false : true
    );
  }
}

// 트리를 만든다
class Tree {
  constructor() {
    // 처음에는 루트가 없다
    this.root = null;
  }
}

// 비어있는 트리를 만든다.
const t = new Tree();
// 루트노드에 'a'를 생성한다
t.root = new Node("a");
// 루트노드에 자식노드를 추가한다
// 왼쪽부터 생긴다
t.root.add("b");
t.root.add("c");
// 'b'의 자식으로 'd'가 추가된다
t.root.children[0].add("d");
