// * 문자열을 입력받아서 가장 긴 접두어이자 접미어를 찾아 그 길이를 리턴
// * 접두어랑 접미어는 서로 겹치는 부분이 없어야 한다
// * 즉 문자열의 동일한 인덱스에 위치한 문자가 있으면 안된다

// ? prefix(접두어) : 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열
// ? suffix(접미어) : 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열

// debugger;
const LPS = function (str) {
  // ! "abababbaba"
  let result = "";

  // * parseInt 쓰는게 편한것 같다.
  // str의 길이의 절반을 기준으로
  for (let i = 0; i <= parseInt(str.length / 2); i++) {
    //! 5
    // 접두어 (앞에 있는 문자열 요소부터 넣기)
    //? 인덱스 0~1, 0~2, 0~3 ...
    let prefix = str.slice(0, i); // ! i=5, "ababa"
    // 접미어 (끝에 있는 문자열 요소부터 넣기)
    //? str.length -1, str.length -2, str.length -3 ...
    let suffix = str.slice(str.length - i); // ! i=5,"bbaba"

    // 같다면 LPS
    if (prefix === suffix) {
      result = prefix;
    }
  }
  // 그 길이를 리턴 // ! result="aba" 길이는 3
  return result.length;
};

LPS("abababbaba");

// *  String.match() : 정규식에 대응하는 값을 배열로 반환
//*   \w* : 반복되는 "알파벳","숫자","_"
//*   *\1 : 1번째 괄호에서 대응된 부분에 대한 역참조

// * w: 대소문자영문자, _, 숫자

function LPS(str) {
  const result = str.match(/([a-z]*).*\1/g);
  return result[1].length;
}
