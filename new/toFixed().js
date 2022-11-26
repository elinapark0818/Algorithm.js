// test 는 문자열로 된 소수점 둘째자리까지 있는 넘버 n개로 구성된 배열
function solution(test) {
  let answer =
    test.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur)) / test.length;

  //   let temp1 = answer.toFixed(4);
  //   let temp2 = answer.toFixed(3);

  //   if (temp2 > temp1) {
  //     temp1 = Number(temp1) - 0.0001;
  //   }

  //   return String(temp1);

  // substr 로 자르면 된다.
  // 최고점수는 100점이니까, **.****
  // 0번째 인덱스부터 7까지 하면 소수점 넷째자리까지만 하고 자를 수 있다.

  // 예를 들어, let answer = "57.0238423" 일때,
  // answer.substr(0,7) => "57.0238"
  // 오케이!
  return answer.substr(0, 7);
}
