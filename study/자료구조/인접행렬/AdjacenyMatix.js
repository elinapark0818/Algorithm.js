const node = 5;

let matrix = new Array(node)
  .fill(false)
  .map((row) => new Array(node).fill(false));

matrix.forEach((n) => {
  const [row, col] = n;
  matrix[row][col] = 1;
});

const result = [
  ["row", "col"],
  ["row", "col"],
];

result[0][1] = 1;
result = [
  ["row", 1],
  ["row", "col"],
];

result[0][0] = 1;
result = [
  [1, 1],
  ["row", "col"],
];

result[1][0] = 1;
result = [
  [1, 1],
  [1, "col"],
];
result[1][1] = 1;
result = [
  [1, 1],
  [1, 1],
];
