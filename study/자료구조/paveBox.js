function paveBox(boxes) {
  let count = 1;
  // ? 인원을 세 줄 카운트 설정!
  // 초기값 1 -> 기준이 되는 맨 앞사람은 무조건 나갈 수 있으니까!
  let result = []; // 한번에 나갈 수 있는 최대인원을 요소로 가진 배열

  // 배열을 훑으면서 탈출 기준인 첫 요소와 비교하자!
  boxes.reduce((acc, cur) => {
    if (acc >= cur) {
      // 초기값 >= 비교할 값 탈출 인원에 탑승!
      count++;
      // 탈출 기준은 그대로!
      return acc;
    } else {
      // 첫 번째 조건문에서 내려온 count를 result에 저장한다.
      result.push(count);
      count = 1;
      return cur;
    }
  });
  result.push(count);
  return Math.max(...result);
}
