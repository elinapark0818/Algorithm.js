function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.

  // 탈출조건 : matryoshka : null  (arr.length === 0)
  // 고정값 : 객체의 matryoshka 값
  // 재귀함수 : matryoshka.size 확인하고 matryoshka.matryoshka ( arr.slice )
  // or :

  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  } else {
    return false;
  }
}

//

if (matryoshka === null || matryoshka === undefined) {
  return false;
} else if (matryoshka.size >= size) {
  if (matryoshka.size === size) return true;
  return findMatryoshka(matryoshka.matryoshka, size);
} else return false;
