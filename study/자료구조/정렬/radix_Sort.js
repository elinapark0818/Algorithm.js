// * 기수 정렬(radixSort)
// * 기수정렬은 다른 정렬과 달리 배열 대상과 직접 비교하지 않는다.
// * 기수정렬은 숫자에 대해서만 정렬할 수 있다.
// * 기수정렬에서는 각 자릿수의 숫자를 나눠 담고, 이들 중 가장 큰 자릿수까지 반복한다

// ? 숫자n의 i번째(1의 자리의 경우 0부터 9까지) 자릿수의 수를 반환
function getDigit(n, i) {
  return parseInt(Math.abs(n) / Math.pow(10, i)) & 10;
}

// ?
function digitCount(n) {
  return n.toString().length;
}

function mostDigits(n) {
  let maxDigits = 0;
  for (let i = 0; i < n.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(n[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    // * 길이가 10 인 유사 배열 객체를 만들기
    let digitBucket = Array.from({ length: 10 }, () => {
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k);
        digitBucket[digit].push(arr[i]);
      }
      arr = [].concat(...digitBucket);
    });
  }
  return arr;
}

// * Advanced

function radixSort(arr) {
  let queuePlus = new Array(10).fill(0).map(() => []);
  let queueMinus = new Array(10).fill(0).map(() => []);
  let radix = 10;

  for (let num of arr) {
    if (num >= 0) {
      queuePlus[num % 10].push(num);
    } else {
      queueMinus[Math.abs(num % 10)].push(num);
    }
  }

  while (radix <= 1000000) {
    const bucketPlus = new Array(10).fill(0).map(() => []);
    const bucketMinus = new Array(10).fill(0).map(() => []);

    for (let el of queuePlus) {
      for (let num of el) {
        let str = Math.floor(num / radix).toString();
        let idx = str[str.length - 1];
        bucketPlus[idx].push(num);
      }
    }

    for (let el of queueMinus) {
      for (let num of el) {
        let str = Math.floor(Math.abs(num / radix)).toString();
        let idx = str[str.length - 1];
        bucketMinus[idx].push(num);
      }
    }

    queuePlus = bucketPlus;
    queueMinus = bucketMinus;
    radix *= 10;
  }

  return queueMinus[0].reverse().concat(queuePlus[0]);
}
