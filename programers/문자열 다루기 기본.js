// * 문자열 길이가 4 || 6
// * && 문자열 요소가 숫자로만 되어있는지

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}

// 정규식으로 다 작성하기
// * \d : 숫자이면서
// * {4} | {6} 길이가 4 또는 6
function solution(s) {
  return /^\d{4}$^\d{6}$|/.test(s);
}
