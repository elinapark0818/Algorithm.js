function studentReports(students) {
  // 학생들의 정보가 객체로 담겨있는 배열 (gender, name, grades)

  // 남학생의 정보를 제외하라
  const females = students.filter((s) => s.gender === "female");

  // grades의 속성값을 평균값으로 바꿔라
  return females.map((el) => {
    const avg = el.grades.reduce((a, b) => {
      // grades 값 다 더한 뒤 grade 개수로 나누기
      return a + b / el.grades.length;
    }, 0);
    // 평균값을 grades의 속성값으로 할당하기
    el.grades = avg;
    // females 인 애들 배열로 다 리턴하기
    return el;
  });
}
