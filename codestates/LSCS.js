const LSCS = function (arr) {
    //TODO: 여기에 코드를 작성합니다.
    let max = -1000000
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if(sum > max) {
        max = sum;
      }
      if(sum < 0) {
        sum = 0;
      }
    }
    return max;
  };


// naive solution: O(N^2)
const LSCS = function (arr) {
  let max = -100000;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > max) max = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};


// dynamic programming: O(N)
const LSCS = function (arr) {
    let subArrSum = 0; // 연속 배열의 합
    let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
    for (let i = 0; i < arr.length; i++) {
      subArrSum = subArrSum + arr[i];
      if (subArrSum > max) max = subArrSum;
  
      // 연속된 구간의 합이 음수인 경우,
      // 해당 부분은 버리고 다시 시작해도 된다.
      if (subArrSum < 0) {
        subArrSum = 0;
      }
    }
    return max;
  };