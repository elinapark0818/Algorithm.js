const spiralTraversal = (matrix) => {
  const M = matrix.length;
  const N = matrix[0] && matrix[0].length;

  const arr = new Array(M).fill(0).map(() => new Array(N).fill(0));

  const len = M * N;

  const travel = (start, m, n, spiral) => {
    if (spiral.length === len) {
      return spiral;
    }
    for (let i = start; i < n; i++) {
      if (!arr[start][i]) {
        spiral += matrix[start][i];
        arr[start][i] = 1;
      }
    }
    for (let i = start + 1; i < m; i++) {
      if (!arr[i][n - 1]) {
        spiral += matrix[i][n - 1];
        arr[i][n - 1] = 1;
      }
    }
    for (let i = n - 2; i >= start; i--) {
      if (!arr[m - 1][i]) {
        spiral += matrix[m - 1][i];
        arr[m - 1][i] = 1;
      }
    }
    for (let i = m - 2; i > start; i--) {
      if (!arr[i][start]) {
        spiral += matrix[i][start];
        arr[i][start] = 1;
      }
    }
    return travel(start + 1, m - 1, n - 1, spiral);
  };

  return travel(0, M, N, "");
};

// *

// 0번째 배열은 쭈욱
const first = (matrix, result) => {
  for (let el of matrix[0]) {
    result += el;
  }
  matrix.shift();
  return result;
};

// 밑으로 내려가기 끝에 있으니까 팝팝
const second = (matrix, result) => {
  for (let i = 0; i < matrix.length; i++) {
    let char = matrix[i].pop();
    result += char;
  }
  return result;
};

// 마지막 배열을 거꾸로
const third = (matrix, result) => {
  matrix[matrix.length - 1].reverse();
  for (let el of matrix[matrix.length - 1]) {
    result += el;
  }
  matrix.pop();
  return result;
};

// 제일 왼쪽 쉬프트!
const four = (matrix, result) => {
  for (let i = matrix.length - 1; i >= 0; i--) {
    let char = matrix[i].shift();
    result += char;
  }
  return result;
};

const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";

  while (true) {
    result = first(matrix, result);

    if (matrix.length === 0) {
      break;
    }
    result = second(matrix, result);
    result = third(matrix, result);

    if (matrix.length === 0) {
      break;
    }
    result = four(matrix, result);
  }

  return result;
};
