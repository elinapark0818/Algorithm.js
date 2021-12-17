class AdjacentGraph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    let result = null;
    this.nodes[node] ? (result = true) : (result = false);
    return result;
  }

  removeNode(node) {
    this.nodes[node] ? delete this.nodes[node] : this.nodes[node];
  }

  hasEdge(from, to) {
    let result = null;
    this.nodes[from] &&
    this.nodes[to] &&
    this.nodes[from].includes(to) &&
    this.nodes[to].includes(from)
      ? (result = true)
      : (result = false);
    return result;
  }

  addEdge(from, to) {
    this.nodes[from].push(to);
    this.nodes[to].push(from);
  }

  removeEdge(from, to) {
    let node = this.nodes[from];
    if (this.nodes[from].includes(to) && this.nodes[to].includes(from)) {
      this.nodes[from][node.indexOf(to)] = "";
      this.nodes[to][node.indexOf(from)] = "";
    }
  }
}
