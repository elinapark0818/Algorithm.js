function muitipleZeroIndex(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 반복문
  // 계속 곱하는거니까 reduce 쓰면 될듯
  // 찢어야하니까 문자열로 바꿔서 계산해보자

  let str = num.toString().split("");

  // 언제까지 반복할지 모르겠으니 while을
  // 길이가 1이 될 때까지하면 되겠다
  while (str.length > 1) {
    // 곱하기니까 초기값을 1로
    str = str.reduce((a, b) => Number(a) * Number(b), 1);
    // 다 곱해진 결과를 또 찢어서 곱해야하니까 문자열로 변환해서 split
    str = str.toString().split("");
  }
  return Number(str[0]);
}
