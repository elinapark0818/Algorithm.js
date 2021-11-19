// 객체의 속성 값 조회방법

// 1. dot notation
const obj = {'name': 'elina', 'age': 30}
console.log(obj.name)

// 2. bracket notation
console.log(obj['name']);

// Reference Error
console.log(obj[name]);
// content is not defined : 정의된 content가 없다
// obj[따옴표를 안쓰면] 변수로 인식한다
// 새로운 변수에 obj의 속성을 할당한다면?
let a = 'name';
console.log(obj[a]);
// obj 속성과 동일한 이름으로 변수를 할당한다면?
let name = 'age';
// obj[name]은 변수로 취급되기 때문에, false 둘을 같지 않다.
obj[name] !== obj['name']

// 속성 값이 변할 수 있는 상황에는 bracket notation을 사용한다

// 속성 지우기
delete obj['name']

// obj 안에 속성이 있는지 확인하는 방법
'name' in obj   // true
'email' in obj  // false


// for of 는 string, array, 유사배열 등에만 사용되고, 객체에는 사용되지 않는다
// for in 을 사용하면 object 반복문을 아주 쉽게 사용할 수 있다.
const obj1 = {a: 1, b: 2}
const obj2 = {b: 4, c: 3}
function ex(obj1, obj2) {
    for (let i in obj2) {
        if (!(i in obj1)) {
            obj1[i] = obj2[i]
        }
    }
    return obj1
}

function frequentChar(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 가장 많이 반복되고, 해당숫자에 먼저 도달한 문자
    let frequentChar = '';
    // 두개의 객체를 입력받아야 함으로, 빈 객체를 선언
    let obj = {};
    // 가장 많이 반복된 횟수를 할당 할 변수
    let maxCount = 0;
    // 빈 문자열을 입력받았다면 빈 문자열을 리턴
    if (str.length === 0) {
    return '';
    }
    // str의 길이만큼 반복했을 때
    for (let i=0; i<str.length; i++) {
      // 띄어쓰기를 제외시키기 위해 띄어쓰기가 없다면을 첫 번째 조건으로
    if (str[i] !== ' ') {
        // 두 번째 조건으로는 값이 있는 경우
        if (obj[str[i]] === undefined) {
          // 값이 없는건 0으로 처리
        obj[str[i]] = 0;
        }
        // 첫 번째, 두 번째 조건을 성립한다면 1씩 더한다. count + 1 처리
        obj[str[i]]++
        // 가장 먼저 횟수에 도달한 문자(i)를 리턴하게 하기 위해 할당
        if (obj[str[i]] > maxCount) {
        maxCount = obj[str[i]];
        frequentChar = str[i]
        }
    }
    }  
    return frequentChar
}

// 객체 메소드

// Object.keys() : 객체의 키를 포함하는 배열을 만든다

const a = {a:1, b:2, c:3, d:4};
const objKeys = Object.keys(a)  // ['a', 'b', 'c', 'd']
// forEach와 같이 사용하면 키와 값을 반복하는 데 사용할 수 있다
Object.keys(a).forEach((key) => {
    let value = a[key]
    console.log(`${key}: ${value}`)
    // a: 1
    // b: 2
    // c: 3
    // d: 4
})
// Object.keys 로 객체의 길이를 확인할 수 있다
const length = Object.keys(a).length    // 키가 4개이므로(a,b,c,d) 4가 출력된다

// Object.values() : 객체의 값을 포함하는 배열을 만든다
const objValues = Object.values(a)  // [1, 2, 3, 4]

// Object.entries() : 객체의 키와 값으로 이루어진 중첩 배열을 만든다
const entries = Object.entries(a)   // [["a", 1] ["b", 2] ["c", 3] ["d", 4]]
// forEach와 같이 사용하면 결과를 반복하는 데 사용할 수 있다 
// (Object.keys 랑 entries를 이용한 거랑 동일)
entries.forEach((entry) => {
    let key = entry[0]
    let value = entry[1]
    console.log(`${key}: ${value}`)
})

// Object.assign() : 객체를 다른 객체로 값을 복사할 때 사용한다
const objAssign1 = {
    first: 'First value',
    second: 'Second value'
}
const objAssign2 = {
    third: 'Third value',
    four: 'Four value'
}
const assign = Object.assign(objAssign1, objAssign2)
// { first: 'First value', 
//   second: 'Second value', 
//   third: 'Third value', 
//   four: 'Four value'}

//  스프레드 연산자를 이용하면 더 간단하게 할 수 있다.
const assign2 = {...objAssign1, ...objAssign2}
// { first: 'First value', 
//   second: 'Second value', 
//   third: 'Third value', 
//   four: 'Four value'}

// Object.freeze() : 객체의 키와 값에 대한 수정을 방지, 추가 제거도 방지한다
// Object.seal() : 추가 제거도 방지한다. 하지만 객체의 키와 값에 대한 수정은 가능하다
