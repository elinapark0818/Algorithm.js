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
