function movingStuff(stuff, limit) {
  let count = 0;
  // * stuff 오름차순
  stuff = stuff.sort((a, b) => a - b);

  while (stuff.length > 0) {
    // * 가장 가벼운 무게랑 무거운 무게를 더했을 때 무게제한보다 작거나 같다면
    if (stuff[0] + stuff[stuff.length - 1] <= limit) {
      stuff.shift();
      stuff.pop();
      count++;
    } else {
      stuff.pop();
      count++;
    }
  }
  return count;
}
