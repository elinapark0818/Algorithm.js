function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 거듭제곱 방법 : a*a , a**, Math.pow(a,2)
  // 2의 0승은 1이니까, num이 1이라면 true가 나오게 한다
  if (num === 1) {
    return true;
  }
  // 2의 거듭제곱은 짝수이다. 홀수라면 2의 거듭제곱이 될 수 없다
  if (num % 2 !== 0) {
    return false;
  }

  // 2의 거듭제곱 여부를 확인해야 하니, 임의의 변수에 2를 할당하자
  const power = 2;
  // while문을 사용해야한다.
  // 2의 1승은 2니까, num은 2보다 커야한다.
  while (power < num) {
    // 2의 거듭제곱을 구하기 위해 2를 계속 곱해준다
    power *= 2;
  }
  // num이 2의 거듭제곱이라면, power와 같다
  return power === num;
}
