// 괄호가 바르게 짝지어졌다는 것은
// '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.

// 입출력 예제
// "(())()"	, true
// ")()(" , false

// todo: 효율성 테스트 통과못했다.
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    // 일단 첫번째가 "("인지 확인해야 한다.
    if (s[i] === "(") {
      answer += 1;
    } else {
      answer += -1;
    }
    // 첫번째가 아니면 바로 false 리턴하기
    if (answer < 0) {
      return false;
    }
  }
  // 짝이 맞으면 0이 될테니 ture 리턴하도록
  return answer === 0 ? true : false;
}

// todo: 통과되었다.
// todo: 스택문제니까 스택을 씁시다. 선입후출...

function solution(s) {
  // false 의 경우 먼저 걸러내고
  if (s[0] === ")") return false;
  if (s[s.length - 1] === "(") return false;

  let stack = [];

  // push 로 스택에 쌓는다
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    // 열리고 닫히는 짝으로 마지막, 마지막에서 두번째꺼라면 pop, pop 한다.
    // 입출력 예시 봤을 때, 여는괄호가 연속으로 오는 경우가 있어서 뒤에서부터 확인
    if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      stack.pop();
    }
  }
  // 스택에 남아있다면 false
  return stack.length > 0 ? false : true;
}
