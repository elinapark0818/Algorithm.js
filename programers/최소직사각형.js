// 지갑의 크기를 정하려고 한다.
// 다양한 모양과 크기를 가진 명함을 모두 수납할 수 있으며
// 작아서 들고 다니기 편해야 한다

// sizes 는 2차원 배열이다. sizes = [[w, h], [w, h], [w, h] ...]
// 결과값은 w * h

function solution(sizes) {
  let longest = 0;
  let shortest = 0;

  for (let i of sizes) {
    if (i[0] > i[1]) {
      if (longest < i[0]) longest = i[0];
      if (shortest < i[1]) shortest = i[1];
    } else {
      if (longest < i[1]) longest = i[1];
      if (shortest < i[0]) shortest = i[0];
    }
  }
  return longest * shortest;
}

// 다른 풀이
function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.forEach((s) => {
    // sort 로 정렬
    const [a, b] = s.sort((a, b) => a - b);
    if (a > height) height = a;
    if (b > width) width = b;
  });

  return width * height;
}

// 또 다른 풀이
function solution(sizes) {
  // map으로 정렬시키기
  const rotated = sizes.map(([width, height]) =>
    width < height ? [height, width] : [width, height]
  );

  // width 중 제일 큰 값, h 중 제일 큰 값 을 담을 배열
  let maxSize = [0, 0];

  rotated.forEach(([width, h]) => {
    // width 중 제일 큰 값 담기
    if (width > maxSize[0]) maxSize[0] = width;
    // height 중 제일 큰 값 담기
    if (height > maxSize[1]) maxSize[1] = height;
  });

  return maxSize[0] * maxSize[1];
}
