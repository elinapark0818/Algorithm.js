// 2차원 배열, 인접행렬을 생성하는 문제
// [
// [0, 0, 0, 0]
// [(0, 0, 0, 0)]
// ];
// 조건에 맞게 입력이 들어왔을 때 출력하기
// edges 의 요소를 전부 확인해서 가장 큰 수를 새로운 변수에 할당

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
        nodeArr.push(0);
      }
    }
  }

  maxNode = Math.max(...nodeArr);

  let matrix = [];

  // 배열을 만들어야 하는데, 최대정점노드 만큼 채운 배열을 만들어야한다.
  for (let i = 0; i < maxNode; i++) {
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

// 레퍼런스

function createMatrix(edges) {
  let maxNode = 0;

  for (let i = 0; i < edges.length; i++) {
    // slice()로 잘라서 비교
    // 가장 큰 숫자 찾기 Math.max()
    const max = Math.max(...edges[i].slice(0, 2));
    max > maxNode ? (maxNode = max) : null;
  }

  // 배열을 생성
  let matrix = [];
  // 1차원 배열로 요소 추가해주기
  for (let i = 0; i < maxNode; i++) {
    matrix.push(0);
  }

  // 요소 하나하나를 다시 배열로 바꾸기 => map()
  matrix.map((el) => new Array(maxNode + 1).fill(0));

  // [
  // [0,0,0,0],
  // [0,0,0,0],
  // [0,0,0,0]
  // ]

  // 뼈대가 완성되었다.

  edges.array.forEach((element) => {
    const [row, col, direction] = element;

    if (element[2] === "directed") {
      // 정점 간의 간선이 이어져야 한다
      matrix[element[0]][element[1]] = 1;
    } else {
      // element[2] === "undirected" 인 경우
      matrix[element[1]][element[0]] = 1;
    }
  });
  return matrix;
}
