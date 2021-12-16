// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class AdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // TODO: 정점을 추가합니다.
    // 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
    // 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
    if (vertex in this.vertices) {
      this.vertices[vertex] = this.vertices[vertex];
    } else {
      this.vertices[vertex] = [];
    }
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(from, to) {
    // TODO: 간선을 추가합니다.
    // - from의 인접 리스트에 to를 추가하고
    // - to의 인접 리스트에 from를 추가합니다.
    // 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

    if (!this.contains(from) || !this.contains(to)) {
      return;
    }

    if (!this.hasEdge(from, to)) {
      // TODO
      this.vertices[from].push(to);
      this.vertices[to].push(from);
    }
  }

  hasEdge(from, to) {
    // 만약 정점(from)이 존재하지 않는다면
    if (!this.contains(from)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 to가 포함되어있는지 반환합니다
    return !!this.vertices[from].includes(to);
  }

  removeEdge(from, to) {
    // TODO: 간선을 삭제합니다.
    // 인자로 넘겨받은 두 정점이 모두 존재한다면
    // - from의 인접 리스트에 있는 to를 삭제하고
    // - to의 인접 리스트에 있는 from를 삭제합니다.

    if (!this.contains(from) || !this.contains(to)) {
      return;
    }
    // 첫 번째 정점의 인접 리스트에 두번째 정점이 있을 경우
    if (this.hasEdge(from, to)) {
      const index = this.vertices[to].indexOf(from);
      this.vertices[to].splice(index, 1);
    }
    // TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(from, to)) {
      const index = this.vertices[from].indexOf(to);
      this.vertices[from].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    // TODO: 정점을 삭제합니다.
    // 인자로 넘겨받은 정점(A)이 존재한다면
    // - 이 정점(A)을 삭제함은 물론,
    // - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
    if (this.contains(vertex)) {
      while (this.vertices[vertex].length > 0) {
        this.removeEdge(this.vertices[vertex][0], vertex);
      }
      // 최종적으로 해당 정점을 삭제합니다
      delete this.vertices[vertex];
    }
  }
}
