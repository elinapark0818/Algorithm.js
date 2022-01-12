// * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화방식
// todo: "AB" 를 3만큼 밀면 "DE"
// todo: "XZ" 를 3만큼 밀면 "BC"
// ? 공백은 아무리 밀어도 공백 ===> 공백을 제거하라

// ! charCodeAt() : 문자열을 아스키코드로 변환
// ! String.fromCharCode() : 아스키코드를 문자열로 변환

// ? 대문자 아스키코드: 65~90, 소문자 아스키코드: 97~122
function solution(s, n) {
  const result = s
    .split("")
    .map((str) => {
      // * 공백 없애기
      if (str === " ") {
        return str;
      }
      const a = str.charCodeAt();
      // * 편의상 다 대문자로 바꾸고 90 이상은 소문자이니까
      return str.toUpperCase().charCodeAt() + n > 90
        ? // * n을 플러스해서 그만큼 이동한걸 소문자니까 26을 빼준다.(대/소알파벳은 각 26개임)
          String.fromCharCode(a + n - 26)
        : // * 대문자는 n을 플러스해서 그만큼 이동한걸 다시 문자열로
          String.fromCharCode(a + n);
    })
    // * 문자열로 변환
    .join("");
  return result;
}

// * 잘 도착하면 되는거 아니겠는가
function solution(s, n) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}

// 정규식
function solution(s, n) {
  const result = s.replace(
    /[a-z]/gi,
    (c) =>
      [
        (c = c.charCodeAt(0)),
        String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1),
      ][1]
  );

  return result;
}
