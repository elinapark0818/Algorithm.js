// * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴하라

function solution(n) {
  let arr = (n + "").split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
}

// * 맵으로 돌릴 생각을 왜 안했을까 ㅎㅎㅎ
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((i) => parseInt(i));
}

// ? do while 문 오랜만에 본다.
// todo: n = 12345
function solution(n) {
  // todo: 빈 배열을 선언
  let arr = [];

  do {
    arr.push(n % 10);
    // * arr = [5], n = 1234
    // * arr = [5, 4], n = 123
    // * arr = [5, 4, 3], n = 12
    // * arr = [5, 4, 3, 2], n = 1
    // * arr = [5, 4, 3, 2, 1], n = 0
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
