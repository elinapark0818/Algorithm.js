function solution(files) {
  //     정규식으로 필터링하는게 좋겠다.
  //     HEAD : 일단 헤더는 숫자가 아니다 그리고 최소 한 글자 이상이다. (\D+)
  //     NUMBER : 그 뒤로 숫자들이 오는데, 1~5자리 숫자이다. (\d{1,5})
  //     TAIL : 숫자가 있을수도 있고, 아무 글자가 없을 수도 있다.
  //     대소문자 구분하지 않음 -> 출력이 소문자로 되어있다.
  const reg = /(\D+)(\d{1,5})/;

  return files.sort((a, b) => {
    let [aHEAD, aNUMBER] = a.match(reg).slice(1, 3);
    let [bHEAD, bNUMBER] = b.match(reg).slice(1, 3);

    aHEAD = aHEAD.toLowerCase();
    bHEAD = bHEAD.toLowerCase();

    // HEAD, NUMBER 둘다 같다면 순서를 유지시키기 return 0 === 위치를 그대로
    if (aHEAD === bHEAD && aNUMBER === bNUMBER) {
      return 0;
    }
    // HEAD가 같다면, 숫자 순으로 정렬한다 sort(a-b) === 오름차순
    else if (aHEAD === bHEAD) {
      return aNUMBER - bNUMBER;
    }
    // HEAD 사전순으로 정렬 return 1 === aHEAD 가 먼저 온다
    else if (aHEAD > bHEAD) {
      return 1;
    }
    // b 가 먼저 온다.(변경 발생)
    else return -1;
  });
}
