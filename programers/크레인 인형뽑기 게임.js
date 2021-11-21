// board는 2차원 배열
// move는 움직일 위치를 나타내는 배열
// 뽑은 인형을 담을 바구니 역할을 담당할 배열 basket 을 만든다
// 0은 빈칸이니까, 0이 아닐때 board와 값이 같으면 인형을 뽑는다
// 인형을 뽑으면 인형 개수를 result에 카운트해서 더한다

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
}

function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach((order) => {
    const doll = pickup(board, order - 1);

    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return answer;
}

// forEach()
// forEach()는 throw(예외)를 발생시키지 않으면 중간에 반복을 종료할 수 없다.
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArray = [];

arr.forEach(function (element) {
  if (element % 2 == 1) {
    oddArray.push(element);
  }
});

console.log(oddArray); // [ 1, 3, 5, 7, 9 ]

// reduce(), map() 사용하기
// 비구조화 할당 = 배열이나 객체의 속성을 해체하여 그 값을 변수에 담을 수 있게 한다 (즉, 배열 또는 객체의 값을 편하게 꺼내 쓸 수 있게 하는 것)
// 전개 연산자(...) = 스프레드 문법, 깊은 복사

// map() : 대상이 되는 배열의 각 요소를 화살표함수의 반환 값으로 대체한다
// reduce() : 현재 reduce에서 돌아가고 있는 index의 이전 반환 값을 result에 저장한다
// () => {} : 예를들어 A => B 는 B를 반환한다
// ... : 뒤에 따라오는 객체 또는 배열의 값을 깊게 복사해서 추출하고, 빈 값이라면 삭제한다

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

//! 예를들어 let A = transpose([[1, 2, 3], [4, 5, 6]]) 일 때

// reduce는 [1,2,3]과 [4,5,6]이 요소가 되고
// map은 reduce가 [1,2,3]일 때 1과 2와 3이 되며, [4,5,6]일 때는 4,5,6이 된다
// 이 때 map은 각 요소에 ‘화살표 함수의 반환값’으로 대체하니까
// map((_, i) => [(result[i] || []), row[i]])에서 reduce = [1,2,3]일 때 1 은 map = […(result[0]||[]),row[0])이 된다.
// result[0]은 [][0]와 같고 이 값은 null이다
// […(null||[]),row[0])과 똑같기에 이 결과는 […[],1]이 된다
// (여기서 A||B는 A의 값이 null이나 undefined라면 B를 반환하고, 아니라면 A를 반환합니다.)
// 같은 방식으로 2와 3은 […[],2],[…[],3]이 된다.
// 그러므로 reduce = [1,2,3]일 때 map을 통해서 반환되는 것은 [[…[],1],[…[],2],[…[],3]]이 된다
// … 은 빈배열을 무시해버리기 때문에 [[1],[2],[3]]이  된다
// reduce가 [4,5,6]일 때에 result에는 ‘이전 인덱스의 반환값’인 [[1],[2],[3]] 이다
// reduce가 [4,5,6]일 때에는 4에서 […(result[0],[]),row[0])인데 이 값은, […([1]||[]),row[0])과 같다. 즉 […[1],4]와 같다
// … 사용하기 때문에 배열 안의 요소를 끄집어 내서 [1,4] 가 된다
// 결론적으로 A에는 [[1,2,3],[4,5,6]]을 함수를 통해 변환해준 [[1,4],[2,5],[3,6]]이 저장된다.
// transpose([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]])이기 때문에
// [[0, 0, 0, 4, 3],[0, 0, 2, 2, 5],[0, 1, 5, 4, 1],[0, 0, 0, 4, 3],[0, 3, 1, 2, 1]] 된다.
// 5 X 5 배열의 행과 열을 바꾸어주는 것과 같다.

//  splice() 와 length 로 푸는 방법

function solution(board, moves) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        answer += 2;
        arr.splice(arr.length - 2, 2);
      }
    }
  }
  return answer;
}
