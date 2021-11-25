function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // split("") 으로 나누고,
  // 문자의 첫 번째 요소들을 구한다
  // 결과값에 더한다.
  let result = "";
  let string = str.split(" ");

  if (str.length === 0) {
    return "";
  }
  for (let i = 0; i < string.length; i++) {
    result += string[i][0];
  }
  return result;
}
