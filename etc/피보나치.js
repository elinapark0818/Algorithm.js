// * 피보나치 수열을 리턴하는 클로저 함수
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
};

// 함수가 실행될 때마다
// 카운트를 증가시켜서
// 해당 카운트를 인덱스값으로 한 피보나치 수를 리턴하는 함수를 만들자

// * 함수가 실행될 때마다 다음 피보나치 수를 리턴하는 함수
function memoFib() {
  let = memo = [0, 1];
  let count = 0;

  const fibonacci = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    } else {
      return fibonacci(n - 2) + fibonacci(n - 1);
    }
  };
  return () => {
    count++;
    return fibonacci(count - 1);
  };
}

const fn = memoFib();
console.log(fn());
