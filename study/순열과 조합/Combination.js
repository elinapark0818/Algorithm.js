// * 조합 템플릿

function getCombination(arr, num) {
  if (num === 1) {
    return arr.map((value) => [value]);
  }

  let result = [];

  arr.forEach((value, index) => {
    const rest = arr.slice(index + 1);
    const combination = getCombination(rest, num - 1);
    const attached = combination.map((c) => [value, ...c]);
    result.push(...attached);
  });
  return result;
}

const arr = [1, 2, 3, 4, 5];

const c = getCombination(arr, 1);
console.log(c);

// // * getCombination(arr, 1);
// [[1], [2], [3], [4], [5]];

// // * getCombination(arr, 2);
// [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [1, 5],
//   [2, 3],
//   [2, 4],
//   [2, 5],
//   [3, 4],
//   [3, 5],
//   [4, 5],
// ];
