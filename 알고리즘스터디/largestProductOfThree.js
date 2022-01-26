// * OverFlowBIN

// nC3로 풀기
// nC3 모든 경우 배열에 담기
// [2, 3, -11, 7, 5, -13]
// [[2, 3, -11], [2, 3, 7], [2, 3, 5], [2, 3, -13], ...]
// 각 요소들(3개 숫자)을 곱합 값으로 바꾸기 (map)
// Math.max 가장 큰 값 찾기.

const largestProductOfThree = (arr) => {
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    // 1개씩 택할 때, 바로 모든 배열의 원소 return
    if (selectNumber === 1) {
      return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, origin) => {
      // 해당하는 fixed를 제외한 나머지 뒤
      const rest = origin.slice(index + 1);
      // 나머지에 대해서 조합을 구한다.
      const combinations = getCombinations(rest, selectNumber - 1);
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      // 배열 spread syntax 로 모두다 push
      results.push(...attached);
    });
    // 결과 담긴 results return
    return results;
  };

  let comb = getCombinations(arr, 3);

  // let result = [];
  // for (let el of comb) {
  //   el = el.reduce((pre, cur) => pre * cur);
  //   result.push(el);
  // }

  for (let i = 0; i < comb.length; i++) {
    comb[i] = comb[i].reduce((pre, cur) => pre * cur);
  }

  return Math.max(...comb);
};

// * elina

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 오름차순 정렬해서
  const newArr = arr.slice().sort((a, b) => a - b);
  // 상대적으로 큰 3개의 값을 배열에 담는다

  // 모두 양수일 때 마지막 3개의 요소를 곱한다
  const result1 =
    newArr[newArr.length - 1] *
    newArr[newArr.length - 2] *
    newArr[newArr.length - 3];
  // 가장 작은 2개의 요소와 마지막 요소를 곱한다
  const result2 = newArr[0] * newArr[1] * newArr[newArr.length - 1];

  // 둘 중 더 큰 값을 리턴한다
  return Math.max(result1, result2);
};

// 0번째랑 1번째랑 마지막을 곱해주고 있다.
// -123, -1235, -12536, -65432;
output = largestProductOfThree([-123, -1235, -12536, -65432]);
console.log(output);

//happy5happy5
const largestProductOfThree = function (arr) {
  let result = [];

  if (arr.length < 3) {
    return arr.reduce((a, b) => a * b);
  }
  let arrPlus = arr.filter((x) => x > 0).sort((a, b) => b - a);
  let arrMinus = arr.filter((x) => x < 0).sort((a, b) => a - b);

  // [1등]arrPlus*arrPlus*arrPlus
  // 플러스중 가장 큰것 3개 곱한값
  let num1 = arrPlus[0] * arrPlus[1] * arrPlus[2];
  // [2등]arrPlus*arrMinus*arrMinus
  // 플러스중 가장 큰것 1개 곱하기 마이너스중 절대값 가장큰 2개 곱한값
  let num2 = arrPlus[0] * arrMinus[0] * arrMinus[1];
  // [3등]0
  // 제로

  // [4등]arrMinus*arrMinus*arrMinus
  // 마이너스중 가장 작은것 3개 곱한 값
  let num3 =
    arrMinus[arrMinus.length - 1] *
    arrMinus[arrMinus.length - 2] *
    arrMinus[arrMinus.length - 3];

  // 어떤 숫자 조합이 나와도 이 범위를 벗어나지 않음
  if (arr.indexOf(0) === -1) {
    result = [num1, num2, num3];
  } else {
    result = [num1, num2, num3, 0];
  }
  return Math.max(...result.filter((x) => !isNaN(x)));
};

console.log(largestProductOfThree(arr));
