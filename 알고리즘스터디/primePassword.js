// 소수 판별
function isPrime(num) {
  // 2로 나누어떨어지는건 소수가 아님
  if (num % 2 === 0) return false;
  // 제곱했을 때의 값
  let sqrt = parseInt(Math.sqrt(num));
  // 3부터 시작해서 2씩 더해가면서 해당 숫자로 나누어 떨어지는 값이 없어야 소수
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}

// Number + 배열화  (1033) => [1, 0, 3, 3]
function splitNum(num) {
  const digits = num.toString().split("");
  return digits.map((d) => Number(d));
}

// Number 타입으로 합치기(배열 -> Number)
const joinDigits = (digits) => Number(digits.join(""));

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  // * curPwd, newPwd가 동일하면 0을 리턴. (바꿀게 없으니)
  if (curPwd === newPwd) return 0;

  // * bfs 작업을 위한 초기값 설정
  let front = 0;
  let rear = 0;
  const queue = [];

  // 비어있는지 확인하는 함수 isEmpty
  const isEmpty = () => front === rear;
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
  };

  const deQueue = (queue) => {
    const item = queue[front];
    front++;
    return item;
  };

  // * 각 4개의 숫자에 방문여부를 저장하는 배열
  // * 한 번 방문했다면, 다시 방문하지 않도록
  const isVisited = Array(10000).fill(false);
  isVisited[curPwd] = true;

  // * bfs 시작점.
  enQueue(queue, [0, curPwd]);

  // * isEmpty(queue) 가 true가 될때까지 반복. (큐가 empty할 때까지)
  while (isEmpty(queue) === false) {
    const [count, num] = deQueue(queue);
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num);

      for (let d = 0; d < 10; d++) {
        if (d !== digits[i]) {
          digits[i] = d;

          const next = joinDigits(digits);

          if (next === newPwd) return count + 1;

          if (next > 1000 && isPrime(next) && isVisited[next] === false) {
            isVisited[next] = true;
            enQueue(queue, [count + 1, next]);
          }
        }
      }
    }
  }
  return -1;
};
