//happy5happy5
const LCS = function (_str1, _str2) {
  let [str1, str2] = [_str1, _str2].map((x) => x.split(""));

  let memo = Array(str1.length)
    .fill(0)
    .map((_) => Array(str2.length).fill(false));

  //memo[i][j]=str1 i번째와 str2 j번째에서의 답을 구한다.

  str1.forEach((x, i) =>
    str2.forEach((y, j) => (x === y ? (memo[i][j] = true) : undefined))
  ); //que를 memo에 저장한다.

  function lcs(str1, str2) {
    let temp = [].concat(...memo).indexOf(true);
    if (temp === -1) return "done";
    let i = parseInt(temp / str2.length);
    let j = temp % str2.length;
    memo[i][j] = finder(str1.slice(i), str2.slice(j));
    lcs(str1, str2);
  }

  function finder(str1, str2) {
    let count = 0;
    for (let i = 0, idx = 0; i < str1.length; i++) {
      let temp = str2.indexOf(str1[i], idx);
      if (temp > -1) {
        count++;
        idx = temp + 1;
      }
    }
    return count;
  }
  lcs(str1, str2);
  return []
    .concat(...memo)
    .filter((x) => x !== false)
    .reduce((a, b) => Math.max(a, b));
};

// Elina

const LCS = function (str1, str2) {
  // 'abcd', 'aceb'
  const M = str1.length; // 4
  const N = str2.length; // 4
  const dp = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(0));
  // dp = [
  // [0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0]
  // ]
  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        // 첫번째 배열은 [0,0,0,0,0]
        // dp[0][0], dp[1][0], dp[2][0], dp[3][0], dp[4][0] === 0 0번째 인덱스는 모두 0이다
        dp[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        // 'abcd', 'aceb'
        // 'a' 'a' ->
        // dp[1][1] => dp[0][0] + 1 ===> 1
        // dp[2][2] => dp[1][1] + 1 ===> 1
        // dp[3][3] => dp[2][2] + 1 ===> 1
        // dp[4][4] => dp[3][3] + 1 ===> 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 'b' 'c' ->
        // dp[1][2] => Math.max(dp[0][2], dp[1][1]) ===> 1
        // dp[2][2] => Math.max(dp[1][2], dp[2][1]) ===> 1
        // dp[4][2]
        // 'c' 'e' ->
        // dp[1][3] => Math.max(dp[0][3], dp[1][2]) ===> 1
        // dp[2][3] => Math.max(dp[1][3], dp[2][2]) ===> 1
        // 'd' 'b' ->
        // dp[1][4] => Math.max(dp[0][4], dp[1][3]) ===> 1
        // ...
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // dp = [
  // [0, 0, 0, 0, 0]
  // [0, 1, 1, 1, 1]
  // [0, 1, 1, 1, 2]
  // [0, 1, 2, 2, 2]
  // [0, 1, 2, 2, 2]
  // ]
  return dp[M][N]; // 2
};
