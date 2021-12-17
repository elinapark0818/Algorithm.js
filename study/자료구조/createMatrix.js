function createMatrix(edges) {
  // [from, to, 방향유무]

  // 매트릭스 만들기
  // 최대 정점 찾기

  // for (let el of edges) {
  //   for (let i of el) {
  //     if (typeof i === "number") {
  //       nodeArr.push(b);
  //     }
  //   }
  // }

  // TODO: 여기에 코드를 작성합니다.
  let maxNode = 0;
  let nodeArr = [];
  for (let a of edges) {
    //배열의 크기 정하기(가장 큰 숫자 찾기)
    for (let b of a) {
      if (typeof b === "number") {
        nodeArr.push(b);
      }
    }
  }

  maxNode = Math.max(...nodeArr);

  let matrix = [];

  // 배열을 만들어야 하는데, 최대정점노드 만큼 채운 배열을 만들어야한다.
  for (let i = 0; i < maxNode + 1; i++) {
    //배열 만들기
    matrix.push(new Array(maxNode + 1).fill(0));
  }
  //좌표 찾아서 값 바꾸기
  for (let edge of edges) {
    matrix[edge[0]][edge[1]] = 1;
    if (edge[2] === "undirected") {
      matrix[edge[1]][edge[0]] = 1;
    }
  }
  return matrix;
}
// matrix[from][to] = 1
// matrix[el[0]][el[1]] = 1

// 시작 - 끝 이어져 있고
// 끝 - 시작 이어지지 X
