// 두 정수 left와 right
// left 부터 right 까지의 수 중에서
// 약수의 개수가 짝수라면 모두 더하고
// 약수의 개수가 홀수라면 모두 빼자

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    else answer += i;
  }
  return answer;
}

// 다른 풀이
// 제곱근이 정수라면, 약수의 개수는 홀수이다.

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 다른 풀이
// 약수를 구하는 함수를 따로 만들어서 실행
function getDivisorCount(number) {
  if (number === 1) {
    return 1;
  }

  let count = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const summand = getDivisorCount(i) % 2 === 0 ? i : -i;
    result += summand;
  }
  return result;
}
