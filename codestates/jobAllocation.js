// * happy5happy5

const jobAllocation = function (jobs, workersNum) {
  let memo = [];
  for (let i = 0; i < workersNum; i++) memo.push(Array(jobs.length).fill(0));

  // memo[i][j]는 i번째 워커가 j부터 끝까지 짐을 처리할 때 최소값

  function comparing(jobs, lastWorkerIdx, i, j) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let k = j; k <= jobs.length - 1 - (lastWorkerIdx - i); k++) {
      sum += jobs[k];
      min = Math.min(Math.max(memo[i + 1][k + 1], sum), min);
    }
    return min;
  }
  function workSplit(jobs, lastWorkerIdx, i, j) {
    if (lastWorkerIdx === i) {
      //셋팅
      if (jobs.length - 1 === j)
        if (!memo[i][j]) return (memo[i][j] = jobs[jobs.length - 1]);
      if (!memo[i][j])
        return (memo[i][j] =
          workSplit(jobs, lastWorkerIdx, i, j + 1) + jobs[j]);
    } else if (lastWorkerIdx > i) {
      //본게임
      if (!memo[i + 1][j + 1]) workSplit(jobs, lastWorkerIdx, i + 1, j + 1);
      if (!memo[i + 1][j + 1] || j === jobs.length - 1 - (lastWorkerIdx - i)) {
        let jTemp = j;
        while (i <= jTemp) {
          memo[i][jTemp] = comparing(jobs, lastWorkerIdx, i, jTemp);
          jTemp--;
        }
      } else workSplit(jobs, lastWorkerIdx, i, j + 1);
    }
  }
  workSplit(jobs, workersNum - 1, 0, 0);
  return memo[0][0];
};

// * 레퍼런스

const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.
  // 자연수 배열을 n개의 연속 구간으로 나눌 때,
  // 합이 가장 큰 구간의 합을 sum이라고 하고
  // sum이 가장 작아지는 분배에서의 sum을 구해야 합니다.

  // 중복계산을 피하기 위해 메모이제이션 사용
  const memo = [];

  for (let i = 0; i < workersNum; i++) {
    // memo에 작업자의 수만큼 -1을 요소로 갖는 배열을 만들어서 넣는다.
    memo.push(Array(jobs.length).fill(-1));
  }
  // 마지막 작업자
  let workload = 0;
  // 마지막 작업자는 남아있는 모든 작업을 다 해야해서 계산하기 쉽다?
  // 마지막 작업자는 최대 나머지 작업자의 수만큼을 제외한! 일만 할 수 있다.
  for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
    workload += jobs[i];
    memo[workersNum - 1][i] = workload;
  }

  const aux = (workerIdx, jobIdx, jobs, left) => {
    // 이미 계산한 적이 있는 경우 다시 계산하지 않는다.
    if (memo[workerIdx][jobIdx] !== -1) {
      return memo[workerIdx][jobIdx];
    }

    let workload = 0;
    // 안전한 숫자로 만들어 두고 ===> min
    let min = 2000;
    for (let i = jobIdx; i < jobs.length - left; i++) {
      workload += jobs[i];
      // 가장 많이 일하는 사람의 작업량 구하기
      const hardest = Math.max(
        workload,
        aux(workerIdx + 1, i + 1, jobs, left - 1)
      );
      // 그 작업량이 최소화되는 분배에서 최대 작업량을 구한다.
      min = Math.min(min, hardest);
    }
    memo[workerIdx][jobIdx] = min;
    return min;
  };
  return aux(0, 0, jobs, workersNum - 1);
};
