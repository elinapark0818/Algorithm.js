// .splice() : 기존 요소를 제거하거나 새 요소를 추가하여 기존 배열의 내용을 변경한다
// .splice (start, deleteCount, item)

function removeExtremes(arr) {
  // 가장 긴 문자열 길이
  let max = 0;
  // 가장 짧은 문자열 길이
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    // 가장 긴 문자열 길이 구하기
    if (arr[i].length >= arr[max].length) {
      max = i;
    }
    // 가장 짧은 문자열 길이 구하기
    if (arr[i].length <= arr[min].length) {
      min = i;
    }
  }

  // 가장 긴/짧은 문자열 제거하기 (앞쪽에 있을 수도 있고, 뒤쪽에 있을 수도 있다.)
  if (max > min) {
    // 가장 긴 문자열 인덱스 1개 삭제해서 새로운 배열 만들고
    arr.splice(max, 1);
    // 가장 짧은 문자열 인덱스 1개 삭제해서 새로운 배열 만들기
    arr.splice(min, 1);
  } else {
    // 가장 짧은 문자열 인덱스 1개 삭제해서 새로운 배열 만들고
    arr.splice(min, 1);
    // 가장 긴 문자열 인덱스 1개 삭제해서 새로운 배열 만들기
    arr.splice(max, 1);
  }
  return arr;
}
