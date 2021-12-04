// sort([ compareFunction ])
// sort()는 파라미터(compareFunction)가 입력되지 않으면, 유니코드 순서에 따라서 값을 정렬한다.

// 오름차순
function compareNumbers(a, b) {
  return a - b;
}

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// 내림차순
function compareNumbers(a, b) {
  return b - a;
}

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2, 1]

// 배열안 객체의 특정 값에 따른 오름차순 정렬하기
const girls = [
  { name: "다현", height: 159 },
  { name: "나화", height: 165 },
  { name: "자현", height: 169 },
  { name: "가정", height: 168 },
  { name: "파지", height: 163 },
];

// number 타입 오름차순 정렬하기
const result = girls.sort((a, b) => {
  if (a.height > b.height) return 1;
  if (a.height < b.height) return -1;
  return 0;
});
console.log(result);
// string 타입 오름차순 정렬하기
const alpha = girls.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(alpha);

// number 타입 내림차순 정렬하기 (삼항연산자)
girls.sort((a, b) => {
  return a.height > b.height ? -1 : a.height < b.height ? 1 : 0;
});

// string 타입 내림차순 정렬하기 (삼항연산자)
girls.sort((a, b) => {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
});
