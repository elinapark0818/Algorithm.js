// 큐(Queue)
// progresses : 먼저 배포되어야 하는 순서대로 작업 진도(number)가 담긴 배열
// speeds : 각 progress 의 개발속도. 하루에 개발가능한 퍼센트
// ? 각 배포마다 몇 개의 기능이 배포되었는지

// ! 예시
// ! progresses = [93, 30, 55]
// !     speeds = [1, 30, 5]
// ! 7일 뒤(100), 3일 뒤(120), 9일 뒤(100)
// ! 7일 뒤에 2개의 기능이 배포, 9일 뒤에 1개의 기능이 배포

// ? 큐는 while 문이랑 자주 쓰이는 걸 기억하자

function solution(progresses, speeds) {
  let answer = [];
  // 배포 가능한 기능 개수
  let count = 0;
  // 배포될 날짜
  let day = 1;
  // 작업 진도
  let possible = 0;

  // 작업할 기능이 있을 때만 반복문
  while (progresses.length > 0) {
    // 작업 진도 : 현재 진도 + 작업 속도 * 일자
    possible = progresses[0] + speeds[0] * day;

    // 진도가 100을 달성하면
    if (possible >= 100) {
      // 배포 가능한 기능 개수 증가
      count++;
      // 배포했으니까 맨 앞 요소 삭제
      progresses.shift();
      speeds.shift();
    }
    // 앞에 있는 기능이 100이 안되면 배포가 안되게
    else {
      // 배포 완료된 기능이 있다면
      if (count > 0) {
        // 카운트를 담아준다
        answer.push(count);
      }
      // 하루 증가
      day++;
      // 배포 완료되었으니, 초기화
      count = 0;
    }
  }
  // 모든 작업이 배포가 끝나면 마지막 카운트를 담는다
  answer.push(count);
  return answer;
}

// 다른 풀이
// 예시 : progresses = [93, 30, 55], speeds = [1, 30, 5]

function solution(progresses, speeds) {
  let answer = [0];
  // 배포될 날짜를 한번에 구해버리자
  let days = progresses.map((progress, index) =>
    // progress = 93, speed = 1 이면, 7 / 1 = 7 을 올림하면 7
    // progress = 30, speed = 30 이면, 70 / 30 = 2.3 을 올림하면 3
    Math.ceil((100 - progress) / speeds[index])
  );
  // 최종 배포일은 7이 된다
  let maxDay = days[0];
  // 같은 날 배포되는 기능 찾기
  for (let i = 0, j = 0; i < days.length; i++) {
    // days = [7, 3, 5]
    // 7일 안에 기능 개발이 완료된다면
    if (days[i] <= maxDay) {
      // 한 번에 배포되는 기능의 개수를 증가시키고
      answer[j] += 1;
    } else {
      // 다음 기능의 배포일이 최종 배포일이 된다
      maxDay = days[i];
      // answer 에 요소 1을 push 한다
      answer[++j] = 1;
    }
  }
  return answer;
}
