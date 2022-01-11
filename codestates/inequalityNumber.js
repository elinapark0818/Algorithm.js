const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  signs = signs.split(" ");
  let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const answer = maxNumber(signs, n.slice()) - minNumber(signs, n.slice());
  return answer;
};

const maxNumber = (signs, number) => {
  let max = "";

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === ">") {
      max += String(number.pop());
    } else {
      let count = 1;

      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === "<") {
          count++;
        } else {
          break;
        }
      }
      max += String(number.splice(number.length - 1 - count, 1));
    }
  }
  max += number.pop();
  return max;
};

const minNumber = (signs, number) => {
  let min = "";

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "<") {
      min += String(number.shift());
    } else {
      let count = 1;

      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === ">") {
          count++;
        } else {
          break;
        }
      }
      min += String(number.splice(count, 1));
    }
  }
  min += number.shift();
  return min;
};

//

// 부등호를 만족하는 숫자의 조합을 차례대로 이어붙여 만든 정수를 "부등호 수" 라고 한다
// 부등호 기호들을 입력받아 부등호를 만족하는 최대 부등호 수와 최소 부등호 수 차이를 리턴하라
const inequalityNumber = function (signs) {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const arr = signs.split(" ");
  let isUsed = new Array(10).fill(false);

  const isVaild = (str) => {
    if (str.length === 1) return true;

    for (let i = 0; i < str.length - 1; i++) {
      if (arr[i] === ">" && Number(str[i]) <= Number(str[i + 1])) return false;
      if (arr[i] === "<" && Number(str[i]) >= Number(str[i + 1])) return false;
    }
    return true;
  };

  const dfs = (str, digits) => {
    if (str.length === arr.length + 1) {
      return str;
    }

    for (let i = 0; i < digits.length; i++) {
      const num = digits[i];
      if (isVaild(str + num) && !isUsed[num]) {
        isUsed[num] = true;

        const result = dfs(str + num, digits);

        if (result) {
          return result;
        } else {
          isUsed[num] = false;
        }
      }
    }
    return null;
  };

  const max = dfs("", digits);
  isUsed = new Array(10).fill(false);
  const min = dfs("", digits.reverse());

  return max - min;
};
