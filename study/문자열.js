// str[index]
// index 로 접근 가능 read-only

const string = 'AbcDef';
console.log(string[0]); // A
console.log(string[1]); // b
console.log(string[2]); // c
console.log(string[3]); // D

const string_1 = '안녕하세요';
const string_2 = ' '; // 띄어쓰기라는 문자열이 들어있음
const string_3 = '만나서 반가워요';
console.log(string_1 + string_2 + string_3);

const numString_1 = '5';
const numString_2 = '10';
console.log(numString_1 + numString_2);
console.log(numString_1 + 5);

const number_1 = 5;
const number_2 = 10;
console.log(number_1 + number_2);

// str.indexOf()
// 찾고자 하는 문자의 index 를 출력

'블랙프라이데이'.indexOf('블')
'블랙프라이데이'.indexOf('랙')
'블랙프라이데이'.indexOf('후')
'블랙프라이데이'.indexOf('이')

// str.includes()
// 문자열에 있는지 없는지 Boolean 출력

'대한민국'.includes('한')
'대한민국'.includes('롸')

// str.split()
// 분리 기준을 사용자 정의하여 문자열을 분리해서 배열에 넣는다

let splitArray = '가 나 다 라 마 바 사'
splitArray.split(' ')

// csv
// 

let csv = `짜장면,짬뽕
계란볶음밥,XO볶음밥
탕수육,깐풍기
유산슬,어향가지`;


csv.split(',')

let enter = csv.split('\n')
console.log(enter);

enter[0].split(',')
enter[1].split(',')

// str.substring(start, end)
// start 에서 end index 사이의 문자열 출력

'도레미파솔라시도'.substring(0,3)
'도레미파솔라시도'.substring(4,8)

// str.toLowerCase()
// 소문자로 변환하여 출력하지만, IMMUTABLE : 근본이 변하지 않는다

// str.toUpperCase()
// 대문자로 변환하여 출력하지만, IMMUTABLE : 근본이 변하지 않는다

// 함수를 선언할 때는 매개변수
// 함수를 실행할 때는 전달인자

