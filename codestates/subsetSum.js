const subsetSum = function (set, bound) {
  let answer = 0;

  // * bound <= 300
  const arr = Array(301).fill(false);
  set.forEach((el) => {
    const results = [];
    // * bound보다 작은 수일 경우에 반복문으로 돌리기
    for (let i = 1; i <= bound - el; i++) {
      if (arr[i]) {
        const combination = i + el;
        results.push(combination);
        if (combination > answer) {
          answer = combination;
        }
      }
    }

    results.forEach((el) => (arr[el] = true));
    if (el <= bound) {
      arr[el] = true;
      if (el > answer) {
        answer = el;
      }
    }
  });

  return answer;
};
