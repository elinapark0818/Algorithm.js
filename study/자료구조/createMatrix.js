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

    if (direction === "directed") {
      // 정점 간의 간선이 이어져야 한다
      matrix[row][col] = 1;
    } else if (direction === "undirected") {
      // element[2] === "undirected" 인 경우
      matrix[col][row] = 1;
    }
  });
  return matrix;
}

//

function createMatrix(edges) {
  // 행렬의 크기를 구합니다.
  // max 변수를 0으로 할당하고, edges를 전부 순회해 제일 큰 숫자를 max에 할당합니다.
  // max보다 크지 않을 경우엔 바꾸지 않습니다.
  let max = 0;
  for (let i = 0; i < edges.length; i++) {
    // edges의 한 요소에는 숫자 이외에 방향성도 있으니, 숫자까지만 slice를 하여 비교합니다.
    const curMax = Math.max(...edges[i].slice(0, 2));
    curMax > max ? (max = curMax) : null;
  }

  // matrix의 뼈대를 잡습니다.
  // max로 구한 최대값에 1을 더하여 array를 만들고(0번째부터 있기 때문입니다) 전부 0으로 채운 뒤
  // map을 사용해 각 요소마다 배열로 바꿔줍니다. 배열의 크기를 이번에도 최대값에 1을 더한 뒤, 0으로 채웁니다.
  const result = new Array(max + 1)
    .fill(0)
    .map((row) => new Array(max + 1).fill(0));

  // !!! new Array(max + 1).fill(new Array(max + 1))처럼 하게 되면, 주소를 참조하게 됩니다. 꼭 0을 채운 뒤, Map으로 바꾸는 등
  // 주소를 참조하지 않는 방법을 사용해야 합니다 !!!

  // edges를 순회하며 무향인 곳엔 각각의 간선에 1로 바꾸어 주고,
  // 방향이 있는 간선엔 해당 간선에만 1로 바꾸어 줍니다.
  // 만약, [0, 3, "directed"]가 들어왔다면,
  // 만들어 둔 result의 0 번째 row에 3 번째 col에 1을 추가합니다.
  // [ 0, 0, 0, 1 ] => 0번째 버텍스가 갈 수 있는 간선 중, 3 번으로 가는 간선만 갈 수 있습니다.
  edges.forEach((edge) => {
    const [row, col, direction] = edge;
    if (direction === "directed") {
      result[col][row] = 1;
    } else if (direction === "undirected") {
      result[row][col] = 1;
      result[col][row] = 1;
    }
  });

  // result를 반환합니다.
  return result;
}
