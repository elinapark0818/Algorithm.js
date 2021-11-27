// 주어진 숫자 중에 3개의 수를 더했을 때, 소수가 되는 경우의 개수
// 배열 nums 에서 서로 다른 숫자 3개를 골라라
// 3개의 숫자를 더한 값이 소수인 경우 카운트 해라
// 최종 카운트값을 리턴하라

// 소수는 1과 자신 외에 나누어 떨어지지 않는 수
// 랜덤으로 3개의 수를 뽑아야 한다

// Math.random()으로 배열요소 무작위로 3개 뽑기
function randomArray() {
  let arr = [12, 54, 35, 64, 4, 100];
  let result = [];

  while (arr.length > 3) {
    let randomArr = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    result.push(randomArr);
  }
  console.log(result);
}
randomArray();

// Math.random()으로 0~100 중 무작위 숫자 뽑기
function randomNumber() {
  const num = Math.floor(Math.random() * 101);
  console.log(num);
}
randomNumber();

// 내가 생각한 방법
// random()로 배열 내 요소 무작위로 뽑기(Fail...)
//  1 또는 undefined 밖에 안나온다...ㅠㅠ
function solution(nums) {
  // 무작위로 뽑은 배열의 요소를 담을 빈 배열을 선언해둔다
  let random = [];
  // 무작위로 뽑은 배열의 요소 3개를 더한 값이 소수일 경우 카운트
  let count = 0;
  // 무작위로 뽑은 배열의 요소 3개를 더한 값
  let randomSum = 0;

  // 무작위로 뽑은 3개의 요소를 빈 배열 random에 넣어준다
  for (let i = 0; i < nums.length - 2; i++) {
    let randomArr = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
    random.push(randomArr);
    //  random 배열의 요소를 모두 더했을 때, 소수라면 카운트 +1
    for (let i of random) {
      randomSum += random[i];
      // 조건문으로 소수일 경우를 만들어줘야 한다
      if (isPrime(randomSum)) count++;
    }
    function isPrime(randomSum) {
      if (randomSum < 2) return true;
      for (let i = 2; i < randomSum; i++) {
        if (randomSum % i === 0) return false;
      }
      return true;
    }
    return count;
  }
}

// 3개의 요소를 가지고 있는 배열이니까, 각 위치에 있는 요소를 더해주는 방식으로 하자
function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function isPrime(sum) {
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return false;
  }
  return sum > 1;
}
