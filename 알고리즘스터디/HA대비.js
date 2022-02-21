// * 최대공약수(GCD) 구하기
// ? 최대공약수는 두 수(A,B)의 공통된 약수 중 가장 큰 정수이다.
// ? 최대공약수를 구하는 가장 쉬운방법은
// ? 1부터 min(A,B)까지 모든 정수로 나누어보는 것이다.
const GCD = (A, B) => {
  let answer = 0;

  for (let i = 2; i < Math.min(A, B); i++) {
    if (A % i === 0 && B % i === 0) {
      answer = i;
    }
  }
  return answer;
};

// todo: 유클리드 호제법을 사용한 구현
let GCD = (A, B) => {
  while (B > 0) {
    let r = A % B;
    A = B;
    B = r;
  }

  return A;
};

// todo: 유클리드 호제법 + 재귀
let GCD = (A, B) => (B > 0 ? GCD(B, A % B) : A);

// * 최소공배수(LCM) 구하기
// ? 최소공배수는 두 수(A,B) 또는 그 이상의 여러 수의 공통인 배수 중 가장 작은 정수이다.
// ? 최소공배수를 구하는 가장 쉬운방법은
// ? 초기값을 1로 시작해서 점차 1씩증가시키면서
// ? 각 두 수(A,B)를 초기값으로 나누었을때 나머지가 0이되는 것이다.

const LCM = (A, B) => {
  let answer = 1;
  while (true) {
    if (answer % A === 0 && answer % B === 0) {
      break;
    }
    answer++;
  }
  return answer;
};

// todo: 유클리드 호제법 + 재귀로 최대공약수 최소공배수 구하기
const solution = (A, B) => {
  const GCD = (A, B) => (A % B === 0 ? B : GCD(B, A % B));
  const LCM = (A, B) => (A * B) / GCD(A, B);
  return [GCD(A, B), LCM(A, B)];
};

//
//
//

// * 순열(Permutations) 구하기
function Permutations(arr, n) {
  const result = [];
  // * 재귀탈출조건
  if (n === 1) {
    return arr.map((value) => [value]);
  }

  // ? arr.forEach(value[, index[, array]]))
  // ? value(처리 할 현재 요소), index(처리할 현재 요소의 인덱스), array(foreach를 호출한 배열)
  arr.forEach((value, index) => {
    // * fixed를 제외한 나머지 배열을 쪼개고
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutations = Permutations(rest, n - 1);
    // * 다시 붙인다
    const attach = permutations.map((el) => [value, ...el]);
    // * 결과값에 담기
    result.push(...attach);
  });
  return result;
}

// * 순열(Permutations) 구하기
function Permutation(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  function permutation(arr, n) {
    const answer = [];
    if (n === 1) {
      return arr.map((value) => [value]);
    }
    arr.forEach((fixed, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, n - 1);
      const attach = permutations.map((permutation) => [fixed, ...permutation]);
      answer.push(...attach);
    });
    return answer;
  }
  let result = permutation(arr, m);
  return result.map((el) => parseInt(el.join("")));
}

// * 중복순열 구하기

const getPermutations = function (arr, n) {
  const results = [];
  // * 재귀탈출조건
  if (n === 1) {
    return arr.map((value) => [value]);
  }
  arr.forEach((value, arr) => {
    // ! 순열알고리즘에서 rest 만 origin로 바뀐다
    const rest = arr;
    const permutations = getPermutations(rest, n - 1);
    const attach = permutations.map((el) => [value, ...el]);
    results.push(...attach);
  });
  return results;
};

// * 조합(Combination)

const getCombinations = function (arr, n) {
  const results = [];
  if (n === 1) return arr.map((value) => [value]);

  arr.forEach((value, index) => {
    // * fixed를 제외한 나머지 요소들을 rest
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, n - 1);
    const attach = combinations.map((el) => [value, ...el]);
    results.push(...attach);
  });
  return results;
};

//
//
//

// ! [구현]보드게임 : 한 번 방문한 곳을 다시 방문해도 점수를 얻을 수 있다
function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let result = 0;
  // 시작은 (0, 0) 에서
  let [row, col] = [0, 0];
  // U를 하면 col - 1
  // D를 하면 col + 1
  // R을 하면 row + 1
  // L을 하면 row - 1
  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === "U") col--;
    if (operation[i] === "D") col++;
    if (operation[i] === "L") row--;
    if (operation[i] === "R") row++;

    // * isValid : 0보다 작거나, 보드판을 벗어나는 경우 ---> "OUT"
    if (row < 0 || col < 0 || row >= board.length || col >= board.length) {
      return "OUT";
    }
    result += board[col][row];
  }
  return result;
}

// ! 보드게임, 방문한 곳은 다시 방문해도 점수를 획득할 수 없다
// * 점수는 0 또는 1이다.
function boardGame2(board, operation) {
  let result = 0;

  // ? 이동키 설정
  const moves = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  // ? 유효범위 설정
  let N = board.length; // * 배열의 개수
  let M = board[0].length; // * 배열의 길이

  // ? 유효성 검사 : 0보다 크거나 같거나, 최대범위보다는 작도록
  const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < M;

  // ? 출발지점 [0,0] --> 구조분해할당
  let [x, y] = [0, 0]; // * let x = 0, let y = 0

  // ? 주어진 operation 값에 따라 보드판을 돌자
  for (let i = 0; i < operation.length; ++i) {
    let [row, col] = moves[operation[i]];
    // ? 유효범위안에 있다면
    if (isValid(x + row, y + col)) {
      x += row;
      y += col;
      result += board[x][y]; // * 보드판에서 x,y 좌표에 해당하는 값을 result에 담기
      // ? 방문처리를 함으로써 한번 방문한 곳은 더이상 점수를 획득하지 않는다.
      board[x][y] = 0;
    }
  }
  return result;
}
