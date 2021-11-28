// 1번 수포자가 찍는 방식 : 1,2,3,4,5
// 2번 수포자가 찍는 방식 : 2,1,2,3,2,4,2,5
// 3번 수포자가 찍는 방식 : 3,3,1,1,2,2,4,4,5,5
// 가장 많이 정답을 맞힌 사람을 배열에 담아 리턴하라
// 가장 많이 정답을 맞힌 사람이 여럿일 경우 오름차순 정렬해서 리턴하라

function solution(answers) {
  // 가장 많은 정답을 맞힌 사람을 담을 빈 배열
  const answer = [];
  // 1번 수포자
  const man1 = [1, 2, 3, 4, 5]; // 길이 5
  // 2번 수포자
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 길이 8
  // 3번 수포자
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //길이 11
  // 1,2,3 수포자가 정답을 맞힌 개수
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    // 정답과 같다면 나머지가 0이 된다.
    // 정답이라면 count + 1
    if (answers[i] === man1[i % man1.length]) count[0]++;
    if (answers[i] === man2[i % man2.length]) count[1]++;
    if (answers[i] === man3[i % man3.length]) count[2]++;
  }
  // 가장 많은 정답을 맞힌 사람 찾기
  const max = Math.max(...count);
  for (let i = 0; i < count.length; i++) {
    // 순차적으로 맨 뒤에 push하고, 여럿일 경우 다음 인덱스 위치에 push 하기 (오름차순)
    if (max === count[i]) answer.push(i + 1);
  }
  return answer;
}
