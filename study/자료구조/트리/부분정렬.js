const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 왼쪽, 오른쪽, 중간 을 나누어서 탐색
  let left = 0;
  let right = rotated.length - 1;

  while (left <= right) {
    // 중간 값 설정
    let mid = Math.floor((left + right) / 2);

    // 중간 값이 타겟이면 중간값 리턴
    if (rotated[mid] === target) return mid;

    // 중간값이 왼쪽보다 크면, 왼쪽 정렬 탐색 시작
    if (rotated[left] < rotated[mid]) {
      // 왼쪽 정렬하면서 타겟이 오른쪽에 있다면
      if (rotated[mid] > target && rotated[left] <= target) {
        // 왼쪽으로 이동 중간값의 범위 좁히기
        right = mid - 1;
      }
      // 왼쪽 정렬하는데 타겟이 왼쪽에 있다면
      else {
        // 오른쪽으로 이동 중간값의 범위 좁히기
        left = mid + 1;
      }
    }

    // 중간값이 왼쪽보다 작으면, 오른쪽 정렬 탐색 (왼쪽이 이미 정렬되었음. 부분정렬되어있으니)
    else {
      // 오른쪽 정렬하면서 타겟이 왼쪽에 있다면
      if (rotated[right] >= target && rotated[mid] < target) {
        // 오른쪽으로 이동해서 중간값 범위 좁히기
        left = mid + 1;
      }
      // 오른쪽 정렬하는데 타겟이 오른쪽에 있다면
      else {
        // 왼쪽으로 이동해서 중간값 범위 좁히기
        right = mid - 1;
      }
    }
  }
  // 타겟이 rotated 안에 없는 경우다. -1 리턴
  return -1;
};
