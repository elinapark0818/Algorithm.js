// absolutes 에는 절대값이 들어있다.
// sign 에는 absolutes의 원래 값들의 음양(+,-)들이 차례대로 들어있다
// true 는 양수, false 는 음수
// absolutes와 signs 의 길이가 같다
// 원래 값들의 합을 구하라

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer += absolutes[i];
    } else if (signs[i] === false) {
      answer -= absolutes[i];
    }
  }
  return answer;
}
