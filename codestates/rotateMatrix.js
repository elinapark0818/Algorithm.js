// * Bare
const rotateMatrix = function (matrix) {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let array = [];

    for (let j = matrix.length - 1; j >= 0; j--) {
      array.push(matrix[j][i]);
    }
    result.push(array);
  }

  return result;
};

// * Advanced
// todo: 세로(M)와 가로(N) 로 이루어진 M *N 배열을
// todo: 시계방향으로 90도씩 num 번 회전시킨 배열을 리턴하시오.
const rotateMatrix = function (matrix, num = 1) {
  // 빈 배열이라면 빈 배열 리턴
  if (matrix.length === 0) {
    return matrix;
  }
  // num번 만큼 90도씩 회전하도록 재귀
  for (let i = 0; i < num; i++) {
    matrix = rotate(matrix);
  }
  return matrix;
};

// 90도 회전시키는 함수
const rotate = (matrix) => {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    // 새로운 배열을 만들어서
    let array = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // 회전시켜서 새로운 배열에 넣어준다.
      array.push(matrix[j][i]);
    }
    // 결과값에 담는다.
    result.push(array);
  }
  return result;
};

// ? 테스트
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// * DFS
const rotateMatrix = (matrix, num = 1) => {
  // 90 + 90 + 90 + 90 = 360 도니까 4로 나눈 나머지로!
  num = num % 4;
  // 360도 돌면 그대로니까 matrix 리턴
  if (num === 0) {
    return matrix;
  }
  // 회전시킨 배열을 담을 새로운 배열 rotated
  const rotated = [];

  // 가로(행)
  const N = matrix.length;
  // 세로(열)
  const M = matrix[0] && matrix[0].length;

  for (let i = 0; i < M; i++) {
    const temp = [];
    // ? matrix[i][j] : 세로를 기준으로 i만큼 아래에 가로를 기준으로 j만큼 옆에
    for (let j = N - 1; j >= 0; j--) {
      temp.push(matrix[j][i]);
    }
    rotated.push(temp);
  }
  return rotateMatrix(rotated, num - 1);
};

// * 레퍼런스
const rotateMatrix = function (matrix, rotateNum = 1) {
  rotateNum = rotateNum % 4;
  if (rotateNum === 0) return matrix;

  const N = matrix.length;
  // 빈 배열을 입력받을 수 있다.
  const M = matrix[0] && matrix[0].length;
  const rotated = [];
  // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }

  return rotated;
};
