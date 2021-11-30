function readVertically(arr) {
  // string 타입으로 결과를 담을 변수 result
  let result = "";
  // arr[i] 중 긴 문자열의 길이를 담을 변수 max
  let max = 0;

  // 배열의 요소를 반복문으로 확인했을 때
  for (i = 0; i < arr.length; i++) {
    // 배열의 요소의 길이가 가장 긴 것을 찾아서
    if (arr[i].length > max) {
      // 가장 긴 길이 값을 변수 max 값으로 할당한다
      max = arr[i].length;
    }
  }
  // 가장 긴 문자열의 길이만큼 반복한다
  for (let j = 0; j < max; j++) {
    // 2개의 문자열을 확인하기 위한 반복문 (2차원 문자열이라고 하면 말이 좀 이상한데..)
    for (let k = 0; k < arr.length; k++) {
      // 비어있는 행,열 넘어가기
      if (arr[k][j] === undefined) {
        continue;
      }
      // 이런느낌!
      // arr[0][0] + arr[1][0] arr[0][1] + arr[1][1] arr[0][2] + arr[1][2] ...
      // arr[k][j] + arr[k][j] arr[k][j] + arr[k][j] arr[k][j] + arr[k][j] ...
      result += arr[k][j];
    }
  }
  return result;
}
