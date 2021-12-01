function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  // 공백을 그대로 두어라
  // str = result를 secret만큼 오른쪽으로 이동시키는 것

  // 암호화된 키를 입력받는다.
  // 원래의 문자열을 리턴하라

  // 왼쪽으로 secret만큼 이동시키면 되겠군.
  // 문자열을 이동시키려면 어떻게 해야 할까?

  // 알파벳을 담은 배열을 하나 만들자
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // 인덱스를 담을 변수 idx
  let idx = 0;
  // 결과를 담을 string 타입 result
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // 공백을 그대로 두기 위해 공백도 더해준다
    if (str[i] === " ") {
      result += " ";
    }
    // 공백을 제외한 나머지 문자들을 확인해서
    else {
      idx = alphabet.indexOf(str[i]);
      // 원래 위치로 바꾸기 위해 secret만큼 인덱스를 뺀 값이 양수라면
      if (idx - secret >= 0) {
        // 음수값이 아닌 경우 해당 알파벳을 결과값에 더해준다
        result += alphabet[idx - secret];
        // secret 이 idx보다 크다면
      } else {
        // 전체 알파벳이 26이니까
        result += alphabet[26 + (idx - secret)];
      }
    }
  }
  return result;
}

// 레퍼런스
function decryptCaesarCipher(str, secret) {
  // 알파벳
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // 공백은 그대로 둔다.
      result = result + " ";
    } else {
      // 현재 문자의 알파벳 순서를 구한다.
      let asis = alpha.indexOf(str[i]);
      // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
      let tobe = (asis - secret + alpha.length) % alpha.length;
      result = result + alpha[tobe];
    }
  }

  return result;
}
