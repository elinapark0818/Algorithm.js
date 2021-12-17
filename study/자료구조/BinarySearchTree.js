class BinarySearchTree {
  constructor(value) {
    // constructor로 만든 객체는 이진 탐색 트리의 Node가 됩니다.
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // 이진 탐색 트리의 삽입하는 메서드를 만듭니다.
  insert(value) {
    // 입력값을 기준으로, 현재 노드의 값보다 크거나 작은 것에 대한 조건문이 있어야 합니다.
    // 보다 작다면, Node의 왼쪽이 비어 있는지 확인 후 값을 넣습니다.
    if (value < this.value) {
      if (this.left === null) {
        // 왼쪽 노드에 이진트리에 value를 넣고 실행한다
        this.left = new BinarySearchTree(value);
      } else {
        // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
        // TIP: 재귀함수를 사용합니다.
        // 왼쪽노드를 insert 메소드에 넣고 비교하게 만든다
        this.left.insert(value);
      }
      // 보다 크다면, Node의 오른쪽이 비어 있는지 확인 후 값을 넣습니다.
    } else if (value > this.value) {
      if (this.right === null) {
        // 오른쪽 노드에 이진트리에 value를 넣고 실행한다
        this.right = new BinarySearchTree(value);
      } else {
        // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
        // TIP: 재귀함수를 사용합니다.
        // 오른쪽 노드를 insert 메소드에 넣고 비교하게 만든다
        this.right.insert(value);
      }
      //그것도 아니라면, 입력값이 트리에 들어 있는 경우입니다.
    } else {
      // 아무것도 하지 않습니다.
      return;
    }
  }
  // 앞서 구현했던 트리에 비해 이진 탐색 트리는 입력값과 트리 노드의 값의 크기를 비교하고 있습니다. 왜 그런 것일까요?

  // 이진 탐색 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요.
    // value 와 노드 값이 같다면 포함하고 있는 것
    if (this.value === value) {
      return true;
    }
    // 입력값을 기준으로 현재 노드의 값보다 작은지 판별하는 조건문이 있어야 합니다.
    // ? 입력값이 현재 노드의 값보다 작고
    if (value < this.value) {
      // TODO: 현재 노드의 왼쪽이 비어 있지 않고,
      // 노드의 값이 입력값과 일치하면 true를 반환합니다.
      // ? 왼쪽 노드가 비어있지 않고
      if (this.left !== null) {
        // 왼쪽 노드값이 포함되어 있는지 확인한다
        // ? 왼쪽 노드에 입력값이 포함되어 있다면 true
        return this.left.contains(value); // true
      }
      // TODO:일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색합니다.
    }
    // 입력값을 기준으로 현재 노드의 값보다 큰지 판별하는 조건문이 있어야 합니다.
    if (value > this.value) {
      // TODO: 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.
      // ! 입력값을 기준으로 현재 노드의 값보다 작은지
      if (this.right !== null) {
        // 오른쪽 노드값이 포함되어 있는지 확인한다
        return this.right.contains(value);
      }
      // TODO:일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색합니다.
    }
    // ! 없다면 false를 반환합니다.
    return false;
  }

  /*
	트리의 순회에 대해 구현을 합니다.
  지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
  전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
	*/

  // 이진 탐색 트리를 전위 순회하는 메서드를 만듭니다.
  preorder(callback) {
    // 루트에서 시작해서
    callback(this.value);
    // 왼쪽 노드를 순차적으로 둘러본 뒤
    if (this.left) {
      this.left.preorder(callback);
    }
    // 오른쪽 노드를 탐색
    if (this.right) {
      this.right.preorder(callback);
    }
  }

  // 이진 탐색 트리를 중위 순회하는 메서드를 만듭니다.
  inorder(callback) {
    //TODO: 전위 순회를 바탕으로 중위 순회를 구현하세요.
    // 왼쪽 노드 순회를 하고
    if (this.left) {
      this.left.inorder(callback);
    }
    // 끝나면, 루트를 거쳐서
    callback(this.value);
    // 오른쪽 노드를 마저 탐색
    if (this.right) {
      this.right.inorder(callback);
    }
  }

  // 이진 탐색 트리를 후위 순회하는 메서드를 만듭니다.
  postorder(callback) {
    //TODO: 전위 순회를 바탕으로 후위 순회를 구현하세요.
    // 왼쪽 노드를 순회한 다음
    if (this.left) {
      this.left.postorder(callback);
    }
    // 오른쪽 노드를 순회하고
    if (this.right) {
      this.right.postorder(callback);
    }
    // 마지막에 루트를 탐색
    callback(this.value);
  }
}
