function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열인지 숫자인지 확인한다.
  // 숫자라면 새로운 배열에 추가한다
  // 배열이라면 배열의 요소를 확인했을 때 숫자인지 확인해서 새로운 배열에 추가한다

  // 원본 배열을 유지하기 위해 새로운 배열 만든다
  let result = [];

  // 배열의 요소를 하나씩 확인한다.
  for (let i = 0; i < arr.length; i++) {
    // number 타입일 경우 result에 담는다
    if (arr[i] === "number") {
      result.push(arr[i]);
      // 배열안 요소가 배열일 경우
    } else if (Array.isArray(arr[i])) {
      // 배열안 요소의 요소를 result에 담는다
      let arrInArr = flattenArr(arr[i]);
      result.push(...arrInArr);
    }
  }
  return result;
}

// 레퍼런스
function flattenArr(arr) {
  // base case
  if (arr.length === 0) {
    // 빈 배열일 경우 빈 배열을 리턴
    return [];
  }

  // recursive case
  const head = arr[0];
  const tail = arr.slice(1);
  if (Array.isArray(head)) {
    return flattenArr([...head, ...tail]); // 한 배열안에 다 넣어줌
  } else {
    return [head].concat(flattenArr(tail));
  }
}

function flattenArr(arr) {
  if (!arr.length) return [];

  if (Array.isArray(arr[0])) {
    return flattenArr([...arr[0], ...arr.slice(1)]);
  }
  return [arr[0]].concat(flattenArr(arr.slice(1)));
}
