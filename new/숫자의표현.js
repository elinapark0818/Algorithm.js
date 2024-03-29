//  정수 n 이 주어질때
// 연속된 자연수의 덧셈으로 표현할 수 있는 경우의 수를 구하라
// 예를 들어 n =15 라면 결과값은 4이다.

// 15
// 7+8
// 4+5+6
// 1+2+3+4+5

// 연속된 자연수의 덧셈의 경우의 수를 구하는 문제
// n 자신은 반드시 한번 포함한다.
// 1 -> 1
// 2 -> 2
// 3 -> 1+2, 3
// 4 -> 4
// 5 -> 2+3, 5
// 6 -> 1+2+3, 6
// 7 -> 3+4, 7
// 8 -> 8
// 9 -> 2+3+4, 4+5, 9
// 10 -> 1+2+3+4, 10
// 11 -> 5+6, 11
// 12 -> 3+4+5, 12
// 13 -> 6+7, 13
// 14 -> 2+3+4+5, 14
// 15 -> 1+2+3+4+5, 4+5+6, 7+8, 15
// 규칙을 찾아야 해

// 규칙을 찾는 방법이 잘못됐다.
// 15의 약수 = [1, 3, 5, 15] - 4개
// 다 홀수이다.
// 14의 약수 = [1,2,7,14] - 2개
// todo : 약수 구하는 알고리즘
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

solution(943); // [1, 23, 41, 943]

// 943 약수 = [1, 23, 41, 943] - 4개
function solution(n) {
  let answer = 0;
  // n 의 약수 중 홀수가 몇개인지 구하는 문제였다!!!
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 === 1) {
        answer++;
      }
    }
  }
  return answer;
}
