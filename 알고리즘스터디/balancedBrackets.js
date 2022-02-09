const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const stack = [];
  // * 객체 (키값 쌍으로)로 괄호들을 넣어준다
  let brackets = { "(": ")", "{": "}", "[": "]" };
  // * 닫는 괄호
  let close = ")}]";

  // ! 예시 str = ' [ ( ] { ) } '
  // * str을 요소들을 하나씩 확인하면서
  for (let i = 0; i < str.length; i++) {
    // * 먼저, 여는 괄호 로 확인되면 스택에 추가
    if (str[i] in brackets) {
      stack.push(str[i]); // ! stack =  "[", "("
    }
    // * 닫는 괄호라면
    // ! str[i] = "]"
    else if (close.includes(str[i])) {
      // todo: 여는 괄호가 먼저있고, 닫는괄호가 나중에 있어야 한다
      // * 스택에 마지막 요소를 빼서(여는 괄호들이 될테다.)
      // ! 닫는 괄호가 들어온다면
      let tail = stack.pop(); // ! tail = "("
      // * 해당하는 닫는 괄호를 head에 할당
      let head = brackets[tail]; // ! head = ")"
      // ! head에 여는 괄호가 들어가게 된다
      if (head !== str[i]) {
        // ! ")" !== "]"
        return false;
      }
    }
  }
  // * 스택에 남은게 있다면 false
  return !stack.length;
};
