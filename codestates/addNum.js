function addNum(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 숫자를 찢어야 한다

  // 문자열로 바꿔서 찢어준다
  const arr = num.toString().split("");
  // 첫번째 수가 음수인지 확인해야해서 배열로 만들어놓고
  const firstNum = arr.slice(2);

  // 첫번째 수가 음수라면
  if (arr[0] === "-") {
    // 일단 다 더하고나서
    const _result = firstNum.reduce((a, b) => Number(a) + Number(b), 0);
    // '-'가 인덱스 0이니까,
    // 인덱스 1의 값을 빼준다
    return _result - Number(arr[1]);
  }
  // 음수가 아니라면 다 더해준다
  const result = arr.reduce((a, b) => Number(a) + Number(b), 0);
  return result;
}
