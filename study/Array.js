// 배열인지 아닌지 확인하기 위해서는 Array.isArray()
// 배열은 참조형 자료형이기 때문에 arr = [], arr !== [] 이다
// 길이에서 1을 뺀 값이 마지막 요소이다 length - 1
// 빈 배열인지 확인하기 위해서는 arr.length === 0
// 배열 안에서 더하는 함수를 만드는 방법은 arr.reduce((a, b) => (a + b))
// split 으로 정한 기준에 따라 끊고, 원하는 개수만큼 반환할 수 있다.
// str.split(' ', str.length)
// 문자열을 공백으로 끊고, 처음부터 문자열의 길이만큼의 개수를 문자열로 반환한다
// const newObject = [...object] 기존 object를 복제하여 할당 할 수 있다.
// 숫자로 이루어진 배열의 요소 중 가장 큰 값을 구하기 위해서는  arr.reduce((a, b) => Math.max(a, b)) 또는 Math.max(...arr)
// for of 로 간단하게 반복문 구현이 가능하다
// arr.slice(start, end(미포함)) 기존 배열을 복제하여 새로운 배열로 반환한다
// arr.slice() 배열을 그대로 복제해온다
// arr.slice(1) 인 경우 첫번째 요소를 제외한 배열을 만들 수 있다
// arr.slice(0, arr.length) 마지막 요소를 제외한 배열을 만들 수 있다
// arr.concat(anotherArr) 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
// push, pop, unshift, shift 는 기존 배열 내에서 요소를 추가/삭제 할 때 사용한다
// arr.join('') 배열을 또는 배열의 특정요소를 string 타입으로 반환한다
// arr.splice(0) 원본 배열을 리턴한다
// arr.splice() 빈 배열을 리턴한다

function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [0, 1]; // 0번째 피보나치 수는 0이고, 1번째 피보나치는 1이다.

  if (!num) {
    return [0];
  }

  for (let i = 2; i <= num; i++) {
    // 2번째 피보나치 수부터는! 반복문으로 구하자.
    result.push(result[i - 2] + result[i - 1]); // n-2번째 피보나치 수와 n-1번째 피보나치 수를 합한 결과다.
  }
  return result;
}

// 배열 메소드

// .concat : 두 개이상의 배열을 병합할 때 사용한다. 기존 배열을 변경하지 않고, 새 배열을 반환한다
const arr1 = ["a", "b", "c", "d"];
const arr2 = ["f"];
arr1.concat(arr2); //['a', 'b', 'c', 'd', 'f']

// .copyWithin(target, start, end) : 배열의 일부를 동일한 배열의 다른 위치에 복사하고 크기를 수정하지 않고 반환한다
const arr3 = ["z", "x", "c", "v"];
arr3.copyWithin(0, 2); // 0번째에 있는 요소를 2번째에 있는 요소로 바꾼다
// end 값은 조금 이해가 잘 안된다. (요소 복사를 종료할 0부터 시작하는 인덱스)

// .entries() : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 배열을 반환한다
const arr4 = ["q", 1, "w", 2];
const arrEntries = arr4.entries();
console.log(arrEntries.next().value); // [0, 'q']
console.log(arrEntries.next().value); // [1, 1]
console.log(arrEntries.next().value); // [2, 'w']
console.log(arrEntries.next().value); // [3, 2]

// .every() : 배열의 모든 요소가 제공된 함수에 의해 구현된 테스트를 통과하는지 여부를 테스트한다
function func(value) {
  return value > 10;
}
const arr5 = [1, 5, 15, 30];
arr5.every(func); // false
const arr6 = [50, 85, 30, 20];
arr6.every(func); // true

// .fill(value, start, end) : 시작 인덱스에서 끝 인덱스까지 배열의 모든 요소를 value 로 채운다.(정적 값으로)
// start 에서 end 전까지(end 미포함) value로 채운다
const arr7 = [0, 0, 0, 0, 0];
arr7.fill(1, 1); // [0, 1, 1, 1, 1]
arr7.fill(2, 2, 3); // [0, 0, 2, 0, 0]
arr7.fill(3, 4, 5); // [0, 0, 0, 0, 3]
arr7.fill(3, 0); // [3, 3, 3, 3, 3]
arr7.fill(0); // [0, 0, 0, 0, 0]

