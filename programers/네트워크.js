// * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미

// * 예를들어 컴퓨터A와 컴퓨터B가 직접적으로 연결되어 있고
// * 컴퓨터B와 컴퓨터C가 직접적으로 연결되어 있다면
// * 컴퓨터A와 컴퓨터C가 간접적으로 연결되어 정보를 교환할 수 있다
// * 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있다

// ? 컴퓨터의 개수 n과 , 연결에 대한 정보가 담긴 2차원 배열 computers
// ? 네트워크의 개수를 리턴하시오.

// ? n = 3, computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
// ? computers[0]과 computers[1]은 서로 직접적으로 연결되어 있고
// ? computers[1]과 computers[2]은 서로 직접적으로 연결되어 있다
// ? 따라서, computers[0], computers[1], computers[2] 은 같은 네트워크 상에 있다.
// ? 결과적으로 네트워크는 총 1개 이다.

// ? n = 3, computers = [ [1,1,0], [1,1,0], [0,0,1]] 이라면
// ? 네트워크는 총 2개 이다.
// ? n은 computers의 길이가 되고
// ? computers[0]과 computers[1]은 서로 직접적으로 연결되어 있고
// ? computers[2]는 연결된게 없다.
// ? 따라서, computers[0]과 computers[1] 은 같은 네트워크 상에 있다.
// ? computers[2]는 독립된 하나의 네트워크 이다.
// ? 결과적으로 네트워크는 총 2개 이다.

function solution(n, computers) {
  // * 네트워크의 개수를 담을 변수 answer
  let answer = 0;
  // * 방문한 노드를 담을 배열 visited
  const visited = [];

  // * n은 computers의 길이가 된다.
  for (let i = 0; i < n; i++) {
    // * 방문하지 않은 노드 DFS 탐색 돌리기
    if (!visited[i]) {
      DFS(i, visited, computers);
      // * 방문한 노드는 더이상 방문하지 않도록 (중복발생 방지)
      answer++;
    }
  }
  return answer;
}

const DFS = (node, visited, computers) => {
  // * 현재 노드를 방문처리
  visited[node] = true;
  for (let i = 0; i < computers.length; i++) {
    // * 연결된 노드가 있고, 방문하지 않은 노드라면
    if (computers[node][i] && !visited[i]) {
      // * DFS 탐색 돌리기
      DFS(i, visited, computers);
    }
  }
};

// * 가독성을 높히자

function solution(n, computers) {
  let answer = 0;
  // * n의 길이를 가진 0으로 채운 배열을 만들자
  let visited = Array(n).fill(0);
  // * 방문할 애들을 담은 스택공간을 만들자
  let stack = [];

  // * n만큼 반복했을 때
  for (let i = 0; i < n; i++) {
    // * visited[i] === 0 이라면 (방문한 적이 없다면)
    if (!visited[i]) {
      // * 스택에 쌓고
      stack.push(i);
      // * 방문처리(1) 해준다
      visited[i] = 1;

      // * 스택에 쌓인 애들이 없어질때까지 반복문 처리
      while (stack.length > 0) {
        // * 현재 확인할 노드를 스택에서 꺼내서
        let current = stack.shift();

        for (let node in computers[current]) {
          // * 1이면서 방문한적이 없다면
          if (computers[current][node] && !visited[node]) {
            // * 스택에 쌓고
            stack.push(node);
            // * 방문처리(1) 하기
            visited[node] = 1;
          }
        }
      }
      // * 스택에 쌓였던 애들을 전부 확인하고 반복문을 통과했다면 중복없이 네트워크 개수가 된다
      answer++;
    }
  }
  return answer;
}
