const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  // arr1.length = m
  // arr2.length = n
  // k = index + 1?
  let arr = arr1.concat(arr2);
  let result = arr.sort((a, b) => {
    a - b;
  });
  return result[k - 1];
};

// * 이진트리

const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  let left = 0;
  let right = 0;
  let target;

  while (k > count) {
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } else {
      target = arr2[right];
      right++;
    }
    count++;
  }
  return target;
};

// * 어드밴스드
// ? 어렵다...ㅠㅠㅠ 못품
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let left = 0;
  let right = 0;

  while (k > 0) {
    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
    let count = Math.ceil(k / 2);

    let leftStep = count;
    let rightStep = count;

    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (left === arr1.length) {
      right += k;
      break;
    }

    if (right === arr2.length) {
      left += k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우
    // leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (count > arr1.length - left) {
      leftStep = arr1.length - left;
    }
    if (count > arr2.length - right) {
      rightStep = arr2.length - right;
    }
    // 두 배열의 현재 검사 요소 위치를 비교해서
    // 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    if (arr1[left + leftStep - 1] < arr2[right + rightStep - 1]) {
      left += leftStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k -= leftStep;
    } else {
      right += rightStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k = k - rightStep;
    }
  }

  leftMax = arr1[left - 1] || -1;
  rightMax = arr2[right - 1] || -1;

  return Math.max(leftMax, rightMax);
};
