const nextEmptySpot = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
};

function checkRow(board, row, value) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  return true;
}

function checkColumn(board, column, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }
  return true;
}

function checkSquare(board, row, column, value) {
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }
  return true;
}

function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }
  return false;
}
const sudoku = function solve(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    return board;
  }
  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }
  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;
  return board;
};

//

const sudoku = function (board) {
  const N = board.length; // 9개
  // 임의로 초기 상태를 만든다
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  // 박스 배열의 각 요소
  const getBoxNum = (row, col) => boxes[row][col];
  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
  // 수도쿠는 1부터 시작이지만 배열의 인덱스는 0이 존재하기 때문에 더미 데이터로 false를 0번째 인덱스에 넣어준다.
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false)); // [false, false, false, false, false, false, false, false, false, false]
    colUsed.push(Array(N + 1).fill(false)); // [false, false, false, false, false, false, false, false, false, false]
    boxUsed.push(Array(N + 1).fill(false)); // [false, false, false, false, false, false, false, false, false, false]
  }
  // 만약 매개변수의 요소 값이 0이라면 빈 배열에 배열 요소([row, col])를 넣어준다.
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      }
      // 0이 아니라면 false에서 true로 바꿔준다.
      else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }
  // true인지 아닌지를 찾는다. 즉 행, 열, 박스에 같은 숫자(num)가 있는지 체크하는 함수
  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col);
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };
  // aux함수를 실행시켰을 때 isValid에 대입했던 값이 맞으면 true, 틀리면 false로 변경해주는 함수
  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col);
    board[row][col] = num;
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };
  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true;
    }
    const [row, col] = blanks[idx];
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        // 해답이 있으면 보드의 상태를 유지해야 하므로 false값을 true로 바꿔줍니다.
        toggleNum(row, col, num);
        // idx번째에 숫자를 하나 넣었으므로 처음 빈칸의 인덱스는 idx+1이 되었습니다.
        // 이 상태에서 보드의 해답이 존재하면 aux(idx + 1)은 보드를 완성하면서 true를 리턴하고
        // 해답이 없으면 보드를 현재 상태로 유지하면서 false를 리턴합니다.
        if (aux(idx + 1, blanks, board) === true) {
          return true;
        }
        // aux(idx + 1)이 false를 리턴했을 때 실행됩니다.
        // 해답이 없으면 보드의 상태를 유지해야 하므로 true값을 false로 바꿔줍니다.
        toggleNum(row, col, num);
      }
    }
    return false;
  };
  aux(0, blanks, board);
  return board;
};
