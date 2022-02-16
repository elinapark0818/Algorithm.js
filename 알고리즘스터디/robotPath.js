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
