function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2)) * 100;
}

const TSP = function (places) {
  const getPermutations = function (arr, n) {
    const results = [];
    if (n === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = getPermutations(rest, n - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };
  let cities = getPermutations(places, places.length);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < cities.length; i++) {
    let distance = 0;
    for (let j = 0; j < cities[i].length - 1; j++) {
      distance += parseInt(calculateDistance(cities[i][j], cities[i][j + 1]));
    }
    if (distance < result) {
      result = distance;
    }
  }
  return result;
};