// .filter() : 제공된 함수에 의해 구현된 테스트를 통과하는 모든 요소가 포함된 새 배열을 만든다
const arr8 = ["apple", "queen", "fox", "tree"];
const arrFilter = arr8.filter((word) => word.length > 4); // ['apple', 'queen']

// .find() : 제공된 테스트 기능을 충족하는 배열의 첫 번째 요소 값을 반환한다. 그렇지 않으면 undefined가 반환한다
const arr9 = [10, 20, 30, 40, 50];
const arrFind = arr9.find(function (element) {
  return element > 30;
}); // 40

// .findIndex() : 제공된 테스트 기능을 만족하는 배열의 첫 번째 요소의 인덱스를 반환한다. 그렇지 않으면 -1이 반환한다
const arr10 = [10, 20, 30, 40, 50];
function findNumIndex(el) {
  return el > 30;
}
arr10.findIndex(findNumIndex); // 3

// .flat() : 지정된 깊이까지 재귀적으로 연결된 모든 하위 배열 요소로 새 배열을 만든다
const arr11 = [1, 2, [3, 4, [5, 6]]];
arr11.flat(); // [1, 2, 3, 4, [5, 6]]
arr11.flat(2); // [1, 2, 3, 4, 5, 6]
const arr12 = [1, [2, [3, [4, [5, [6]]]]]];
arr12.flat(Infinity); // [1, 2, 3, 4, 5, 6]

// .forEach() : 배열 요소당 한 번씩 제공된 함수를 실행한다
const arr13 = ["안녕?", "응 안녕", "그래"];
arr13.forEach(function (el) {
  console.log(el);
});
// 안녕?
// 응 안녕
// 그래

// .include() : 배열에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다
const arr14 = ["Mango", "Bori", "Dong2"];
arr14.includes("Mango"); // true
arr14.includes("아봉이"); // false

// .indexOf() : 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하거나, 존재하지 않는 경우 -1을 반환한다
arr14.indexOf("Bori"); // 1
arr14.indexOf("개냥이"); // -1

// .join() :  배열의 모든 요소를 ​​문자열로 결합한다
const arr15 = ["나는", "훌륭한", "개발자가", "될거야"];
arr15.join(" "); // '나는 훌륭한 개발자가 될거야'

// .keys() : 배열의 각 인덱스에 대한 키를 포함하는 새 배열 반복기를 반환한다
const arr16 = ["a", "b", "c", "d"];
const arrKeys = arr16.keys();
for (let key of arrKeys) {
  console.log(key);
}
// 0
// 1
// 2
// 3

// .lastIndexOf() : 배열에서 주어진 요소를 찾을 수 있는 마지막 인덱스를 반환하거나 존재하지 않는 경우 -1을 반환한다
const arr17 = ["오구", "아기오구", "오구", "뚜지"];
arr17.lastIndexOf("오구"); // 2
arr17.lastIndexOf("비노"); // -1

// .map() : 이 배열의 모든 요소에 대해 제공된 함수를 호출한 결과를 새 배열을 만든다
const arr18 = [0, 1, 2, 3];
const arrMap = arr18.map((x) => x * 3); // [0, 3, 6, 9]

// .pop() : 배열에서 마지막 요소를 제거하고 해당 요소를 반환한다. (배열의 길이가 변경된다)
const arr19 = ["a", "b", "c", "d"]; // arr19.length = 4
arr19.pop(); // 'd' 가 출력된다. arr19.length = 3

// .push() : 배열 끝에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환한다
const arr20 = ["A", "B", "C"];
arr20.push("H"); // 4 가 출력된다. ['A', 'B', 'C', 'H']

