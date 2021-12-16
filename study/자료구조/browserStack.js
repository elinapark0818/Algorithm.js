function browserStack(actions, start) {
  // 뒤로 가기 목록
  let prev = [];
  // 앞으로 가기 목록
  let next = [];

  // todo : start 에 string이 아닌 자료형이 들어가면 false
  if (typeof start !== "string") return false;

  // actions 에 있는 요소를 전부 확인한다.(반복문)
  for (let i = 0; i < actions.length; i++) {
    // 대문자 string 으로 되어 있으면 뒤로가기 목록에 추가한다.
    if (typeof actions[i] === "string") {
      // todo : 처음 진입했을 때는 앞으로가기 가 없다.
      next = [];
      // todo : 뒤로가기가 가능해지도록 이전 페이지 목록(prev) 에 넣어주자
      prev.push(start);
      // todo : 시작페이지(start)는 처음 진입한 현재 페이지
      // 시작점이 해당 string값이 되는 것
      start = actions[i];
    }

    // todo : 뒤로가기 (-1) 이면서, 뒤로 가기 목록 존재하는 경우
    else if (actions[i] === -1 && prev.length !== 0) {
      // ? 앞으로 가기에 현재 위치(start) 추가
      next.push(start);
      // ? 현재 위치(start)가 뒤로가기 목록에 담겨있을테니, pop으로 빼기
      start = prev.pop();
    }
    // todo : 앞으로가기 (1) 이면서, 앞으로가기 목록이 존재하는 경우
    else if (actions[i] === 1 && next.length !== 0) {
      // ? 뒤로가기에 현재 위치(start)를 추가
      prev.push(start);
      // ? 현재 위치(start)가 앞으로가기 목록에 담겨있을테니, pop으로 빼기
      start = next.pop();
    }
  }
  return [prev, start, next];
}

// A - B - C - B - D - A - D - A - D - B
// 시작하는 A
// 마지막은 B

// A, B, C, D

// [ ["A"], "B", ["A", "D"] ]

// ["A"] : 이전페이지로 갈 수 있는 목록
// "B" : start
// ["A", "D"] : 앞으로가기에 있는 목록
