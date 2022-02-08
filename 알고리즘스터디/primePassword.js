// * 소수판별
function isPrime(num) {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

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

// * Number + 배열화  (1033) => [1, 0, 3, 3]
function splitNum(num) {
  const digits = num.toString().split("");
  return digits.map((d) => Number(d));
}

// ? split 과 join은 따라가는거라고 기억해도 좋을듯!

// * 문자열화
// Number 타입으로 합치기(배열 -> Number)
const joinDigits = (digits) => Number(digits.join(""));

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  // * curPwd, newPwd가 동일하면 0을 리턴. (바꿀게 없으니)
  if (curPwd === newPwd) {
    return 0;
  }

  // * bfs 작업을 위한 초기값 설정 - 머리 꼬리 정해두기
  let front = 0;
  let rear = 0;
  const queue = [];

  // 비어있는지 확인하는 함수 isEmpty
  // * 머리 꼬리가 둘다 0이면 비어있는 값이다.
  const isEmpty = () => front === rear;
  // * 큐에 담을 거 구하기
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
  };
  // * 큐에서 빼내기
  const deQueue = (queue) => {
    // * 머리에 있는 애를 item에 할당하고
    const item = queue[front];
    // * 머리를 1씩 증가시키기
    front++;
    return item;
  };

  // * 각 4개의 숫자에 방문여부를 저장하는 배열
  // * 한 번 방문했다면, 다시 방문하지 않도록
  // ? 9999 이하의 자연수니까
  const isVisited = Array(10000).fill(false);
  // * 현재비밀번호를 방문한게 되니까 true 처리
  isVisited[curPwd] = true;

  // ! 여기서부터 시작인거다. === 큐에 넣고 시작하기!
  // * bfs 시작점.
  enQueue(queue, [0, curPwd]);

  // * isEmpty(queue) 가 true가 될때까지 반복. (큐가 empty할 때까지)
  // ? 큐가 빌때까지 반복문 돌리자
  while (isEmpty(queue) === false) {
    const [count, num] = deQueue(queue);
    // * 4자리의 소수인 비밀번호가 변경가능하니까 : i < 4
    for (let i = 0; i < 4; i++) {
      // * 문자열화된 비밀번호로 만들어서
      const digits = splitNum(num);
      // * 1의 자리 애들이니까
      for (let d = 0; d < 10; d++) {
        if (d !== digits[i]) {
          digits[i] = d;

          // * 다음으로 확인할 애들 next
          const next = joinDigits(digits);

          // * 새 비밀번호랑 같다면 리턴시키기
          // * 카운트를 1씩 증가()
          if (next === newPwd) {
            return count++;
          }
          // * 1000보다 크면서 소수이어야 하고 방문한적이 없으면
          if (next > 1000 && isPrime(next) && isVisited[next] === false) {
            // * 일단 방문처리 하고
            isVisited[next] = true;
            // * 큐에 넣기
            enQueue(queue, [count + 1, next]);
          }
        }
      }
    }
  }
  // * 모든 경우의 수를 다 돌아도 리턴되지 않았다면 새로운 비밀번호를 만들 수 없는 것
  return -1;
};
