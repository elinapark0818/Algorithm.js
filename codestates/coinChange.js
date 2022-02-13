const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  // 특정 금액을 만드는 모든 경우의 수 구하기
  // coins는 오름차순 정렬이 되어 있다.

  // 특정 금액만큼의 배열을 만든다.
  // ? total = 10, coins = [1, 5]
  // ? dp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const dp = new Array(total + 1).fill(0);
  // 0원을 만드는 경우의 수는 1개 이니까, 0번째 인덱스 값을 1로
  // ? dp = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  dp[0] = 1;

  // 동전들의 종류만큼 반복문을 돌려서
  for (let i = 0; i < coins.length; i++) {
    // 동전을 coin에 할당해두고
    // ? coin = 1, coin = 5
    const coin = coins[i];
    // 제일 작은 값의 동전으로 시작해서 목표금액까지 반복문을 돌려서
    for (let j = coin; j <= total; j++) {
      // 동전의 값에 해당하는 경우의 수를 담자
      // ? dp[1] = dp[1] + dp[1 - 1]
      // ? dp = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // ? dp = [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // ? dp = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3]
      dp[j] += dp[j - coin];
    }
  }
  // 특정금액을 만들기 위한 모든 경우의 수는 total 인덱스에 위치해있다.
  return dp[total];
};
