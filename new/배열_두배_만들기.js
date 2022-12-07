// 연습문제

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

function solution(numbers) {
  let answer = numbers.reduce((a, b) => [...a, b * 2], []);
  return answer;
}

function solution(numbers) {
  let answer = numbers.map((i) => i * 2);
  return answer;
}
