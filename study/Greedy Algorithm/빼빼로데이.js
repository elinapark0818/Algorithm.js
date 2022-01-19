function divideChocolateStick(M, N) {
  // * CoPrime 서로소 : 최대 공약수가 1인 두 수
  const coPrime = (M, N) => {
    // * 유클리드 호제법으로 최대공약수 구하기 공식
    const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
    // * 최대공약수
    let num = gcd(M, N);
    // * 결과를 담을 빈 배열
    let result = [];

    // * 소수가 아니면 result에 담기
    for (let i = 0; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        result.push(i);
      }
    }

    for (let i = result.length - 1; i >= 0; i--) {
      if (i === result.length - 1) {
        if (result.indexOf(num / result[i]) === -1) {
          result.push(num / result[i]);
        }
      } else {
        result.push(num / result[i]);
      }
    }
    return result;
  };

  function getGCD(M, N, cp = coPrime(M, N)) {
    let result = [];
    for (let i = 0; i < cp.length; i++) {
      // * 최대 공약수의 약수 구하기
      if (!(M % cp[i]) && !(N % cp[i])) {
        result.push([cp[i], M / cp[i], N / cp[i]]);
      }
    }
    return result;
  }
  return getGCD(M, N);
}

//
function divideChocolateStick(M, N) {
  // [직원수, 아몬드, 누드] 길이 3을 가진배열을 리턴해야 한다. (오름차순)

  // 최대 공약수를 구하는 유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  // M,N 의 최대공약수 구해서 GCD에 담기
  const GCD = gcd(M, N);
  // 결과를 담을 배열
  let result = [];

  // 최대 공약수의 약수의 합 구하기

  for (let i = 1; i <= parseInt(Math.sqrt(GCD)); i++) {
    if (GCD % i === 0) {
      result.push([i, M / i, N / i]);

      // 최대 공약수의 제곱근 값이 i보다 큰 경우
      // GCD를 i로 나눈 값이 최대 공약수의 약수
      if (i * i < GCD) {
        let j = GCD / i;
        result.push([j, M / j, N / j]);
      }
    }
  }
  // * 오름차순 정렬
  result.sort((a, b) => a[0] - b[0]);
  return result;
}
