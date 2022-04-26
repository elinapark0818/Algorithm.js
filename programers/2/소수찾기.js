function solution(numbers) {
  let answer = 0;
  let primeNumbers = [];
  const arr = numbers.split("");

  // 소수 판별해서 소수배열에 집어넣기
  const isPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
      if (count >= 3) {
        break;
      }
    }
    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num);
    }
  };

  // 종이조각으로 숫자 만들기
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }

    if (str.length > 0) {
      isPrime(+str);
    }
  };

  mergeNumbers(arr, "");

  //     소수의 총 개수
  answer = primeNumbers.length;
  return answer;
}
