// * 시간복잡도 느림! O(n)
const rotatedArraySearch = (rotated, target) => {
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === target) {
      return i;
    }
  }
  return -1;
};

// 시간복잡도 O(log n)
const rotatedArraySearch = function (rotated, target) {
  //
  // 0번째 인덱스, 마지막 인덱스 구하기
  let left = 0;
  let right = rotated.length - 1;
  // 오름차순이니까 오른쪽이 크도록
  // 왼쪽값이 오른쪽값보다 작거나 같아질때까지 반복문 돌린다
  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    // 중간값 설정
    // 중간값이 타겟이면 해당값의 인덱스 리턴
    if (rotated[mid] === target) {
      return mid;
    }

    // 중간값이 왼쪽보다 크면서
    // 타겟이 중간값보다 작고 왼쪽값보다 크거나 같다면
    if (rotated[mid] > rotated[left]) {
      if (rotated[mid] > target && rotated[left] <= target) {
        // 오른쪽 범위를 왼쪽으로 한칸이동해서 범위 좁히기
        right = mid - 1;
      }
      // 타겟이 중간값보다 크거나 왼쪽값보다 작다면
      // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
      else {
        left = mid + 1;
      }
    }
    // 중간값이 왼쪽보다 작다면 === 왼쪽이 부분적 정렬되어있는 거임
    // 타겟이 오른쪽보다 작거나 같고 중간값보다는 크다면
    if (target <= rotated[right] && target > rotated[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
  //
  //
  // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
  // 타겟이 오른쪽보다 크거나 중간값보다 작다면
  // 오른쪽 범위를 왼쪽으로 한칸 이동해서 범위 좁히기
  //
  // 타겟을 찾을 수 없다면 -1
};

const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 부분 오름차순 정렬되어 있는 배열 rotated
  // 배열의 요소 중 target과 일치하는 게 있다면 해당 요소의 인덱스를 리턴
  // 없다면 -1 리턴하라

  // 시간복잡도 O(n)
  // for (let i=0; i<rotated.length; i++) {
  //   if (rotated[i] === target) {
  //     return i
  //   }
  // }
  // return -1

  // 시간복잡도 O(log n)
  // * Binary Search 의 시간복잡도는 O(log n)
  let left = 0;
  let right = rotated.length - 1;
  // 오름차순이니까 오른쪽이 크도록
  while (left <= right) {
    // 중간값 설정
    let mid = parseInt((left + right) / 2);
    // 중간값이 타겟이면 해당 인덱스 리턴 ㄱㄱ
    if (rotated[mid] === target) {
      return mid;
    }
    // 중간값이 왼쪽보다 크다면
    if (rotated[left] < rotated[mid]) {
      // 타겟이 중간값보다 작고 왼쪽값보다 크거나 같다면
      if (rotated[mid] > target && rotated[left] <= target) {
        // 오른쪽 범위를 왼쪽으로 한칸이동해서 범위 좁히기
        right = mid - 1;
      } else {
        // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
        left = mid + 1;
      }
    }
    // 중간값이 왼쪽보다 작다면 === 왼쪽이 부분적 정렬되어있는 거임
    else {
      // 타겟이 오른쪽보다 작거나 같고 중간값보다는 크다면
      if (rotated[right] >= target && rotated[mid] < target) {
        // 왼쪽 범위를 오른쪽으로 한칸 이동해서 범위 좁히기
        left = mid + 1;
      } else {
        // 오른쪽 범위를 왼쪽으로 한칸 이동해서 범위 좁히기
        right = mid - 1;
      }
    }
  }
  return -1;
};
