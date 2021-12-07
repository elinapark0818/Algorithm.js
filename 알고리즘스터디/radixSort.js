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
