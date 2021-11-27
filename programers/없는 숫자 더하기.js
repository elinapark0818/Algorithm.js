// 0 부터 9까지의 숫자 중 일부가 들어있는 배열이 주어진다.
// 배열에서 찾을 수 없는 숫자를 모두 찾아서 더한 수를 리턴하라.

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
number = [1, 2, 3, 4, 5, 8, 9]; // 라면
// number에 없는 숫자인, 6과 7 을 더한값을 리턴해야 한다
// 배열의 포함여부를 확인하는건 includes() 로 할 수 있는데
// 배열의 반복문 for of 로 요소를 하나씩 확인하면서
// 0부터 9까지 담겨있는 배열에서 찾을 수 없는 값을 찾아서
// number타입의 변수에 더해주면 될 것 같다

// 내가 생각한 방법
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(numbers) {
  let result = 0;
  for (let i of number) {
    if (!numbers.includes(number[i])) {
      result += number[i];
    }
  }
  return result;
}

// 반복횟수를 number의 값으로 생각하고 포함하지 않을 시 결과값에 더해주는 방식
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

// reduce() 사용
// 0 부터 9까지의 수를 모두 더하면 45이기 때문에
// 45에서 (numbers 에 포함된 숫자를 0부터 시작해서 모두 더해서) 빼준다.

function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b, 0);
}
