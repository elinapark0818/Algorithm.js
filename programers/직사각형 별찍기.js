process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(a);
  console.log(b);
});

// todo: process.stdin? 이게 뭔가 하고 1차 당황
// 하지만 코드를 살펴보니 별거아니군!

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // todo: repeat 이용해서 별찍기 ㄱㄱ
  const answer = `${"*".repeat(a)}\n`;
  console.log(answer.repeat(b));
});
