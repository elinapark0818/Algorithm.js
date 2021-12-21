// 중요도가 높은 문서를 먼저 인쇄하는 프린터

// todo: 대기목록 가장 앞에있는 문서를 대기목록에서 꺼낸다.
// todo: 꺼낸 문서보다 중요도가 높은 문서가 한 개라도 존재하면
// todo: 해당문서를 대기목록의 가장 마지막으로 옮긴다
// todo: 그렇지 않으면 해당문서를 인쇄

// ? 예제 priorities = [1,1,9,1,1,1] location = 0
// ? 결과 C-D-E-F-A-B, return 5
// ? 내가 요청한 문서는 A(location = 0), === location
// ? A가 몇번째에 인쇄되는지 리턴해야 한다

// 중요도가 가장 높은 prop을 찾아야 한다.
//
function solution(priorities, location) {
  let answer = 0;
  let count = 0;
  let J = location;

  while (priorities.length > 0) {
    // 일단 맨 앞에 있는 문서를 대기목록에서 꺼낸다.
    const document = priorities.shift();

    // 맨 앞의 문서보다 우선순위가 높은 문서가 있다면
    if (priorities.filter((el) => el > document).length > 0) {
      // 인쇄하지 않고 맨 뒤로 푸쉬
      priorities.push(document);
    }
    // 맨 앞의 문서보다 우선순위가 높은게 없다면
    else {
      // 카운트 올리고
      count++;
      // 처음 인쇄하는 게 내가 요청한 문서라면
      if (J === 0) {
        // answer = count 이니까 1을 리턴한다.
        return (answer = count);
      }
    }
    // 문서를 하나씩 꺼낼때마다 내가 요청한 문서가 앞으로 이동 - 1
    J--;
    // 내가 요청한 문서가 맨 뒤에 있다면
    if (J === -1) {
      // 인덱스가 0부터시작하니 1을 빼주면 몇 번째로 인쇄되는지 알 수 있다.
      J = priorities.length - 1;
    }
  }
  return answer;
}

function solution(priorities, location) {
  // 대기목록 을 만든다
  // priorities.map((value, index) => {내가 요청한 문서의 인덱스는 location, value: value})
  let list = priorities.map((target, index) => ({
    document: index === location,
    value: target,
  }));
  let count = 0;

  while (priorities.length > 0) {
    // 맨 앞 문서를 대기목록에서 꺼내고
    let current = list.shift();
    // 중요도가 더 큰 문서가 있다면 현재문서를 대기목록의 맨 뒤로 푸쉬
    // ? Array.prototype.some() : 배열안의 어떤 요소가 하나라도 true 라면 true
    if (list.some((target) => target.value > current.value)) {
      list.push(current);
    }
    // 현재 문서(맨 앞)보다 중요도가 높은 문서가 없다면
    else {
      // 카운트에 1을 더하고
      count++;
      // document: index === location(0)
      if (current.document) return count;
    }
  }
}

// 모범답안

function solution(priorities, location) {
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  let queue = [];

  while (arr.length > 0) {
    let document = arr.shift();
    let hasHighPriority = arr.some((e) => e.priority > document.priority);
    if (hasHighPriority) {
      arr.push(document);
    } else {
      queue.push(document);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
