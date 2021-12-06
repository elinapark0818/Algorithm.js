function findShortestWord(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // 배열의 요소가 string타입인 걸 필터링한다
  let str = arr.filter((i) => typeof i === "string");
  // 빈 배열이라면 빈 문자열을 리턴하라
  if (str.length === 0) return "";

  // 빈 배열이 아닌데, b의 길이가 크거나 같으면 a가 짧은거니까 a를 리턴
  return str.reduce((a, b) => {
    if (a.length <= b.length) return a;
    // 그렇지 않은 경우는 b를 리턴
    else return b;
  });
}
