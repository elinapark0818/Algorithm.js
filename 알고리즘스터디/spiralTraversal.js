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
