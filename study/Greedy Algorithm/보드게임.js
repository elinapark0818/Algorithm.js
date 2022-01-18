function boardGame(board, operation) {
  let count = 0;
  let [row, col] = [0, 0];
  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === "U") {
      col--;
    }
    if (operation[i] === "D") {
      col++;
    }
    if (operation[i] === "L") {
      row--;
    }
    if (operation[i] === "R") {
      row++;
    }

    if (row < 0 || col < 0 || row >= board.length || col >= board.length) {
      return "OUT";
    }
    count += board[col][row];
  }
  return count;
}
