// * 소수는 1과 자신이외에 나눌 수 없는 값
// * 즉, 모든 배수를 제외하면 나머지가 소수다.
// * 에라토스테네스의 체 적용
function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}

// * 에라토스테네스의 체

function solution(n) {
  let answer = 0;
  let num = new Array(n + 1);

  for (let i = 2; i <= n; i++) {
    num[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (num[j] === 0) {
      continue;
    }
    // * 배수는 소수가 아니다. 0 처리
    for (let k = j * 2; k <= n; k += j) {
      num[k] = 0;
    }
  }
  // * 모든 배수를 제외하면 나머지가 소수다.
  for (let i = 2; i <= n; i++) {
    if (num[i] !== 0) answer += 1;
  }
  return answer;
}

// Set 을 이용하는 방법 (우아..)
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j += 2) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
