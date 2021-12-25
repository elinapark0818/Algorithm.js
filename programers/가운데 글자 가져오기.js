// 내가 푼 방식은 좀...별로인 것 같다.

function solution(s) {
  //     길이를 반으로 나눈 다음
  //     길이가 짝수면, s[s.length /2 -1], s[s.length /2] answer에 푸쉬
  //     길이가 홀수면 s[Math.floor(s.length / 2)] 를 answer 에 푸쉬
  let answer = "";
  if (s.length % 2 === 0) {
    answer += s[s.length / 2 - 1];
    answer += s[s.length / 2];
  } else answer += s[Math.floor(s.length / 2)];

  return answer;
}

function solution(s) {
  // 길이를 반으로 나눈 값을 내림하면 가운데 값에 접근할 수 있다.
  const mid = Math.floor(s.length / 2);
  // 길이가 홀수라면 가운데 값 하나만, 짝수라면 가운데 두개의 문자를
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
