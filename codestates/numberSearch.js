function numberSearch(str) {
  if (!str) return 0;

  let total = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "1" && str[i] <= "9") {
      total += parseInt(str[i]);
    }
    // 문자열안에는 알파벳이 크기 비교가 가능하다니...
    else if (
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "A" && str[i] <= "Z")
    ) {
      count++;
    }
  }
  return Math.round(total / count);
}

// 레퍼런스
function numberSearch(str) {
  const digits = "0123456789";

  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}
