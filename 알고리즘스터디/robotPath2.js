const robotPath2 = function (room, src, startDirection, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length; //* 열
  const C = room[0].length; //* 행
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 좌표가 유효한 좌표인지 확인하는 함수
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
  const directions = [];
  // 각 위치별 최소 동작의 수를 저장. 편의상 거리(distance)로 표현
  const distance = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    distance.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = Array(R * C);
  let front = 0;
  let rear = 0;

  const isEmpty = () => front === rear;

  const enQueue = (queue, position) => {
    queue[rear] = position;
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
  };

  // 출발 지점의 좌표
  const [startRow, startCol] = src;
  directions[startRow][startCol] = startDirection;
  distance[startRow][startCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [startRow, startCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 유효한 좌표가 아니거나
      // 해당 좌표가 장애물(1)인 경우 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 목표 위치의 방향과의 차이
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 차이가 없는 경우
        // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = distance[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = distance[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = distance[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 거리를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < distance[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        distance[nRow][nCol] = candidate;
        // 방향은 전부 같다.
        directions[nRow][nCol] = nDir;
      }
    }
  }

  return distance[dRow][dCol];
};

// let room = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
// ];
// let src = [3, 0]; //* (3, 0) 에서 시작
// let sDir = 3;
// let dst = [2, 2];
// let dDir = 2;

robotPath2(
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
  ],
  [3, 0],
  3,
  [2, 2],
  2
);
