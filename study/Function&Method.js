// String

// .charAt(index) : index에 해당하는 문자를 반환한다
// .charCodeAt(index) : index에 해당하는 유니코드 값을 반환한다
// .concat(str) : 문자열과 문자열을 합친 값을 반환한다
// .indexOf(str) : 문자열 내 특정 문자의 index 값을 반환한다
// .lastIndexOf(str) : 문자열 내 특정 문자가 마지막으로 위치한 index 값을 반환한다
// .match(Regexp) : 정규식과 일치하는 문자열을 반환한다
// .replace(Regexp | str, newStr) : 문자열을 다른 문자열로 바꾼 값을 반환한다
// .search(Regexp) : 정규식을 사용하여 특정 문자열의 index 값을 반환한다
// .split(separator, limit) : separator를 기준으로 문자열을 쪼개어 배열에 담아 반환한다
// .toLowerCase() : 문자열을 소문자로 변환해서 반환한다
// .toUpperCase() : 문자열을 대문자로 변환해서 반환한다
// ? .valueOf() : 문자열에 대한 원시 데이터형을 반환한다...
// .substr(start, length) : 문자열의 start 위치부터 length 길이만큼 문자열을 잘라내어 해당하는 문자열을 반환한다
let str = "가나다!";
let firstSubstr = str.substr(0, 1);
console.log(firstSubstr); // 가
let secondSubstr = str.substr(1, 1);
console.log(secondSubstr); // 나
let lastSubstr = str.substr(str.length - 1, 1);
console.log(lastSubstr); // !
// substr에 start만 넣으면, start 부터 끝까지의 문자열을 반환한다
let oneValue = str.substr(1);
console.log(oneValue); // 나다!

// .substring(from, to) : 문자열의 특정 구간에 해당하는 문자열을 반환한다
let firstSubstring = str.substring(0, 1);
console.log(firstSubstring); // 가
let secondSubstring = str.substring(1, 2);
console.log(secondSubstring); // 나
let lastSubstring = str.substring(str.length - 1, str.length);
console.log(lastSubstring); // !
//  from이 to보다 클 경우 값을 바꿔서 처리한다.
// str.substring(0, 1) 로 처리된다
let substring = str.substring(1, 0);
console.log(substring); // 가
// from 또는 to의 값이 음수일 경우 0으로 취급한다
let substring2 = str.substring(-2, 4);
console.log(substring2); // 가나다!

// .slice(start, end) : 문자열의  해당하는 문자열을 반환한다
let firstSlice = str.slice(0, 1);
console.log(firstSlice); // 가
let secondSlice = str.slice(1, 2);
console.log(secondSlice); // 나
let lastSlice = str.slice(str.length - 1, str.length);
console.log(lastSlice); // !
// start가 end보다 클 경우 빈 문자열을 반환한다
let slice = str.slice(1, 0);
console.log(slice); // (출력값이 없다)
// start 또는 end 값이 음수일 경우, 뒤에서부터의 index가 start값으로 취급된다.
let slice2 = str.slice(-2, 4);
console.log(slice2); // 다!
let slice3 = str.slice(0, -1);
console.log(slice3); // 가나다
// start 또는 end 값이 음수이고, 음수의 절대값이 srt.length보다 크다면 0으로 취급된다
let slice4 = str.slice(-9, 4);
console.log(slice4); // 가나다!

// Number

// .isNaN() : NaN인지 확인한다.
// .isFinite() : 유한수인지 확인한다
// .isInteger() : 정수인지 확인한다
// .parseInt(string, radix) : 문자열을 정수로 반환한다
// .parseFloat() : 문자열을 실수로 반환한다

// Math

// .abs() : 절대값을 반환한다
// .ceil() : 소수점을 가장 가까운 정수로 올림하여 반환한다
// .floor() : 소수점을 가장 가까운 정수로 내림하여 반환한다
// .max() : 가장 큰 수를 반환한다
// .min() : 가장 작은 수를 반환한다
// .pow(number, n) : 거듭제곱을 반환한다
// .random() : 0과 1 사이의 랜덤한 수를 반환한다
// .round(x) : 소수점을 가장 가까운 정수로 반환한다
// .sqrt(x) : 제곱근을 반환한다

// Regexp

// .exec(str) : 정규식과 일치하는 문자열을 배열에 담아서 반환한다
// .test(str) : 정규식과 일치하는 문자열이 있으면 true, 없으면 false 를 반환한다
