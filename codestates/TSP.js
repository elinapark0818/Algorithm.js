function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

const TSP = function (places) {
  // * 순열구하기 템플릿 사용!
  const getPermutations = function (arr, n) {
    const results = [];
    if (n === 1) {
      return arr.map((el) => [el]);
    }

    arr.forEach((fixed, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = getPermutations(rest, n - 1);
      const attach = permutations.map((el) => [fixed, ...el]);
      results.push(...attach);
    });
    return results;
  };

  let city = getPermutations(places, places.length);
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < city.length; i++) {
    let distance = 0;
    for (let j = 0; j < city[i].length - 1; j++) {
      distance += parseInt(calculateDistance(city[i][j], city[i][j + 1]));
    }
    if (distance < result) {
      result = distance;
    }
  }
  return result;
};
