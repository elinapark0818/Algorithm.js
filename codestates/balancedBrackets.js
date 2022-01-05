// * 처음 생각한 방법
const balancedBrackets = function (str) {
  let arr = str.split("");
  let cnt1 = 0;
  let cnt2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      cnt1++;
    }
    if (arr[i] === ")") {
      if (!cnt1 || cnt1 === cnt2) {
        return false;
      } else {
        cnt2++;
      }
    }
  }

  if (cnt1 !== cnt2) {
    return false;
  }
  return true;
};

//  * 스택으로 푸는거였다.
const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const stack = [];
  let brockets = { "(": ")", "{": "}", "[": "]" };
  let close = ")}]";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in brockets) stack.push(str[i]);
    else if (close.includes(str[i])) {
      let tail = stack.pop();
      let head = brockets[tail];

      if (head !== str[i]) return false;
    }
  }
  return !stack.length;
};
