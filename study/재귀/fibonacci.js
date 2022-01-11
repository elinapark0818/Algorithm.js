function fibonacci(n) {
  let arr = [0, 1];
  // * count
  let count = 0;

  let fib = (n) => {
    //함수 한개를 선언해주고
    if (arr[n] !== undefined) {
      return arr[n]; //이미 있는 건 그대로 리턴 [0, 1]
    }
    arr[n] = fib(n - 1) + fib(n - 2);
    return arr[n];
  };

  // return fib(n);
  return () => {
    count++;
    return fib(count - 1);
  };
}
