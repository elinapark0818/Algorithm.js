function solution(p) {
  let answer = "";
  let left = 0; // 현재 왼쪽 괄호 개수
  let right = 0; // 현재 오른쪽 괄호 개수
  let check = false; // '올바른 괄호' 인지 아닌지

  if (p.length == 0) {
    return "";
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] == "(") left++;
    if (p[i] == ")") right++;

    // 핵심개념 : 오른쪽 괄호가 왼쪽 괄호의 수를 넘으면 그때부터 '올바른 괄호' X
    if (right > left) check = true;

    // 균형잡힌 u가 나와서 쪼갤 타이밍 (u,v)
    if (left == right) {
      // '올바른 괄호' X
      if (check == true) {
        answer += "(";
        answer += solution(p.slice(i + 1, p.length));
        answer += ")";

        // 첫번째, 마지막 문자 제거하고 나머지 반전 후 뒤에 붙이기
        for (let j = 1; j < i; j++) {
          if (p[j] == ")") answer += "(";
          if (p[j] == "(") answer += ")";
        }
        return answer;
      }

      // '올바른 괄호' O
      else {
        answer += p.slice(0, i + 1); // 그냥 넣고
        answer += solution(p.slice(i + 1, p.length)); // 나머지에 대해 재귀
        return answer;
      }
    }
  }
}

// * 가장 좋아요를 많이 받은 코드

function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
