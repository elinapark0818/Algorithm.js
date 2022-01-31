// * DFS : 깊이우선탐색

// * [1,1,1,1,1] 로 숫자 3을 만드는 방법 => 5가지
// * -1+1+1+1+1 = 3
// * +1-1+1+1+1 = 3
// * +1+1-1+1+1 = 3
// * +1+1+1-1+1 = 3
// * +1+1+1+1-1 = 3

// ? 주어진 모든 숫자(numbers)를 탐색해서 연산(+,-)을 통해
// ? 타겟숫자(target)이 나오는 횟수를 카운트

function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);
  function dfs(level, value) {
    if (level < numbers.length) {
      dfs(level + 1, value + numbers[level]);
      dfs(level + 1, value - numbers[level]);
    } else {
      if (value === target) {
        count++;
      }
    }
  }
  return count;
}

// * DFS tree 문으로 작성하기

function solution(numbers, target) {
  let answer = 0;

  let root = new Tree();
  root.insert(0);
  numbers.forEach(function (val) {
    root.insert(val);
  });

  answer = root.DFS(target);
  return answer;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      function traverse(node) {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
        if (node.left === null) {
          let leftNode = new Node(-value);
          let rightNode = new Node(value);
          node.left = leftNode;
          node.right = rightNode;
        }
      }
      traverse(current);
      return this;
    }
  }

  DFS(target) {
    let count = 0;
    let data = 0;
    let current = this.root;

    function traverse(node) {
      data += node.value;
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      if (node.left === null) {
        if (data === target) {
          count++;
        }
      }
      data -= node.value;
    }
    traverse(current);
    return count;
  }
}
