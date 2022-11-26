// test 는 문자열로 된 소수점 둘째자리까지 있는 넘버 n개로 구성된 배열
function solution(test) {
  let answer =
    test.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur)) / test.length;
  let temp1 = answer.toFixed(4);
  let temp2 = answer.toFixed(3);

  if (temp2 > temp1) {
    temp1 = Number(temp1) - 0.0001;
  }

  return String(temp1);
}
