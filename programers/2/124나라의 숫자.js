1 - 1 - 1;
2 - 2 - 2;
3 - 10 - 4;

4 - 11 - 11;
5 - 12 - 12;
6 - 20 - 14;

7 - 21 - 21;
8 - 22 - 22;
9 - 100 - 24;

10 - 101 - 41;
11 - 102 - 42;
12 - 110 - 44;

13 - 111 - 111;
14 - 112 - 112;
15 - 120 - 114;

16 - 121 - 121;

// * 자연수 n이 주어질 때,
// * 124 나라의 숫자로 변환하여 리턴하시오
function solution(n) {
  let answer = "";

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = "1" + answer;
        n = parseInt(n / 3);
        break;
      case 2:
        answer = "2" + answer;
        n = parseInt(n / 3);
        break;
      case 0:
        answer = "4" + answer;
        n = n / 3 - 1;
        break;
    }
  }
  return answer;
}

// * n을 3으로 나누었을 때,
// * 나머지가 0일때는 4
// * 나머지가 1일때는 1
// * 나머지가 2일때는 2

function solution(n) {
  // * n % 3의 나머지가 0, 1, 2 일때
  const arr = [4, 1, 2];
  let answer = "";

  while (n) {
    answer = arr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3);
  }
  return answer;
}

// ? 배열로 해결

function solution(n) {
  return n === 0
    ? ""
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}
