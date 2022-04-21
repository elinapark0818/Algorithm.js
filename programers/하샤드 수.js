// * 내가 푼 방법
function solution(x) {
  let sum = 0;
  let arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum === 0 ? true : false;
}

// * reduce 사용하기

function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((acc, cur) => +acc + +cur, 0)
  );
}