// .reduce() : 누산기와 배열의 각 값(왼쪽에서 오른쪽으로)에 대해 함수를 적용하여 단일 값으로 줄인다 (뭔 말이야 이게...)
const arr21 = [1, 2, 3, 4];
const arrReduce = (accumulator, currentValue) => accumulator + currentValue;

arr21.reduce(arrReduce); // 10 (1+2+3+4)
arr21.reduce(arrReduce, 10); // 20 (10(1+2+3+4) + 10)

// .reduceRight() : 누산기에 대해 함수를 적용하고 배열의 각 값(오른쪽에서 왼쪽으로)은 이를 단일 값으로 줄인다
const arr22 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(arr22); // [4, 5, 2, 3, 0, 1]

// .reverse() : 배열을 제자리에서 뒤집는다
const arr23 = ["One", "Two", "Three"];
arr23.reverse(); // ['Three', 'Two', 'One']

// .shift() : 배열에서 첫 번째 요소를 제거하고 해당 요소를 반환한다.(길이가 변경된다)
const arr24 = [1, 2, 3];
const arrShift = arr24.shift();
console.log(arrShift); // 1
console.log(arr24); // [2, 3]

// .slice() : 처음부터 끝까지(끝은 미포함) 선택된 새 배열 객체로 배열의 일부를 얕은 복사본으로 반환한다
const arr25 = ["ant", "bison", "camel", "duck", "elephant"];
arr25.slice(1); // ['bison', 'camel', 'duck', 'elephant']
arr25.slice(2, 4); // ['camel', 'duck']

// .some() : 배열의 일부 요소가 제공된 함수에 의해 구현된 테스트를 통과하는지 여부를 테스트한다
const arr26 = [20, 45, 5, 89];
const odd = function (el) {
  return el % 2 !== 0;
};
arr26.some(odd); // true

// .sort() : 배열의 요소를 제자리에 정렬하고 배열을 반환한다(유니코드 코드 포인트)
const arr27 = ["A", "a", "V", "z"];
arr27.sort(); // ['A', 'V', 'a', 'z']
const arr28 = [1, 30, 4, 21, 100000];
arr28.sort(); // [1, 100000, 21, 30, 4]

// .splice() : 기존 요소를 제거하거나 새 요소를 추가하여 기존 배열의 내용을 변경한다
// 요거 연습 좀 해야겠다
// .splice (start, deleteCount, item)
const arr29 = ["Jan", "March", "April", "June"];
// index 1 위치에 있는 0개 지우고, index 1 위치에 'Feb' 추가한다
arr29.splice(1, 0, "Feb"); // ['Jan', 'Feb', 'March', 'April', 'June']
// index 4 위치에 있는 1개의 요소를 지우고 index 4 위치에 'May'를 추가한다
arr29.splice(4, 1, "May"); // ['Jan', 'Feb', 'March', 'April', 'May']

// .toLocaleString : 배열의 요소를 나타내는 문자열을 반환한다.
const arr30 = ["오호 이렇게 쓰는군", new Date("19 Nov 2021 23:02:40 UTC")];
const localeString = arr30.toLocaleString("ko", { timeZone: "UTC" });
console.log(localeString); // 오호 이렇게 쓰는군,2021. 11. 19. 오후 11:02:40

// .toString() : 지정된 배열과 해당 요소를 나타내는 문자열을 반환한다
const arr31 = ["카레", "짜장", "짬뽕"];
arr31.toString(); // '카레,짜장,짬뽕'

// .unshift() : 배열의 시작 부분에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환한다
const arr32 = [5, 6, 7];
arr32.unshift(3, 4); // 5 를 출력한다
console.log(arr32); // [3, 4, 5, 6, 7]

// .value() : 배열의 각 인덱스에 대한 값을 포함하는 새 Array Iterator 객체를 반환한다
const arr33 = ["헤이", "마마"];
const arrValues = arr33.values(); // Array Iterator
for (value of arrValues) {
  console.log(value);
}
// 헤이
// 마마
