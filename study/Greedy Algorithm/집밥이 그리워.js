function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [[]];
  function yamyamlist(sideDishes) {
    for (let i = 0; i < sideDishes.length; i++) {
      let temp = result.slice();
      for (let j = 0; j < temp.length; j++)
        temp[j] = temp[j].concat(sideDishes[i]);
      result = result.concat(temp);
    }
  }
  yamyamlist(sideDishes.sort());
  return result.sort();
}

// 멱집합

// 1. 빈 배열 복사

["김치", "계란말이", "김"][
  // []
  "김치"
][
  // ---
  "계란말이"
][("김치", "계란말이")][
  // ---

  // []
  ("김치", "김")
][("계란말이", "김")][("김치", "계란말이", "김")];
// ---
