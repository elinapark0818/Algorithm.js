// todo: 길이가 n이고, "수박수박수박수박" 패턴으로 문자열을 리턴하라
function solution(n) {
  const arr = new Array(n);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = "수";
    } else {
      arr[i] = "박";
    }
  }
  const answer = arr.join("");
  return answer;
}

// * 왤케 어렵게 생각한거 같지?
// todo: 메소드를 활용하려고 생각합시다 +ㅁ+
function solution(n) {
  const result = "수박".repeat(n).slice(0, n);
  return result;
}

// ? 재밌네 ㅋㅋㅋ
// ? 하지만 n이 길이 10,000 이하 자연수라서 웃고 넘어가는걸로
function solution(n) {
  const result = "수박수박수박수박수박수박수박수박수박";
  return result.substring(0, n);
}
