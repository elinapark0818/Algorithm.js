// * 메소드를 잘 활용하는 내가 되자^_^!!!
function solution(s) {
  let str = s.toLowerCase();
  let cnt1 = 0;
  let cnt2 = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      cnt1++;
    }
    if (str[i] === "y") {
      cnt2++;
    }
  }
  return cnt1 === cnt2 ? true : false;
}

// * 한 줄로 끝나다니..

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// * 정규식 정말 간단하다!
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
