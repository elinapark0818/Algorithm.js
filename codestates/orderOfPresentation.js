function orderOfPresentation(N, K) {
  // N 은 총 조의 수, 0 ~ 12, === K의 길이
  // K 는 발표 순서
  // K의 길이로 이루어진 배열을 만들 수 있는 모든 경우의 수를 구하라?

  // 배열에서 처음부터 하나씩 고정하면서 나머지 배열에 대한 조합을 구해서 붙이는 건 재귀함수를 사용하는 것이 좋다
  // 왜냐하면, 반복될 일에 대해 한 번만 명시하고, 들어가는 인자(나를 뺀 나머지)를 바꿔주면 되기 때문

  // 재귀 종료 조건 : 하나를 선택할 때에는 모든 배열의 원소를 선택해서 리턴
  // 고정된 값의 나머지 배열에 대해 조합을 구한다. (이 때, 선택하는 개수를 하나 줄인다)
  // 조합을 만들어 온 결과에 고정된 값을 앞에 붙여서 리턴할 배열에 ...로 배열화 한 뒤 리턴

  // 모든 경우의 수에 해당하는 값을 구한다.
  const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
  };

  // 발표순서 담을 변수
  let result = 0;

  // 어떠한 조가 이미 포함되었는지 확인하기 위해 isUsed 배열을 생성
  // Array(N)이 아니라 (N+1)임에 유의하라

  // N개의 개수가 있는 배열을 만든다.
  // K의 값은 자연수이므로 배열요소 1개를 추가해준다.
  const isUsed = Array(N + 1).fill(false);

  // 인덱스가 0부터 시작하고 K의 개수만큼 반복하여
  // K의 배열을 조회하도록 작성
  for (let i = 0; i < K.length; i++) {
    // K의 배열 요소를 인덱스 값으로
    const num = K[i];
    // 이미 사용된 거라면, true로
    isUsed[num] = true;

    // 0번째 인덱스는 false니까 slice로 없앤다
    const candidates = isUsed.slice(1, num);

    // fill 로 false를 넣어주었다.
    // false 인 값을 찾는다
    const validCount = candidates.filter((el) => el === false).length;
    // i 가 0부터 시작하기 때문에 첫 번째 경우의 수를 구할 때 -1 을 붙여준다. (=== N-1)
    const formerCount = validCount * factorial(N - i - 1);
    // 모든 경우의 수를 더한다
    result += formerCount;
  }
  return result;
}
