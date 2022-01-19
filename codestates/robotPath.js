const robotPath = function (room, src, dst) {
  const board = Array(room.length)
    .fill(0)
    .map(() => Array());
  // 처음 이동했을 때 그 자리를 방문한거니까 1처리
  const queue = [[...src, 1]];
  // 한번 방문한 경로는 1 처리
  board[src[0]][src[1]] = 1;

  // 상하좌우
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // 최대 범위 설정
  const M = room.length - 1;
  const N = room[0].length - 1;

  while (queue.length) {
    let result = queue.shift();
    let [y, x, count] = result;

    // 이동하기
    for (let i = 0; i < 4; i++) {
      let visitedY = y + direction[i][0];
      let visitedX = x + direction[i][1];
      // 범위를 벗어나거나, 장애물이거나, 방문한 적이 있으면 넘어가기
      if (visitedY < 0 || visitedX < 0 || M < visitedY || N < visitedX) {
        continue;
      }
      if (room[visitedY][visitedX] === 1) {
        continue;
      }
      if (board[visitedY][visitedX]) {
        continue;
      }
      // 방문 처리하기
      board[visitedY][visitedX] = 1;
      queue.push([visitedY, visitedX, count + 1]);

      if (visitedY === dst[0] && visitedX === dst[1]) {
        return result[2];
      }
    }
  }
};

// * 레퍼런스

const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // 현재 위치
    const [row, col] = candi;

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};
