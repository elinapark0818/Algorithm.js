// 0, 1 로만 이루어져있다. 2진수
// 공백은 0, 벽은 1이다
// 공백은 0 && 0 이어야 한다
// 벽은 0 || 1 하나라도 벽이면 벽이다
// 0 을 " "로, 1을 "#"으로 바꿔서 출력한다.

// todo : n은 지도 한 변의 크기
// todo : arr1, arr2의 길이는 n이다

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    // a | b : 두 피연산자의 각 비트의 값이 모두 0인 위치에 0을 반환
    const binary = (arr1[i] | arr2[i]).toString(2);
    console.log(binary);

    let result = [];
    for (let j = binary.length - n; j < binary.length; j++) {
      if (binary[j] === "1") result.push("#");
      else result.push(" ");
    }
    answer.push(result.join(""));
  }
  return answer;
}

// 정규식와 padStart 로 풀기
const solution = (n, arr1, arr2) =>
  arr1.map((arr1, i) =>
    (arr1 | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );

// ? 비트 연산자

// ? String.prototype.padStart()
// ? 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환한다.

// str.padStart(targetLength [, padString])

// targetLength : 목표 문자열의 길이 (현재 길이보다 작으면 그대로 반환한다)
// padString : 채워넣을 다른 문자열 (목표 길이보다 길면 좌측 일부를 자른다)

"HELLO".padStart(1); // 'HELLO'
"HELLO".padStart(10); // '     HELLO'
"HELLO".padStart(10, "*"); // '*****HELLO'
"HELLO".padStart(10, "1234567890"); // '12345HELLO'
"HELLO".padStart(20, "1234567890"); // '123456789012345HELLO'

// 2진수 구현
function solution(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  //manually turning decimals to binaries cos i can!
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = "";
    for (let j = 0; j < n; j++) {
      s = (num1 % 2) + (num2 % 2) ? "#" + s : " " + s;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(s);
  }
  return answer;
}
