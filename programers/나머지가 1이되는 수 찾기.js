// n을 x 로 나눈 나머지가 1이 되도록하는 가장 작은 수를 리턴하라
//  n % x = 1

// 내가 푼 방법
function solution(n) {
  let answer = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      return i;
    }
  }
  return answer;
}

// while 로 풀기
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) return x;
  }
}

//  삼항연산자로 풀기
function solution(n, x = 0) {
  return n % x === 1 ? x : solution(n, x + 1);
}
