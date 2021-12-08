function strToObj(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 일단, 배열 안에 있는 애들을 객체로 변환해서 새로운 배열에 할당해주자
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 속성: 속성값을 갖는 객체로 변환해서 새로운 배열에 넣어준다
    newArr.push(Object.fromEntries(arr[i]));
  }

  // age 오름차순 정렬먼저 시키자
  newArr.sort(function (a, b) {
    return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
  });

  // 이름만 문자열로 배열에 할당해준다
  let result = newArr.map((key) => {
    // firstName , lastName 이 할당된게 있으면 문자열로 바꿔서 리턴
    if (key.firstName !== undefined && key.lastName !== undefined) {
      return `${key.firstName} ${key.lastName}`;
      // firstName은 있고, lastName은 없다면 fistName 만 문자열로 리턴
    } else if (key.firstName !== undefined && key.lastName === undefined) {
      return `${key.firstName}`;
      // 반대의 경우는 lastName만 리턴
    } else if (key.firstName === undefined && key.lastName !== undefined) {
      return `${key.lastName}`;
    } else {
    }
  });

  return result;
}
