// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지
// 다리에는 트럭이 bridge_length 만큼 올라갈 수 있다.
// 다리는 weight 만큼 무게를 버틸 수 있다.
// truck_weights 각 트럭의 무게를 담은 배열

// todo: 예시 트럭이 2대가 올라갈 수 있는 다리
// todo: 다리는 무게를 10까지 견딜 수 있다
// todo: 트럭의 무게가 [7, 4, 5, 6] 이라면
// todo: 최소 8초가 걸린다.

// 다리 = [0, 0]
// 1초가 지났을 때, [0, 7] 이고 [4, 5, 6] 대기
// 2초가 지났을 때, [7, 0] 이고 [4, 5, 6] 대기
// 3초가 지났을 때, 7이 다리를 건넜고, [0, 4] 이고, [5, 6] 대기
// 4초가 지났을 때, [4, 5] 이고, [6] 대기
// 5초가 지났을 때, 4가 다리를 건넜고, [5, 0]이고, [6] 대기
// 6초가 지났을 때, 5가 다리를 건넜고, [0, 6]
// 7초가 지났을 때, [6, 0]
// 8초가 지났을 때, 6이 다리를 건넜다.

// ? bridge_length : 다리에 올라갈 수 있는 트럭의 수
// ? weight : 다리가 견딜 수 있는 무게
// ? truck_weights : 트럭 별 무게
function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let list = [];

  let truck = truck_weights.shift();
  list.push(truck);

  let size = truck;

  for (let i = 0; i < bridge_length - 1; i++) {
    list.push(0);
  }

  while (size > 0) {
    size -= list.pop();
    truck = truck_weights.shift();

    if (size + truck <= weight) {
      list.unshift(truck);
      size += truck;
    } else {
      list.unshift(0);
      truck_weights.unshift(truck);
    }
    answer++;
  }

  return answer;
}

//
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}
