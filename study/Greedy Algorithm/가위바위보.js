// default parameter round=3
function rockPaperScissors(round = 3) {
  // TODO: 여기에 코드를 작성합니다.
  const RPS = ["rock", "paper", "scissors"];

  let result = new Array(3 ** round);

  for (let i = 0; i < result.length; i++) {
    result[i] = new Array();
  }

  for (let j = round - 1; j >= 0; j--) {
    let temp = RPS.length ** j;
    for (let i = 0; i < RPS.length ** round; i++) {
      // % 3 하면 경우의 수가 0, 1, 2
      result[i].push(RPS[parseInt(i / temp) % 3]);
    }
  }
  return result;
}

// * 레퍼런스

const rockPaperScissors = function (rounds) {
  // * round가 있다면 라운드를 쓰고, 없다면 3을 써라
  rounds = rounds || 3;
  const RPS = ["rock", "paper", "scissors"];
  const result = [];

  let permutation = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      result.push(playedSoFar);
      return;
    }

    for (let i = 0; i < RPS.length; i++) {
      let currentPlay = RPS[i];
      permutation(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };
  permutation(rounds, []);

  return result;
};
