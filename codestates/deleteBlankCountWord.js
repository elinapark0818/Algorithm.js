function deleteBlankCountWord(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = {};
  // 소문자로 변환
  let lowerStr = str.toLowerCase();
  // 단어로 찢어주기
  let word = lowerStr.split(" ");
  // 공백제거
  let filter = word.filter(function (a) {
    return a.length !== 0;
  });

  // 단어들을 확인해서
  for (let i = 0; i < filter.length; i++) {
    // 속성값이 할당된게 없다면
    if (result[filter[i]] === undefined) {
      // 속성으로 한 뒤 속성값을 1로 할당해주고
      result[filter[i]] = 1;
      // 이미 속성으로 있다면
    } else if (result[filter[i]] !== undefined) {
      // 속성값을 1씩 더해준다
      result[filter[i]] = result[filter[i]] + 1;
    }
  }
  return result;
}
