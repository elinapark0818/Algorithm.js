// 정수 배열 numbers
// 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
// 배열에서 오름차순으로 담아 리턴하라

// 이중 반복문으로 서로다른 인덱스
// !Set : 자료형에 관계 없이 중복값을 제외한 유일한 값을 저장할 수 있다
// 오름차순 sort((a,b) => a-b)
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i === j) continue;
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)].sort((a, b) => a - b);
  return answer;
}
