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
