function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  stuffArr = stuffArr
    .map((x) => (x.toString().indexOf("000") === -1 ? x : null))
    .filter((x) => x)
    .sort((a, b) => a - b);
  let result = [];
  function permutation(stuffArr, choiceNum, bucket) {
    if (choiceNum === 0) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < stuffArr.length; i++) {
      let newArr = [...stuffArr];
      permutation(newArr, choiceNum - 1, bucket.concat(newArr.splice(i, 1)));
    }
  }
  if (stuffArr.length < choiceNum) return [];
  permutation(stuffArr, choiceNum, []);
  return result;
}
