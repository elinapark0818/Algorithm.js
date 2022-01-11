function treeDFS(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // * id와 같은 값을 찾으면 해당 객체를 리턴
    if (arr[i].id === num) {
      return arr[i];
    }
    // * 자식노드 배열을 가지고 있다면
    else if (Array.isArray(arr[i].children)) {
      // * 자식노드를 먼저 탐색하기
      let nextArr = arr[i].children;
      newArr = newArr.concat(nextArr);
    }
  }
  if (newArr.length > 0) {
    return treeDFS(newArr, num);
  }
  return null;
}

// 좀 더 효율적으로
// * 초기값을 null로 설정하면 효율적이다.
function treeDFS(arr, id) {
  let initVal = null;

  // 배열의 요소를 확인했을 때
  for (let i of arr) {
    // 아이디가 같은 객체를 리턴
    if (i.id === id) {
      return i;
    }
    // 자식을 갖고 있을 때
    else if (Array.isArray(i.children)) {
      // 재귀
      let recursive = treeDFS(i.children, id);
      // 더이상 돌릴 재귀가 없다면
      if (recursive !== null) {
        return recursive;
      }
    }
  }
  return initVal;
}
