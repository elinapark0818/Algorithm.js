function getDirections(matrix, from, to) {
  let start = [from];

  let isEdge = function (matrix, from, to) {
    if (matrix[from][to] === 1) {
      return true;
    }

    for (let i = 0; i < matrix[from].length; i++) {
      // matrix[to][i] 를 비교하는 걸 !start.includes(i) 로
      if (matrix[from][i] === 1 && !start.includes(i)) {
        start.push(i);
        // 매트릭스에 해당 인덱스와 도착정점을 비교
        if (isEdge(matrix, i, to)) return true;
      }
    }

    return false;
  };

  return isEdge(matrix, from, to);
}

// path = 경로

function getDirections(matrix, from, to) {
  // 인접행렬 길찾기;

  // 길을 하나 만들고,
  let path = new Array(matrix.length).fill(false);
  // path = [false, false, false, false ]

  let location = [from]; // [0] 길이는 1;

  path[from] = true;
  // [true, false, false, false ]

  while (location.length > 0) {
    // location 길이가 0이 될때까지
    // 현재위치의 변수
    let now = location.shift(); // 2
    //base case
    if (now === to) return true; // to = 2

    for (let i = 0; i < matrix.length; i++) {
      // 두 가지 조건을 충족해야 한다.
      // path[i] === false
      // matrix[now][i] === 1
      if (matrix[now][i] === 1 && !path[i]) {
        path[i] === true;
        location.push(i);
      }
    }
  }
  return false;
}

//

function getDirections(matrix, from, to) {
  // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당합니다.
  const queue = [from];
  const enqueue = (n) => queue.push(n);
  const dequeue = (n) => queue.shift();

  // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성합니다.
  const isVisited = new Array(matrix.length).fill(false);

  // 첫 정점 방문 여부를 표시합니다.
  isVisited[from] = true;

  // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복합니다.
  while (queue.length > 0) {
    // queue에서 정점을 하나 빼서 now에 할당합니다.
    const now = dequeue();

    // 목적지인지 검사하고, 목적지라면 true를 반환합니다.
    if (now === to) return true;

    // 해당 정점의 간선들을 확인합니다.
    for (let next = 0; next < matrix[now].length; next++) {
      // 만약, 간선이 있고 방문하지 않았다면
      if (matrix[now][next] && !isVisited[next]) {
        // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
        enqueue(next);
        // 해당 정점을 방문했다는 것을 표시합니다.
        isVisited[next] = true;
      }
    }
  }

  // 길이 없다면 false를 반환합니다.
  return false;
}
