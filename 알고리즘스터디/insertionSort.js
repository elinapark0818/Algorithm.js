// * 시간복잡도 O(n^2)
// * 두 번째 인자로 callback 함수 받아서 나온 값으로.
// * func(data){ return data }
const insertionSort = function (arr, func = (data) => data) {
  // todo: 두번째 인자(idx === 1)부터 시작할거니까 i = 1
  for (let i = 1; i < arr.length; i++) {
    // current 에 현재값 arr[1] 을 할당
    let current = arr[i];
    // todo: 왼쪽원소인 j(idx = 1 - 1 === 0) 에 인덱스 0을 할당하기
    let j = i - 1;
    // * arr[j + 1]이 arr[j] 보다 클때 반복문 실행
    // todo: arr[1]이 arr[0] 보다 크다면 SWAP 바꿔주기!
    while (j >= 0 && func(arr[j]) > func(current)) {
      // * SWAP
      arr[j + 1] = arr[j];
      // * SWAP
      j = j - 1;
    }
    // * 다음 비교 할 현재값을 current를 arr[j +1] 에 할당하기
    arr[j + 1] = current;
  }
  return arr;
};
