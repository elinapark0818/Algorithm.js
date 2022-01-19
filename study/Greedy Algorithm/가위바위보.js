function rockPaperScissors(round) {
  // TODO: 여기에 코드를 작성합니다.
  if (!round) {
    round = 3;
  }
  const RPS = ["rock", "paper", "scissors"];

  let result = new Array(3 ** round);

  for (let i = 0; i < result.length; i++) {
    result[i] = new Array();
  }
  for (let j = round - 1; j >= 0; j--) {
    let temp = RPS.length ** j;
    for (let i = 0; i < RPS.length ** round; i++) {
      result[i].push(RPS[parseInt(i / temp) % 3]);
    }
  }
  return result;
}

// * 레퍼런스

const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  const rps = ["rock", "paper", "scissors"];
  const outcomes = [];

  let permutate = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let currentPlay = rps[i];
      permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };
  permutate(rounds, []);

  return outcomes;
};
