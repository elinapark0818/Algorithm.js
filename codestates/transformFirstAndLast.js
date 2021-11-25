function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 빈 배열이라면 빈 객체를 리턴한다
  // 배열의 요소를 반복문으로 확인한다
  // 객체의 키를 배열의 첫번째 요소로 arr[0]
  // 객체의 키값을 배열의 마지막 요소로 arr[arr.length -1]
  // 객체로 리턴한다

  // 결과값을 담을 빈 객체가 할당되어 있는 변수를 만든다
  let result = {};
  //  빈 배열이라면 빈 객체를 리턴한다
  if (arr.length === 0) {
    return {};
  }
  // 배열의 요소를 반복문으로 확인한다
  for (let i of arr) {
    // 객체의 property를 배열의 첫 번째 요소로, 객체의 value를 배열의 마지막 요소를 할당한다
    result[arr[0]] = arr[arr.length - 1];
  }
  //  결과를 리턴한다
  return result;
}
