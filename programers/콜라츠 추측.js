// 짝수라면 2로 나누기
// 홀수라면 3 곱하고 1 더하기
// 1이 될때까지 반복하기
// 500번을 반복해도 1이 되지 않는다면 -1 리턴

function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      if (num % 2 === 0) num /= 2;
      else num = num * 3 + 1;
    } else {
      return (answer = i);
    }
  }
  return -1;
}

// todo : 삼항연산자를 좀더 활용해보자

function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num === 1 ? answer : -1;
}
