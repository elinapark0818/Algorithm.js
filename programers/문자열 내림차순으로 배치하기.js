// * 문자열 s를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하시오

// split('')배열로 바꿔서
// sort() 로 오름차순 정렬
// reverse() 로 뒤집기
// join('')다시 문자열로 만들기
function solution(s) {
  return s.split("").sort().reverse().join("");
}
