const powerSet = function (str) {
  // 문자열이 담긴 배열(오름차순) => 알파벳 순서로 정렬
  let strArr = str.split("").sort();
  // 빈 배열
  let arr = [];
  // 반복문을 돌면서
  for (let i = 0; i < strArr.length; i++) {
    // 포함하고 있지 않은 값이라면 => 중복된 원소를 허용하지 않는다
    if (!arr.includes(strArr[i])) {
      // arr에 담기
      arr.push(strArr[i]);
    }
  }

  let result = [""];

  for (let i = 0; i < arr.length; i++) {
    let len = result.length;
    for (let x = 0; x < len; x++) {
      // 빈 문자열("")을 각각 더해주자
      result.push(result[x] + arr[i]);
    }
  }
  // 사전식으로 정렬
  return result.sort();
};
