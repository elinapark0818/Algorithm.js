function divideChocolateStick(M, N) {
  function que(M, N) {
    const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
    let num = gcd(M, N);
    let result = [];
    for (let i = 0; i <= Math.sqrt(num); i++) if (num % i === 0) result.push(i);

    for (let i = result.length - 1; i >= 0; i--) {
      if (i === result.length - 1) {
        if (result.indexOf(num / result[i]) === -1)
          result.push(num / result[i]);
      } else result.push(num / result[i]);
    }
    return result;
  }

  function snackSplit(M, N, a = que(M, N)) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (!(M % a[i]) && !(N % a[i])) result.push([a[i], M / a[i], N / a[i]]);
    }
    return result;
  }

  return snackSplit(M, N);
}
