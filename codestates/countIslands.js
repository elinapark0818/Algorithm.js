const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.

  // 2차원 배열 grid
  if (!grid.length) return 0;

  // 섬은 물로 둘러싸여있어야 한다.
  // 배열 밖은 다 0 이다.(물이다)
  let count = 0;

  const area = grid.map((row) => {
    return row.split("");
  });

  // 방문표시만 하는 함수 mark
  let mark = (x, y) => {
    area[x][y] = "*";
    // 위부분이 땅인지 확인
    if (y > 0) {
      if (area[x][y - 1] === "1") {
        mark(x, y - 1);
      }
    }

    // 아래 부분이 땅인지 확인
    if (y < area.length - 1) {
      if (area[x][y + 1] === "1") {
        mark(x, y + 1);
      }
    }

    // 왼쪽 부분이 땅인지 확인
    if (x > 0) {
      if (area[x - 1][y] === "1") {
        mark(x - 1, y);
      }
    }

    // 오른쪽 부분이 땅인지 확인
    if (x < area.length - 1) {
      if (area[x + 1][y] === "1") {
        mark(x + 1, y);
      }
    }
  };
  // y축 추적하기
  for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area.length; x++) {
      // 인접한 땅을 *로 했다.
      if (area[x][y] === "1") {
        // 섬의 개수 카운트
        count++;
        // 카운트 했으니 * 로 바꾸기
        mark(x, y);
      }
    }
  }
  return count;
};

//  * 오늘도 레퍼런스를 보는... 슬프다

const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.
  const M = grid.length;
  const R = M && grid[0].length;
  let count = 0;

  for (let x = 0; x < M; x++) {
    for (let y = 0; y < R; y++) {
      if (grid[x][y] === "0") {
        continue;
      }
      count++;
      marked(x, y);
    }
  }

  function marked(x, y) {
    if (x < 0 || y < 0 || x >= M || y >= R) {
      return;
    }
    if (grid[x][y] === "0") {
      return;
    }
    // ? "0"으로 바꿔주면서 섬의 개수를 셀 수 있게
    grid[x][y] = "0";
    marked(x - 1, y);
    marked(x + 1, y);
    marked(x, y - 1);
    marked(x, y + 1);
  }

  return count;
};

// * 문자열로 된 지도를 받을 경우
// * 땅이 "1", 물이 "0"

function countIslands(str) {
  let arr = [];
  // todo: 줄바꿈 기준으로 찢어서 한 행씩 배열에 담기
  str.split("\n").forEach(function (line) {
    arr.push(line.split(""));
  });

  let count = 0;

  arr.forEach(function (line, i) {
    line.forEach(function (item, j) {
      if (item === "0") {
        count++;
        marked(i, j);
      }
    });
  });
  // * 방문한 땅을
  function marked(x, y) {
    // * 물로 바꾸고
    arr[x][y] = "0";
    // * 왼쪽이 땅인지 확인하고 물로 바꿔주기
    if (x > 0) {
      if (arr[x - 1][y] === "1") {
        marked(x - 1, y);
      }
    }
    // * 오른쪽이 땅인지 확인하고 물로 바꿔주기
    if (x < arr.length - 1) {
      if (arr[x + 1][y] === "1") {
        marked(x + 1, y);
      }
    }
    // * 위쪽이 땅인지 확인하고 물로 바꿔주기
    if (y > 0) {
      if (arr[x][y - 1] === "1") {
        marked(x, y - 1);
      }
    }
    // * 아래쪽이 땅인지 확인하고 물로 바꿔주기
    if (x < arr[x].length - 1) {
      if (arr[x][y + 1] === "1") {
        marked(x, y + 1);
      }
    }
  }
  return count;
}
