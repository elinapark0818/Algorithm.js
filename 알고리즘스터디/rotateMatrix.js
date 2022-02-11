const rotateMatrix = function (matrix, num = 1) {
  // 빈 배열이라면 빈 배열 리턴
  if (!matrix.length) {
    return matrix;
  }
  // num번 만큼 90도씩 회전하도록 재귀
  for (let i = 0; i < num; i++) {
    matrix = rotate(matrix);
  }
  return matrix;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// 90도 회전시키는 함수
const rotate = (matrix) => {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    // 새로운 배열을 만들어서
    let arr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // 90도 회전시켜서 새로운 배열에 넣어준다. //? matrix[i][j] ===> matrix[j][i]
      arr.push(matrix[j][i]);
    }
    // result에 담는다
    result.push(arr);
  }
  return result;
};

// ---

const rotateMatrix = function (matrix, num = 1) {
  // 빈 배열이라면 빈 배열 리턴
  if (!matrix.length) {
    return matrix;
  }
  // num번 만큼 90도씩 회전하도록 재귀
  for (let i = 0; i < num; i++) {
    matrix = rotate(matrix);
  }
  return matrix;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// 90도 회전시키는 함수
const rotate = (matrix) => {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    // 새로운 배열을 만들어서
    let arr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // 90도 회전시켜서 새로운 배열에 넣어준다. //? matrix[i][j] ===> matrix[j][i]
      arr.push(matrix[j][i]);
    }
    // result에 담는다
    result.push(arr);
  }
  return result;
};
