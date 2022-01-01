// * 3번의 기회
// * 점수는 0 ~ 10 점까지
// * Single(S) = 제곱, Double(D) = 2제곱, Triple(T) = 3제곱
// * S,D,T 는 점수마다 하나씩 존재한다
// * 옵션으로 스타상(*) = 해당 점수를 2배로, 아차상(#) = 해당 점수를 마이너스
// * 스타상, 아차상은 중첩될 수 있다.
// * 스타상 아차상 둘 중 하나만 존재할 수 있고, 존재하지 않을 수도 있다.

// todo : 문자열로 구성된 점수(dartResult)의 합계를 정수값으로 출력하시오

// ? 예제
// ? "1S2D*3T" => 1S(1 * 2) + 2D(4 * 2) + 3T(27) = 37
// ? "1D2S#10S" => 1D(1 * 1) + 2S{2 * #1(-1)} + 10S(10) = 1 + (-2) + 10 = 9
// ? 1D2S0T => 1d(1 * 1) + 2S(2 * 1) + 0T(0 * 0 * 0) = 3
// ? 1S*2T*3S => (1 * 2 * 2) + (8 * 2) + 3 = 4 + 16 + 3 = 23

function solution(dartResult) {
  let answer = 0;
  // 점수를 기록하는 배열
  const scoreArray = [];
  // 점수를 누적하는 변수
  let score = "";
  // dartResult의 길이
  dartResultLength = dartResult.length;
  for (let i = 0; i < dartResultLength; i++) {
    // 현재 접근한 결과
    const currentResult = dartResult[i];
    // S, D, T, *, # 중 하나인지 검사
    if (currentResult === "S") {
      // score를 scoreArray에 push
      scoreArray.push(parseInt(score));
      score = "";
    } else if (currentResult === "D") {
      // score를 2제곱 후 scoreArray에 push하고 0으로 초기화
      scoreArray.push(parseInt(score) ** 2);
      score = "";
    } else if (currentResult === "T") {
      // score를 3제곱 후 scoreArray에 push하고 0으로 초기화
      scoreArray.push(parseInt(score) ** 3);
      score = "";
    }
    // *인경우 기록된 점수를 2배처리
    else if (currentResult === "*") {
      // 현재 기록된 scoreArray의 길이
      scoreArrayLength = scoreArray.length;
      // 길이가 1이면 점수 하나만 2배 처리
      if (scoreArrayLength === 1) {
        scoreArray[0] *= 2;
      }
      // 1보다 큰 경우 이전 점수, 현재 점수 2배 처리
      else if (scoreArrayLength > 1) {
        scoreArray[scoreArrayLength - 1] *= 2;
        scoreArray[scoreArrayLength - 2] *= 2;
      }
    }
    // '#'인 경우 해당 점수 -1 처리
    else if (currentResult === "#") {
      scoreArray[scoreArray.length - 1] *= -1;
    }
    // 위의 문자열이 아니면 숫자이므로 점수를 누적
    else {
      score += currentResult;
    }
  }
  answer = scoreArray.reduce((prev, curr) => prev + curr, 0);

  return answer;
}

//  조금 더 간결하게, score 객체처리
function solution(dartResult) {
  // * 다트기회가 총 3번이니까, stack의 총 길이는 3이 된다
  let stack = [];
  // * 점수 제곱 수를 객체에 담기
  let score = { S: 1, D: 2, T: 3 };
  // * 숫자가 10인 경우를 체크하기 위한 count
  let count = 0;

  for (let i = 0; i < dartResult.length; i++) {
    let data = dartResult.charAt(i);
    // * 문자열이라면 NaN 이 될 것이다.
    if (+data != data) {
      // * S,D,T 연산
      if (score[data]) {
        stack.push(Math.pow(dartResult.slice(i - count, i), score[data]));
        count = 0;
      } else {
        // * 스타상이라면 2, 아니라면 아차상이니까 -1
        const options = data === "*" ? 2 : -1;
        if (options === 2 && stack.length > 1) {
          // * 스타상 연산
          stack[stack.length - 2] = stack[stack.length - 2] * options;
        }
        // * 아차상 연산
        stack[stack.length - 1] = stack[stack.length - 1] * options;
      }
    } else {
      // * 숫자영역 체크
      count++;
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
}

// 정규식 활용
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
