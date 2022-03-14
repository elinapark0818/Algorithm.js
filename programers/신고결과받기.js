// * id_list = 이용자의 id가 문자열로 담긴 배열
// * report = 각 이용자가 신고한 id가 문자열로 담긴 배열
// * k = 신고 횟수

// todo: 신고당한 유저의 신고 횟수, 신고한 유저의 id를 알아야 한다
// todo: 신고당한 유저의 id를 key로 신고한 유저의 id를 배열로 저장하는 객체를 만들자

function solution(id_list, report, k) {
  // id_list 를 길이로 한 배열로 초기값은 0으로 처리한다
  let answer = new Array(id_list.length).fill(0);

  // todo: userId를 key로, 빈 배열을 value로 갖는 객체 만들기
  let report_list = {};
  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    // 아직 신고당한 적이 없다면
    if (!report_list[report_id].includes(user_id)) {
      // 신고기록에 추가하기
      report_list[report_id].push(user_id);
    }
  });

  // * k에 따른 이용정지 시키기
  for (let key in report_list) {
    // 신고 횟수가 k보다 크다면 이용 정지 시키기
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

// ? 좋아요 제일 많이 받은 코드
// ? Map() Set() get() 사용하기

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
