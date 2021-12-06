function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 제곱근을 구해야하는데
  // 제곱근을 구하는 방법은 2로 나눈 다음에
  // 0보다 작아지기 전까지 1,2,3,4,5... 오름차순으로 뺀다
  // 그리고 그 숫자에 2를 곱한다
  // 마지막으로 빼야하는 숫자랑 그 숫자에 2를 곱한 값이랑 같으면 제곱근이다
  // toFixed메서드  : 원하는 소수점까지의 값을 문자열 형태로 리턴해준다

  let multipleNum = 1;
  while (true) {
    if (multipleNum ** 2 === num) {
      return multipleNum;
    } else if (multipleNum ** 2 > num) {
      multipleNum -= 1;
      break;
    }
    multipleNum++;
  }

  let count = 0;
  let guess = multipleNum;
  while (true) {
    count++;
    if (count === 1000) {
      return parseFloat(guess.toFixed(2));
    }
    guess = (guess + num / guess) / 2;
  }
}

// 바빌로니아 법

// 임의의 초기값을 1로 하자
let approx = 1;
// approx의 제곱이 num과 다를 동안 반복문
while (approx ** 2 !== num) {
  //  approx의 제곱을 소수점 둘째 이하에서 반올림 했을 때 num과 같아진다면
  if (Number((approx * approx).toFixed(2)) === num) {
    // 무한 루프에 빠지지 않기 위해 반드시 break
    break;
  }
  // 바빌로니아 법의 점화식
  approx = (approx + num / approx) / 2;
}
// num의 제곱근의 근사값을 소수점 둘째까지 나오게
// toFixed는 문자열로 출력되니 Number로 감싸준다
return Number(approx.toFixed(2));

// 레퍼런스

const diffs = [1, 0.1, 0.01, 0.001];
// 임의의 초기값이 있다
let base = 1;
for (let i = 0; i < diffs.length; i++) {
  // 초기값과 num이 비슷해질때까지(소수점 둘째자리 범위 내) 반복한다
  while (base * base < num) {
    // 다르다면, 초기값에 0.01 씩 더해준다
    base = base + diffs[i];
  }

  // 이 초기값의 제곱이 num과 같다면 리턴한다
  if (base * base === num) {
    return base;
  } else {
    base = base - diffs[i];
  }
}
// Number() 와 toFixed()를 활용하여 소수점 둘째자리까지의 숫자를 리턴한다
return Number(base.toFixed(2));
