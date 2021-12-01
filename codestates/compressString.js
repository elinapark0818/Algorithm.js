function compressString(str) {
  // 결과는 string 타입으로
  let result = "";
  // 문자열의 첫 문자를 비교하기 위해 설정
  let s = str[0];
  // 반복횟수를 담을 count
  let count = 1;

  // 마지막 문자가 반복되는 문자일수도 있으니, 뒤에 느낌표를 붙여주자
  str += "!";
  // 두번째 문자부터 같은지 여부를 체크
  for (let i = 1; i < str.length; i++) {
    if (s === str[i]) {
      count++;
    } else {
      // 3회 이상 반복된다면
      if (count >= 3) {
        // 반복횟수랑 해당문자를
        result += `${count}${s}`;
        // 반복횟수가 2회 이하라면
      } else {
        // 반복된 만큼 해당 문자를
        result += s.repeat(count);
      }
      // 다음 문자를 비교하기 위해 초기값 설정
      s = str[i];
      count = 1;
    }
  }
  return result;
}
