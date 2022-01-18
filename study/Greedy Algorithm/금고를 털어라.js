function moneyHeist(target, type) {
  // 목표 금액 + 1을 길이로 새로운 배열을 만듭니다.
  // 경우의 수를 저장하기 위해 최초로 0을 할당합니다.
  // 배열의 인덱스는 목표 금액이 됩니다.
  // 목표 금액이 0인 경우는 아무것도 훔치지 않는 경우가 있으므로
  // 0번째 인덱스 값을 1로 할당합니다.
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < type.length; i++) {
    // 돈의 종류로 들어온 배열을 반복 순회합니다.
    // 만약 10원으로 10원을 만드는 경우는 오직 1개이므로
    // 그 값을 인덱스로 가지는 dp 배열에 1을 증가시킵니다.
    dp[type[i]] += 1;
    for (let j = type[i] + 1; j <= target; j++) {
      // 10원과 20원으로 20원을 만드는 경우는
      // 20원만으로 20원을 만드는 경우에
      // 10원만으로 20원을 만드는 경우를 더해야합니다.
      dp[j] += dp[j - type[i]];
    }
  }
  return dp[target];
}

// *
function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  // target 의 길이를 가진 배열을 만든다. 경우의 수 저장. 초기값 0으로 채운다
  // 배열의 index가 목표금액(target)
  let arr = new Array(target + 1).fill(0);
  // 초기값 1(아무것도 안훔칠때)
  arr[0] = 1;

  // 화페 종류에 따라 반복문
  type.map((el) => {
    // 일단 1을 넣고(type 별 경우의 수 무조건 1 증가)
    arr[el] += 1;
    for (let i = el + 1; i <= target; i++) {
      // 다음 인덱스에 이전 경우의 수 + 경우의 수
      arr[i] += arr[i - el];
    }
  });
  // target 위치에 있는 값이 경우의 수를 모두 더한 값
  return arr[target]; // 4
}

//

function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  let bag = new Array(target + 1).fill(0);
  bag[0] = 1;
  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (j >= type[i]) {
        bag[j] += bag[j - type[i]];
      }
    }
  }
  return bag[target];
}
