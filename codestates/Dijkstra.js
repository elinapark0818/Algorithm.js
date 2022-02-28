// 데이크스트라의 원래 알고리즘은 두 꼭짓점 간의 가장 짧은 경로를 찾는 알고리즘이지만,
// 더 일반적인 변형은 한 꼭짓점을 "소스" 꼭짓점으로 고정하고
// 그래프의 다른 모든 꼭짓점까지의 최단경로를 찾는 알고리즘으로 최단 경로 트리를 만드는 것이다.

function createGraphByList(num, edges) {
  // 연결 리스트로 그래프 구현
  // 정확하게 연결 리스트는 아니지만,
  // 저장 공간을 줄일 수 있고, 간선 조회가 O(E)라는 점에서 비슷
  const _edges = {};
  for (let i = 1; i <= num; i++) _edges[i] = [];
  edges.forEach(([src, dst, weight]) => {
    // 무방향 그래프이므로 양쪽 방향 모두에 간선을 추가한다.
    _edges[src].push({ node: dst, weight: weight });
    _edges[dst].push({ node: src, weight: weight });
  });
  return _edges;
}

function createGraphByMatrix(num, edges) {
  // 인접 행렬로 그래프 구현
  // num X num 만큼의 저장 공간이 필요
  // 아래에서는 인덱스를 직관적으로 관리하기 위해 (num + 1) X (num + 1)의 공간을 사용
  // 간선 조회는 O(1)
  const matrix = [];
  // 간선은 100 이하의 양의 정수 이므로 경로가 없는 경우 101로 초기화한다.
  const INF = 101;
  for (let row = 0; row <= num; row++) {
    // 최단거리를 구해야하기 때문에, 간선이 없는 구간의 거리는 무한대로 간주한다.
    // 엄밀한 의미의 무한대는 불가능하므로, 런타임(node.js)이 표현할 수 있는 가장 큰 수로 초기화한다.
    // INF는 INFINITY의 약자이다.
    matrix.push(Array(num + 1).fill(INF));
    // 자기 자신과의 거리는 0
    // matrix[i][i] = 0;
    matrix[row][row] = 0;
  }
  edges.forEach(([src, dst, weight]) => {
    // 무방향 그래프이므로 양쪽 방향 모두에 간선을 추가한다.
    matrix[src][dst] = matrix[dst][src] = weight;
  });
  return matrix;
}

// 인접 행렬을 통한 구현: O(V^2)
// V는 정점의 개수
function Dijkstra(num, edges, start, end) {
  // 그래프를 생성
  const matrix = createGraphByMatrix(num, edges);
  // dist = 출발 정점으로부터 모든 정점까지의 최단거리를 저장하는 배열
  // 처음에는 주어진 간선의 정보로 초기화!
  const dist = matrix[start].slice();
  // 최단 거리 계산이 완료된 정점을 표시하는 배열
  const visited = Array(num + 1).fill(false);
  // 출발 정점까지의 거리는 0으로 이미 계산된 상태로 볼 수 있다.
  visited[start] = true;

  // 최단경로를 저장하기 위한 배열 before
  // 각 정점별로 해당 정점에 도달하기 위한 최단 경로 중 바로 직전의 정점을 저장해두자
  // 계산이 완료된 후에 역으로 추적해서 생성할 수 있다.
  // 최단 경로가 계산되기 이전의 상태를 표시하기위해 -1로 초기값 설정
  const before = Array(num + 1).fill(-1);

  // 출발 정점에서 바로 가는 경로가 존재하는 정점은
  // 출발 정점이 최단 경로 상의 직전 정점이라고 가정한다.
  edges.forEach(([src, dst]) => {
    if (src === start) before[dst] = src;
    if (dst === start) before[src] = dst;
  });

  // 아직 최단 거리 계산이 안 된 정점들 중에서
  // 출발 정점과의 거리가 가장 짧은 정점을 리턴한다.
  const getNextNearestIdx = (dist) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (i = 1; i <= num; i++) {
      if (dist[i] < min && visited[i] === false) {
        min = dist[i];
        target = i;
      }
    }
    return target;
  };

  // 출발 정점은 이미 계산된 상태(true), 출발정점(1개)를 제외시키고
  // 반복문을 통해 다음으로 출발정점과의 거리가 가장 짧은 정점이 계산되므로
  // 총 반복횟수는 num-2 가 된다
  for (let round = 0; round < num - 2; round++) {
    // 현재 시점에서 출발 정점까지의 거리가 가장 짧은 정점은(v1) 이미 계산되었다고 볼 수 있다.
    // 다른 정점(v2)은 출발 정점과의 길이가 v1보다 길다
    // 따라서 다른 정점을 통해 v1으로 가는 경로가 더 길 수밖에 없다
    const nearest = getNextNearestIdx(dist);
    // 이미 계산된 정점을 중복계산하지 않기 위해 true 처리
    visited[nearest] = true;
    visited.forEach((calculated, v) => {
      // 계산이 완료된 정점은 패스
      if (calculated === false) {
        // 현재 시점에서 출발 정점과 가장 가까운 정점을 기준으로
        // nearest를 통해서 가는 방법이 기존방법보다 더 짧으면
        // 더 짧은 거리로 갱신한다
        // 최단경로의 부분 경로 역시 최단 경로이다.
        if (dist[nearest] + matrix[nearest][v] < dist[v]) {
          dist[v] = dist[nearest] + matrix[nearest][v];
          // 최단경로가 갱신되므로 정점 v에 도달하는 최단 경로 상에서의 직전 정점은 nearest이다
          before[v] = nearest;
        }
      }
    });
  }

  // 최단 경로를 end 부터 역추적한다.
  function getPath(before, start, end) {
    let vertex = before[end];
    const path = [end, vertex];
    while (vertex !== start) {
      vertex = before[vertex];
      path.push(vertex);
    }
    return path.reverse();
  }
  path = getPath(before, start, end);

  return dist[end];
}
