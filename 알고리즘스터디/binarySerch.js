const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 제일 왼쪽은 인덱스 0
  let left = 0;
  // 제일 오른쪽은 마지막 인덱스 length - 1
  let right = arr.length - 1;
  // 이진트리로 진행하기 위해 중간점을 생성
  let mid;

  // 오른쪽이 항상 왼쪽보다 커야함. 반복분 돌리기
  while (left <= right) {
    // 중간 지점은 l,r 더해서 나눈 값 내림처리(소수점이하 떼기)
    mid = Math.floor((left + right) / 2);
    // 중간 지점이 타겟이라면 해당 인덱스(mid)를
    if (arr[mid] === target) return mid;

    // 타겟이 작다면 오른쪽을 중간 - 1
    if (target < arr[mid]) {
      right = mid - 1;
      // 타겟이 크다면 왼쪽을 중간 + 1
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
