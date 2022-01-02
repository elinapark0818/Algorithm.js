// * 문자열로 구성된 리스트 string
// * 정수 n
// * 각 문자열의 n번째 인덱스를 기준으로 오름차순 정렬하기

// ? localeCompare()
// ? => 기존 문자열과 비교했을 때, 비교 대상 문자열이
// ? => 정렬상 이전에 오는지, 이후에 오는지 혹은 같은 순서에 있는지 알려주는 숫자를 리턴한다.

"a".localeCompare("c"); // -1
"a".localeCompare("a"); // 0
"c".localeCompare("a"); // 1

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

function solution(strings, n) {
  return strings
    .map((a) => [...a][n] + a)
    .sort()
    .map((a) => a.substring(1));
}
