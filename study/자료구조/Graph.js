class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }
  //버텍스 추가
  addVertex() {
    // 현재 matrix 배열의 길이
    const currentLength = this.matrix.length;
    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }

  // 버텍스(인덱스)가 있는지 확인
  contains(vertex) {
    if (0 <= vertex && vertex < this.matrix.length) {
      return true;
    }
    return false;
  }

  // 엣지 추가
  addEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    // 간선을 추가 수 없는 경우(from, to 범위를 넘어서는 경우)
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }
    this.matrix[from][to] = 1;
  }

  // 버텍스 간 엣지 확인
  hasEdge(from, to) {
    if (this.matrix[from][to] === 1) {
      return true;
    }
    return false;
  }

  // 엣지 제거
  removeEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    // 간선을 지울 수 없는 경우(from, to 범위를 넘어서는 경우)
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      from < 0 ||
      to < 0
    ) {
      return;
    }
    // 엣지 제거
    this.matrix[from][to] = 0;
  }
}
