const powerSet = function (str) {
  let strArr = str.split("").sort();
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!arr.includes(strArr[i])) {
      arr.push(strArr[i]);
    }
  }

  let result = [""];

  for (let i = 0; i < arr.length; i++) {
    let len = result.length;
    for (let x = 0; x < len; x++) {
      result.push(result[x] + arr[i]);
    }
  }
  return result.sort();
};

// todo: 길게 재귀하기
const powerSet = function (str) {
  // 빈 문자열을 초기값으로 미리 추가해두기
  let result = [""];
  let subset = "";

  // 체크할 용도로 쓸 객체
  let obj = {};

  function makeSubset() {
    // 재귀탈출조건 = str 알파벳을 다 넣었을 때
    if (subset.length >= str.length) {
      return;
    }

    for (let i = 0; i < str.length; i++) {
      // 아직 subset에 추가되지 않았다면
      if (!obj[str[i]]) {
        // 알파벳 하나씩 추가
        subset += str[i];
        // 중복방지 처리 (aaa 등 중복 알파벳 방지)
        obj[str[i]] = true;

        // => 사전식 순서
        let sorted = subset.split("").sort().join("");

        // 순서상 중복방지 처리 ( dcba, pmuj 등 순서 처리)
        if (result.indexOf(sorted) === -1) {
          result.push(sorted);
        }
        // 재귀 실행
        makeSubset();
        subset = subset.slice(0, -1);

        // 중복방지 초기화.
        obj[str[i]] = false;
      }
    }
  }
  makeSubset();
  return result.sort();
};

// todo: 레퍼런스
const powerSet = function (str) {
  // 정렬
  const sorted = str.split("").sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, "");

  return subSets.sort();
};

// todo: 다른 코드
const powerSet = function (str) {
  let splittedStr = Array.from(new Set(str.split("")));
  let answer = [];

  function recursion(arr, depth) {
    if (depth === splittedStr.length) {
      // answer = [""] 추가해주기
      answer.push(arr.slice().sort().join(""));
      return;
    } else {
      arr[depth] = splittedStr[depth];
      recursion(arr, depth + 1);
      arr[depth] = undefined;
      recursion(arr, depth + 1);
    }
  }
  recursion([], 0);
  return answer.sort();
};
