// filter( callbackfn [ , thisArg])

// callbackfn 의 인자
// (number, index, source)

const numbers = [100];

numbers.filter((number, index, source) => {
  console.log(number); // 100
  console.log(index); // 0
  console.log(source); // [100]
});

// 중복 값이 제거된 새로운 배열 만들기
const numbers = [33, 44, 221, 53, 44, 7, 7, 7, 4, 3, 33, 3, 4];

const result = numbers
  .filter((number, index, target) => {
    return target.indexOf(number) === index;
  })
  .sort((a, b) => a - b); // 오름차순

console.log(result); // [3, 4, 7, 33, 44, 53, 221]

// 배열안 객체에서 원하는 값을 골라 새로운 배열 만들기

const people = [
  { name: "젠이츠", exp: 10000, gender: "male" },
  { name: "네즈코", exp: 700000, gender: "female" },
  { name: "쿄주로", exp: 900000, gender: "male" },
  { name: "아카자", exp: 600000, gender: "male" },
  { name: "시노부", exp: 800000, gender: "female" },
];

const king = people.filter((p) => p.exp > 890000).map((k) => k.name);
console.log(king); // ['쿄주로']

const queen = people
  .filter((p) => p.gender === "female" && p.exp > 700000)
  .map((q) => q.name);
console.log(queen); // ['시노부']

// 배열안 객체의 특정값의 max, min 구하기
const friends = [
  { name: "아현", money: 700000 },
  { name: "선화", money: 800000 },
  { name: "수현", money: 200000 },
  { name: "윤정", money: 900000 },
  { name: "선지", money: 400000 },
];

const rich = friends.filter((girl, index, target) => {
  const max = Math.max(...target.map((m) => m.money));
  return girl.money === max;
});
console.log(rich);

const poor = friends.filter((girl, index, target) => {
  const min = Math.min(...target.map((m) => m.money));
  return girl.money === min;
});
console.log(poor);
