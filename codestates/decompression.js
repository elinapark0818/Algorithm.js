const decompression = function (image) {
  let answer = "";

  const rec = (y1, y2, x1, x2) => {
    // 상하
    for (let i = y1; i < y2; i++) {
      // 좌우
      for (let j = x1; j < x2; j++) {
        if (image[y1][x1] !== image[i][j]) {
          // 4등분하기 위한 기준
          let halfX = (x2 + x1) / 2;
          let halfY = (y2 + y1) / 2;
          answer += "X";
          // 좌측상단
          rec(y1, halfY, x1, halfX);
          // 우측상단
          rec(y1, halfY, halfX, x2);
          // 좌측하단
          rec(halfY, y2, x1, halfX);
          // 우측하단
          rec(halfY, y2, halfX, x2);
          return;
        }
      }
    }
    // 재귀적으로 압축
    answer += image[y1][x1];
    return;
  };
  // 재귀
  rec(0, image.length, 0, image.length);

  return answer;
};
