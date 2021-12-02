// 실패율 구하기
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어가 담긴 배열 stages
// 실패율이 높은 스테이지부터
// 내림차순으로
// 스테이지 번호가 담겨있는 배열을 리턴하라

// 실패율이 높은 스테이지를 순서대로 출력하는 문제이다.

// 총 유저의 수 - 스테이지 1에 머무른 유저 수 = 스테이지2에 도전한 유저 수
// 도달하지 못한 스테이지를 배열의 가장 마지막에 위치시키면 된다..
// N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자

// 입출력 예제
// [1: 1/8, 2: 3/7, 3: 2/4, 4: 1/2, 5: 0/1]
// => [2/4, 1/2, 3/7, 1/8, 0/1] ==> [3,4,2,1,5]

// N : 전체 스테이지 개수
// stages : 어떤 스테이지에서 다음 스테이지로 못 넘어가고 있는 플레이어 수
function solution(N, stages) {
  // 배열 메소드를 활용하기 위해
  // 먼저, 빈 배열을 선언한다
  let answer = [];

  // 스테이지를 통과하지 못한 플레이어가 총 몇 명인지 구한다
  let player = stages.length;

  // 전체 스테이지 수만큼(N) 반복문을 돌리는데
  // 스테이지 '1'부터 시작하기 위해 i = 1 로 초기값을 설정한다
  // 스테이지 완료한 사람도 체크하기 위해 N+1 까지 반복하도록 만들자
  for (let i = 1; i <= N + 1; i++) {
    // 해당 스테이지에 머물러 있는 사람(stages)이
    // 총 몇 명(length)인지 카운트 해 놓자
    let count = stages.filter((n) => n === i).length;

    // 현재 플레이어가 머물러 있는 스테이지의 번호와 실패율()을 answer에 추가한다
    // [스테이지 번호, 실패율]이 담긴 2차원 배열이 만들어진다.
    answer.push([i, count / player]);

    // ? 스테이지에 머물러 있는 플레이어를 전체 플레이어 수에서 계속 빼자
    // 다음번 스테이지에 머물러 있는 플레이어를
    // 총인원(player)에서 조회하고 반복문을 통해 찾는 과정이 끝났으니,
    // 이전 플레이어를 총인원에서 제외 시켜야 정확한 실패율을 구할 수 있기 때문이다.
    // 예를들면,
    // 실패율을 담을 배열[ count / player]
    // 동일한 스테이지에 머물러 있는 플레이어 ['가', '나', '다'] 가 있다면 가정했을 때
    // '가'에 대한 필터링이 끝났다면,
    // ['나', '다'] = '나' 의 실패율을 확인할 총 플레이어 수가 되기 때문에
    player -= count;
  }
  // N+1 인 사람은 스테이지를 통과한 사람이니까 pop으로 제외시킨다
  answer.pop();

  // 내림차순 정렬
  // ! [1] 값은 실패율이다. 실패율로 내림차순!!!
  answer = answer.sort((a, b) => b[1] - a[1]);

  // ! 스테이지 번호를 리턴하자!
  return answer.map((a) => a[0]);
}

// filter 랑 sort 공부해야겠다.

// 좋아요를 가장 많이 받은 다른 풀이
function solution(N, stages) {
  let ans = [];

  for (let i = 1; i <= N; ++i) {
    let usersReachedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage >= i ? 1 : 0),
      0
    );
    let usersStagnatedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage == i ? 1 : 0),
      0
    );
    if (usersReachedCurrentStage === 0) {
      ans.push({ stage: i, failRate: 0 });
      continue;
    }

    ans.push({
      stage: i,
      failRate: usersStagnatedCurrentStage / usersReachedCurrentStage,
    });
  }

  return ans
    .sort((a, b) => {
      if (a.failRate > b.failRate) return -1;
      if (a.failRate < b.failRate) return 1;
      return a.stage - b.stage;
    })
    .map((entry) => entry.stage);
}
