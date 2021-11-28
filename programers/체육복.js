// 여벌 체육복이 있는 학생이 도난당한 학생에게 체육복을 빌려준다
// 바로 앞번호 또는 바로 뒷번호 학생에게만 빌려줄 수 있다
// 전체 학생 수 n
// 도난당한 학생들의 번호가 담긴 배열 lost
// 여벌 체육복이 있는 학생들의 번호가 담긴 배열 reserve
// 여벌 체육복이 있지만 도난당했을 수 있다. 그러면 못 빌려준다

// fill(value, start, end)
// end는 미포함

const arr = [0, 1, 2];
arr.fill("fill");
// ['fill', 'fill', 'fill']

const arr = [0, 1, 2, 3, 4, 5];
arr.fill("fill", 2, 5);
// [0, 1, 'fill', 'fill', 'fill', 5]

// Array()
// 요소를 넣으면 요소가 포함된 배열을 생성한다
// 숫자를 넣으면 숫자만큼의 길이를 가진 배열을 생성한다
const el = "element";
Array(el);
// ['element']

Array("1", "2", "[3,4]");
// ['1', '2', '[3,4]']

const num = 5;
Array(num).fill(1);
// [1, 1, 1, 1, 1]

function solution(n, lost, reserve) {
  // 모든 학생들이 1개이상의 체육복을 가지고 있으니
  // 전체학생 수만큼 1(체육복)을 가진 배열 student 생성
  const student = Array(n).fill(1);

  // 도난당한 학생은 체육복을 1개 가지고 있었다.
  // 도난당했으니 0개의 체육복을 가지게 만들자
  for (let i = 0; i < lost.length; i++) {
    student[lost[i] - 1]--;
  }
  // 여벌 체육복이 있는 학생은 2개의 체육복을 가지게 만들자
  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i] - 1]++;
  }
  // 앞 번호 또는 뒷번호 학생이 체육복이 없다면 빌려주게 만들자
  for (let i = 0; i < student.length; i++) {
    // 체육복이 없다면
    if (!student[i]) {
      // 앞 번호 학생이 체육복이 2개라면
      if (student[i - 1] === 2) {
        // 앞 번호 학생의 체육복을
        student[i - 1] = 1;
        // 체육복이 없는 학생에게 준다
        student[i]++;
        continue;
      }
      // 뒷 번호 학생이 체육복이 2개라면
      if (student[i + 1] === 2) {
        // 뒷 번호 학생을 체육복을
        student[i + 1] = 1;
        // 체육복이 없는 학생에게 준다
        student[i] = 1;
      }
    }
  }
  // 체육복을 1개이상 가지고 있는 학생들이 몇 명인지 리턴하라
  return student.filter((had) => had > 0).length;
}

// 다른 풀이
// filter() 와 find() 사용
//  || 로 앞 또는 뒤번호 학생에게 빌려주게 만들었다

function solution(n, lost, reserve) {
  // 여벌 체육복이 있지만, 도난 당하지 않은 학생
  const Reserve = reserve.filter((i) => !lost.includes(i));
  // 도난 당했고 여벌 체육복이 없는 학생
  const Lost = lost.filter((i) => !reserve.includes(i));

  const studentLength = Lost.filter((s) => {
    return Reserve.find((r, i) => {
      // 앞번호 또는 뒷번호에게
      const has = r === s - 1 || r === s + 1;
      // 줄 수 있다면 삭제
      if (has) {
        delete Reserve[i];
      }
      return has;
    });
  }).length;
  return n - (Lost.length - studentLength);
}
