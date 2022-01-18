// * 문자열 s는 한개 이상의 단어로 구성되어 있다.
// * 각 단어는 하나 이상의 공백문자로 구분되어 있다.
// * 각 단어의 짝수번째를 대문자
// * 각 단어의 홀수번째를 소문자 로 리턴하시오

function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      let result = "";
      for (let i = 0; i < word.length; i++) {
        // * 홀수
        if (i % 2) {
          result += word[i].toLowerCase();
        }
        // * 짝수
        else {
          result += word[i].toUpperCase();
        }
      }
      return result;
    })
    .join(" ");
}

function solution(s) {
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
        .join("")
    )
    .join(" ");
}

// * 정규식
// * (\w)(\w) : 대소문자 구분없이 두 글자씩 선택

function solution(s) {
  //  todo: 전부 대문자로 만들고 (선택되지 않은 글자(마지막)도 대문자화)
  return (
    s
      .toUpperCase()
      // todo: 대소문자 구분없이 두 글자씩 선택
      .replace(/(\w)(\w)/g, function (a) {
        // todo: 첫번째 글자는 대문자 두번째 글자는 소문자로 바꾸기
        return a[0].toUpperCase() + a[1].toLowerCase();
      })
  );
}
